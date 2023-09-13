"use client";
import styles from "./Banner.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Banner() {
  const covers = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg"];
  let [index, setIndex] = useState(0);
  return (
    <div
      className={styles.banner}
      onClick={() => {
        setIndex((index + 1) % covers.length);
      }}
    >
      <Image
        src={covers[index]}
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
