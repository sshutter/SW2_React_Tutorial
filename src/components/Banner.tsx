import styles from "./Banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src={"/img/cover.jpg"}
        alt="cover"
        fill={true}
        objectFit="cover"
        priority
      />
      <div className={styles.bannerText}>
        <h1 className="text-4xl font-medium">Your Travel Banner</h1>
        <h3 className="text-xl font-serif">Explore Your World with Us</h3>
      </div>
    </div>
  );
}
