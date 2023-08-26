import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      <Banner />
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
        <ProductCard cardName="Honda Civic" imgSrc="/img/civic.jpg" />
        <ProductCard cardName="Honda Accord" imgSrc="/img/accord.jpg" />
        <ProductCard cardName="Toyota Fortuner" imgSrc="/img/fortuner.jpg" />
        <ProductCard cardName="Tesla Model 3" imgSrc="/img/tesla.jpg" />
      </div>
    </main>
  );
}
