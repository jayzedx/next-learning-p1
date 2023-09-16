import styles from "@/styles/greeting.module.css"; // Import CSS Module

// http://localhost:3000/greeting/smile
const Hello = () => {
  return <div className={styles.container}>Smile from index</div>;
};

export default Hello;
