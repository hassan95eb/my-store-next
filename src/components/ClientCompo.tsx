"use client";
import React, { useState } from "react";

export default function ClientCompo({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>ClientCompo</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Click me
      </button>
      <p>Count: {count}</p>
      {children}
    </div>
  );
}
