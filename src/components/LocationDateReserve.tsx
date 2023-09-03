"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";

export default function LocationDateReserve() {
  return (
    <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white" />
      </LocalizationProvider>

      <Select
        variant="standard"
        name="location"
        id="location"
        className="h-[2em] w-[200px]    "
      >
        <MenuItem value="bangkok">Bangkok</MenuItem>
        <MenuItem value="chiangmai">Chiang Mai</MenuItem>
        <MenuItem value="phuket">Phuket</MenuItem>
      </Select>
    </div>
  );
}
