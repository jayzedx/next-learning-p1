import Card from "@/components/Card";
import styles from "@/styles/card.module.css";
import { useRouter } from "next/router";
import coffeeData from "@/data/coffee.json";
import { GetStaticProps } from "next";

interface CoffeeItem {
  id: number;
  name: string;
  imgUrl: string;
}

interface CoffeePageProps {
  items: CoffeeItem[];
  error: boolean;
}

const CoffeePage: React.FC<CoffeePageProps> = ({ items, error }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading..</div>;
  }
  const coffeeItems: JSX.Element[] = items.map(
    (item: CoffeeItem, index: number) => {
      return (
        <Card
          key={item.id}
          href={`/coffee/${item.id}`}
          name={item.name}
          imgUrl={item.imgUrl}
        />
      );
    }
  );

  return (
    <div>
      <h1>Home Page</h1>
      <div
        className={styles.card_container}
        style={
          {
            // display: "flex",
            // flexWrap: "wrap",
            // backgroundColor: "DodgerBlue",
          }
        }
      >
        {coffeeItems}
      </div>
    </div>
  );
};

// SSG
// export const getStaticProps: GetStaticProps<CoffeePageProps> = async () => {
//   return {
//     props: {
//       items: coffeeData,
//       error: false,
//     },
//   };
// };

// SSR
export async function getServerSideProps() {
  const apiUrl = "https://coffeerota.free.beeceptor.com/coffee";
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }
    const data: CoffeeItem[] = await response.json();
    return {
      props: {
        items: data,
        error: false,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        items: coffeeData,
        error: true,
      },
    };
  }
}

export default CoffeePage;
// http://localhost:3000/coffee
