import { GetStaticPaths, GetStaticProps } from "next";
import coffeeData from "@/data/coffee.json";
import { useRouter } from "next/router";
import Card from "@/components/Card";

interface CoffeeItemProps {
  id: number;
  name: string;
  imgUrl: string;
}

// Step 1
const CoffeeItemPage: React.FC<CoffeeItemProps> = (item) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      <Card
        key={item.id}
        href={`/coffee/${item.id}`}
        name={item.name}
        imgUrl={item.imgUrl}
      />
    </div>
  );
};

// Step 2 SSG
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = coffeeData.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
  return { paths, fallback: false }; // fallback: false means 404 for unknown paths
};

// Step 3 SSG
export const getStaticProps: GetStaticProps<CoffeeItemProps> = async ({
  params,
}) => {
  const id = params?.id;
  const item = coffeeData.find((coffee) => coffee.id.toString() === id);
  if (!item) {
    return {
      notFound: true,
    };
  }
  return {
    props: { ...item },
  };
};

export default CoffeeItemPage;
