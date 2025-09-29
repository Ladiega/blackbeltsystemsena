"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Enero", pagos: 12 },
  { name: "Febrero", pagos: 18 },
  { name: "Marzo", pagos: 22 },
  { name: "Abril", pagos: 15 },
  { name: "Mayo", pagos: 28 },
  { name: "Junio", pagos: 20 },
];

export default function PaymentCharts() {
  return (
    <div className="mt-10 w-full h-72 bg-gray-900 p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-white mb-4">Pagos por Mes</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              borderRadius: "8px",
              border: "none",
            }}
            labelStyle={{ color: "#fff" }}
          />
          <Bar dataKey="pagos" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
