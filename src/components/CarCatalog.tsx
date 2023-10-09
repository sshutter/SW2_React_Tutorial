import Link from "next/link";
import ProductCard from "./ProductCard";

export default async function CarCatalog({ carJson }: { carJson: Object }) {
  const carJsonReady = await carJson;
  return (
    <>
      Explore {carJsonReady.count} model
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "space-around",
        }}
      >
        {carJsonReady.data.map((car: Object) => (
          <Link href={`/car/${car.id}`} className="w-1/5">
            <ProductCard
              key={car.cid}
              cardName={car.model}
              imgSrc={car.picture}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
