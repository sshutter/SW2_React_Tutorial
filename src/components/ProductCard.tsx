import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function ProductCard({
  cardName,
  imgSrc,
  onCompare,
}: {
  cardName: string;
  imgSrc: string;
  onCompare: Function;
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
      <div className="w-full h-[15%] p-[10px] text-black">{cardName}</div>
      <button
        className="block h-[10%] text-sm rounded-md bg-sky-600 hover:bg-indigo-600 mx-2 p-1 shadow-sm text-white"
        onClick={(e) => {
          e.stopPropagation();
          onCompare(cardName);
        }}
      >
        Compare
      </button>
    </InteractiveCard>
  );
}
