"use client";
import ProductCard from "./ProductCard";
import { useReducer } from "react";

export default function CarPanel() {
  const compareReducer = (
    compareList: Set<string>,
    action: { actionType: string; cardName: string }
  ) => {
    switch (action.actionType) {
      case "add": {
        return new Set(compareList.add(action.cardName));
      }
      case "remove": {
        compareList.delete(action.cardName);
        return new Set(compareList);
      }
      default:
        return compareList;
    }
  };

  const [compareList, dispatchCompare] = useReducer(
    compareReducer,
    new Set<string>()
  );
  return (
    <div>
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
        <ProductCard
          cardName="Honda Civic"
          imgSrc="/img/civic.jpg"
          onCompare={(car: string) => {
            dispatchCompare({ actionType: "add", cardName: car });
          }}
        />
        <ProductCard
          cardName="Honda Accord"
          imgSrc="/img/accord.jpg"
          onCompare={(car: string) => {
            dispatchCompare({ actionType: "add", cardName: car });
          }}
        />

        <ProductCard
          cardName="Toyota Fortuner"
          imgSrc="/img/fortuner.jpg"
          onCompare={(car: string) => {
            dispatchCompare({ actionType: "add", cardName: car });
          }}
        />
        <ProductCard
          cardName="Tesla Model 3"
          imgSrc="/img/tesla.jpg"
          onCompare={(car: string) => {
            dispatchCompare({ actionType: "add", cardName: car });
          }}
        />
      </div>
      <div className="w-full text-xl font-medium text-black">
        Compare List:{compareList.size}
      </div>
      {Array.from(compareList).map((car) => (
        <div
          key={car}
          className="text-black"
          onClick={() => {
            dispatchCompare({ actionType: "remove", cardName: car });
          }}
        >
          {car}
        </div>
      ))}
    </div>
  );
}
