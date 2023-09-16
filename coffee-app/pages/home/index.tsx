import Card from "@/components/Card";
import styles from "@/styles/card.module.css";
import coffeeStores from "@/data/coffee.json";

interface CoffeeItem {
  id: number;
  name: string;
  imgUrl: string;
}

interface HomeProps {
  data: CoffeeItem[];
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const coffeeItems: JSX.Element[] = data.map(
    (item: CoffeeItem, index: number) => {
      return (
        <Card
          key={index}
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

// static server side rendering
// export async function getStaticProps() {
//   const data = coffeeStores;
//   return {
//     props: {
//       data,
//     },
//   };
// }

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
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: [],
      },
    };
  }
}

export default Home;
// http://localhost:3000/home
