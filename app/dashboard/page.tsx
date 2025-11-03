"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-2">Bienvenido al Dashboard</h1>
      <p className="text-gray-600 mb-6">Acceso autorizado.</p>
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all"
      >
        <LogOut size={20} strokeWidth={2.5} />
        Cerrar sesión
      </button>
    </div>
  );
}
