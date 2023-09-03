import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function ProductCard({
  cardName,
  imgSrc,
}: {
  cardName: string;
  imgSrc: string;
}) {
  function onCarSelected() {
    alert("You selected " + cardName);
  }
  return (
    <InteractiveCard contentName={cardName}>
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Product Image"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[30%] p-[10px] text-black">{cardName}</div>
    </InteractiveCard>
  );
}
