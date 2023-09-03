"use client";

import { eventNames } from "process";
import React from "react";

export default function InteractiveCard({
  children,
  contentName,
}: {
  children: React.ReactNode;
  contentName: string;
}) {
  function onCarSelected() {
    alert("You selected " + contentName + "!");
  }

  function onCardHover(event: React.SyntheticEvent) {
    if (event.type === "mouseover") {
      event.currentTarget.classList.remove("shadow-lg");
      event.currentTarget.classList.add("shadow-2xl");
    } else {
      event.currentTarget.classList.remove("shadow-2xl");
      event.currentTarget.classList.add("shadow-lg");
    }
  }
  return (
    <div
      className="w-1/5 h-[300px] rounded-lg shadow-lg bg-white"
      onClick={() => onCarSelected()}
      onMouseOver={(event) => onCardHover(event)}
      onMouseOut={(event) => onCardHover(event)}
    >
      {children}
    </div>
  );
}
