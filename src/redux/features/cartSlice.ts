import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";

type CarState = {
  carItems: ReservationItem[];
};

const initialState: CarState = { carItems: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<ReservationItem>) => {
      state.carItems.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<ReservationItem>) => {
      const remainItems = (state.carItems = state.carItems.filter((item) => {
        return (
          item.carModel !== action.payload.carModel ||
          item.pickupDate !== action.payload.pickupDate ||
          item.returnDate !== action.payload.returnDate
        );
        state.carItems = remainItems;
      }));
    },
  },
});

export const { addReservation, removeReservation } = cartSlice.actions;
export default cartSlice.reducer;
