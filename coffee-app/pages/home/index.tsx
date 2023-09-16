import Card from "@/components/Card";
import { wrap } from "module";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "DodgerBlue",
        }}
      >
        <Card
          href="/coffee/latte"
          name="Latte light milk"
          imgUrl="/images/product.jpeg"
        />
        <Card
          href="/coffee/latte"
          name="Latte light milk"
          imgUrl="/images/product.jpeg"
        />
        <Card
          href="/coffee/latte"
          name="Latte light milk"
          imgUrl="/images/product.jpeg"
        />
        <Card
          href="/coffee/latte"
          name="Latte light milk"
          imgUrl="/images/product.jpeg"
        />
      </div>
    </div>
  );
};
// http://localhost:3000/home
export default Home;
