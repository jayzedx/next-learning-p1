import styles from "@/styles/greeting.module.css"; // Import CSS Module
import Image from "next/image";

const Hello = () => {
  return (
    <div className={styles.container}>
      Hello
      <Image src="/images/image.jpeg" alt="beauty" width={150} height={150} />
    </div>
  );
};
// http://localhost:3000/greeting/hello
export default Hello;
