"use client";
import styles from "./Banner.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {
  const covers = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg"];
  let [index, setIndex] = useState(0);
  const router = useRouter();

  const { data: session } = useSession();

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
      {session ? (
        <div className="z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl">
          Hello {session.user?.name}
        </div>
      ) : null}
      <button
        className="bg-white text-cyan-600 border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/car");
        }}
      >
        Select Your Travel Partner Now
      </button>
    </div>
  );
}
