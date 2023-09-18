"use client";
import Link from "next/link";
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

  /**
   * Mock data for demonstration only
   */
  const mockCarRepo = [
    { cid: "001", name: "Honda Civic", imgSrc: "/img/civic.jpg" },
    { cid: "002", name: "Honda Accord", imgSrc: "/img/accord.jpg" },
    { cid: "003", name: "Toyota Fortuner", imgSrc: "/img/fortuner.jpg" },
    { cid: "004", name: "Tesla Model 3", imgSrc: "/img/tesla.jpg" },
  ];

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
        {mockCarRepo.map((car) => (
          <Link href={`/car/${car.cid}`} className="w-1/5">
            <ProductCard
              key={car.cid}
              cardName={car.name}
              imgSrc={car.imgSrc}
              onCompare={() => {
                dispatchCompare({ actionType: "add", cardName: car.name });
              }}
            />
          </Link>
        ))}
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
