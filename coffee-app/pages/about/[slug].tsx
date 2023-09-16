import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";

/**
 * Example for using SSG
 */

interface Slug {
  slug: string;
}

interface GenericParams {
  slug: string;
  [key: string]: string; // Add an index signature
}

const About: React.FC<Slug> = ({ slug }) => {
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

const fetchSlugs = async () => {
  try {
    const slugs = ["me", "company", "yours"];
    return slugs;
  } catch (error) {
    throw error;
  }
};

export const fetchDataBySlug = async (slug: string): Promise<Slug> => {
  try {
    const response = await axios.get(`/api/${slug}`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    const data: Slug = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data by slug:", error);
    throw error;
  }
};

export const getStaticPaths: GetStaticPaths<GenericParams> = async () => {
  const slugs: string[] = await fetchSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false }; // fallback: false means 404 for unknown paths
};

export const getStaticProps: GetStaticProps<Slug, GenericParams> = async ({
  params,
}) => {
  if (!params) {
    throw new Error("Params are undefined"); // Handle this case appropriately
  }
  const data: Slug = await fetchDataBySlug(params.slug);
  return {
    props: {
      slug: params.slug,
      data,
    },
  };
};
