"use client";

export default function DashboardStats() {
  // 🔹 Simulación de datos (luego puedes traerlos de una base de datos)
  const stats = [
    { label: "Alumnos activos", value: 32 },
    { label: "Cobros pendientes", value: 5 },
    { label: "Próximos vencimientos", value: 8 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((item) => (
        <div
          key={item.label}
          className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 text-center"
        >
          <p className="text-2xl font-bold text-blue-500">{item.value}</p>
          <p className="text-gray-700 dark:text-gray-300">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
