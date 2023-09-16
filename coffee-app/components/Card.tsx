import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/card.module.css";
import cls from "classnames";

// const Card = (props) => {
//   return (
//     <Link href={props.href}>
//       <h2>{props.name}</h2>
//       <Image src={props.imgUrl} width={200} heigt={200} />
//     </Link>
//   );
// };

export interface CardProps {
  href: string;
  name: string;
  imgUrl: string;
}

const Card: React.FC<CardProps> = ({ href, name, imgUrl }) => {
  return (
    <div className={cls("glass", styles.card)}>
      <Link href={href}>
        <h4>{name}</h4>
        <Image src={imgUrl} width={200} height={200} alt={""} />
      </Link>
    </div>
  );
};

export default Card;
