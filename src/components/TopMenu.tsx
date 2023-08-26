import Image from "next/image";
import styles from "./TopMenu.module.css";
import TopMenuItem from "./TopMenuItem";

export default function Topmenu() {
  return (
    <div className={styles.menucontainer}>
      <Image
        src={"/img/logo.png"}
        alt="Logo"
        className={styles.logoimg}
        width={0}
        height={0}
        sizes="100vh"
      />
      <TopMenuItem title="Reservations" pageRef="/reservations" />
      <TopMenuItem title="About" pageRef="/about" />
    </div>
  );
}
