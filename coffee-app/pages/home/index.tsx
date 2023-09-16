import Card from "@/components/Card";
import styles from "@/styles/card.module.css";
import coffeeStores from "@/data/coffee.json";

const Home = () => {
  interface CoffeeItem {
    id: number;
    name: string;
    imgUrl: string;
  }
  const coffeeItems: JSX.Element[] = coffeeStores.map(
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
// http://localhost:3000/home
export default Home;
