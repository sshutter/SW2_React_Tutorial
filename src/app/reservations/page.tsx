"use client";
import { useSearchParams } from "next/navigation";
import LocationDateReserve from "@/components/LocationDateReserve";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { ReservationItem } from "../../../interfaces";
import { addReservation } from "@/redux/features/cartSlice";

export default function Reservations() {
  const urlParams = useSearchParams();
  const cid = urlParams.get("id");
  const model = urlParams.get("model");

  const [pickUpDate, setPickUpDate] = useState<Dayjs | null>(null);
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [pickUpLocation, setPickUpLocation] = useState("bangkok");
  const [returnLocation, setReturnLocation] = useState("bangkok");

  const dispatch = useDispatch<AppDispatch>();

  const makeReservation = () => {
    if (cid && model && pickUpDate && returnDate) {
      const reservation: ReservationItem = {
        carId: cid,
        carModel: model,
        numberOfDays: returnDate.diff(pickUpDate, "day"),
        pickupDate: dayjs(pickUpDate).format("YYYY/MM/DD"),
        pickupLocation: pickUpLocation,
        returnDate: dayjs(returnDate).format("YYYY/MM/DD"),
        returnLocation: returnLocation,
      };
      dispatch(addReservation(reservation));
    }
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 text-black">
      <div className="text-xl font-medium">New Reservations</div>
      <div className="text-md text-left text-gray-600">
        You have selected: {model}
      </div>
      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600">
          Pick-Up Date and Location
        </div>
        <LocationDateReserve
          onDateChange={(value: Dayjs) => setPickUpDate(value)}
          onLocationChange={(value: string) => setPickUpLocation(value)}
        />
        <div className="text-md text-left text-gray-600">
          Return Date and Location
        </div>
        <LocationDateReserve
          onDateChange={(value: Dayjs) => setReturnDate(value)}
          onLocationChange={(value: string) => setReturnLocation(value)}
        />
      </div>
      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
        onClick={makeReservation}
      >
        Reserve this car
      </button>
    </main>
  );
}
