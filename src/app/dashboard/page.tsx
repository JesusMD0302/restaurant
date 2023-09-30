"use client";

import { useState } from "react";

export default function Dashboard() {
  const [date, setDate] = useState(Date.now());

  return (
    <div className="">
      <div>
        <h1>Dashboard</h1>
        <p>{date}</p>
      </div>
    </div>
  );
}
