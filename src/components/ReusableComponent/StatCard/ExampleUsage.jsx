"use client";

import React from "react";
import StatCard from "./StatCard";
import { statCards } from "@/data/statCards";

export default function ExampleUsage() {
  return (
    <div className="space-y-4 p-4">
      {statCards.map((s) => (
        <StatCard
          key={s.id}
          icon={s.icon}
          number={s.number}
          title={s.title}
          options={s.options}
          className="max-w-md"
          onChange={(id) => console.log(s.id, "selected", id)}
        />
      ))}
    </div>
  );
}
