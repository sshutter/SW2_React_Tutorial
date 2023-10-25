"use client";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeReservation } from "@/redux/features/cartSlice";

export default function ReservationCart() {
  const carItems = useAppSelector((state) => state.cartSlice.carItems);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      {carItems.map((item) => (
        <div
          className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 text-gray-800"
          key={item.carId}
        >
          <div className="text-xl font-medium">{item.carModel}</div>
          <div className="text-md text-left text-gray-600">
            Pick-Up Date and Location: {item.pickupDate} {item.pickupLocation}
          </div>
          <div className="text-md text-left text-gray-600">
            Return Date and Location: {item.returnDate} {item.returnLocation}
          </div>
          <div className="text-md text-left text-gray-600">
            Duration: {item.numberOfDays}
          </div>
          <button
            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            onClick={() => dispatch(removeReservation(item))}
          >
            Remove from cart
          </button>
        </div>
      ))}
    </>
  );
}
