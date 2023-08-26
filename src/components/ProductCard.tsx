import Image from "next/image";
import styles from "./ProdectCard.module.css";

export default function ProductCard({
  cardName,
  imgSrc,
}: {
  cardName: string;
  imgSrc: string;
}) {
  return (
    <div className="w-1/5 h-[300px] rounded-lg shadow-lg bg-white">
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Product Image"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[30%] p-[10px] text-black">{cardName}</div>
    </div>
  );
}
