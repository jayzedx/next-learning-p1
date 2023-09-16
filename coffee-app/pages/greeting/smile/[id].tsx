import styles from "@/styles/greeting.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

// http://localhost:3000/greeting/smile/{id}
const Smile = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      Smile by {router.query.id}
      <div>
        <Link href="/" passHref>
          Back to home
        </Link>
      </div>
    </div>
  );
};
export default Smile;
