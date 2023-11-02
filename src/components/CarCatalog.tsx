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
          <Link
            href={`/car/${car.id}`}
            key={car.id}
            className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8"
          >
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
