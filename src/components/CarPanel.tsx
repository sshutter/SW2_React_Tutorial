"use client";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useReducer } from "react";
import { useRef, useEffect, useState } from "react";
import getCars from "@/libs/getCars";

export default function CarPanel() {
  const [carResponse, setCarResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cars = await getCars();
      setCarResponse(cars);
    };
    fetchData();
  }, []);

  const countRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

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

  // /**
  //  * Mock data for demonstration only
  //  */
  // const mockCarRepo = [
  //   { cid: "001", name: "Honda Civic", imgSrc: "/img/civic.jpg" },
  //   { cid: "002", name: "Honda Accord", imgSrc: "/img/accord.jpg" },
  //   { cid: "003", name: "Toyota Fortuner", imgSrc: "/img/fortuner.jpg" },
  //   { cid: "004", name: "Tesla Model 3", imgSrc: "/img/tesla.jpg" },
  // ];

  if (!carResponse) {
    return <p className="text-black">Car Panel is loading ...</p>;
  }

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
        {carResponse.data.map((car: Object) => (
          <Link href={`/car/${car.id}`} className="w-1/5">
            <ProductCard
              key={car.id}
              cardName={car.model}
              imgSrc={car.picture}
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
      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
        onClick={() => {
          countRef.current += 1;
          alert(countRef.current);
        }}
      >
        Count With Local Variable
      </button>
      <input
        type="text"
        placeholder="Please fill"
        className="block text-gray-900 text-sm rounded-lg p-2 m-2 bg-purple-50 ring-1 ring-inset ring-purple-400 focus:outline-none focus:ring-2 focus:bg-purple-200"
        ref={inputRef}
      />
      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
        onClick={() => {
          if (inputRef.current != null) {
            inputRef.current.focus();
          }
        }}
      >
        Focus Input
      </button>
    </div>
  );
}
