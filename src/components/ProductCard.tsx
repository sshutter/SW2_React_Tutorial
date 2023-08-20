import Image from "next/image";
import styles from "./ProdectCard.module.css";

export default function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image
          src={"/img/car1.jpg"}
          alt="Product Image"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardtext}>Car 1</div>
    </div>
  );
}
