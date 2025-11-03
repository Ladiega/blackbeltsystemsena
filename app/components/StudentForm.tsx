// app/components/StudentForm.tsx
"use client";

import { useState } from "react";
import type { Student } from "../../lib/types";

type Props = {
  onAddStudent: (student: Student) => void;
};

export default function StudentForm({ onAddStudent }: Props) {
  const [name, setName] = useState("");
  const [belt, setBelt] = useState<Student["belt"]>("Blanco");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const today = new Date();
    const nextMonth = new Date();
    nextMonth.setMonth(today.getMonth() + 1);

    const newStudent: Student = {
      id: Date.now(),
      name: name.trim(),
      belt,
      // guardamos en formato ISO corto YYYY-MM-DD para consistencia
      lastPayment: today.toISOString().slice(0, 10),
      nextDue: nextMonth.toISOString().slice(0, 10),
      status: "activo",
    };

    onAddStudent(newStudent); // <-- ahora TypeScript sabe que newStudent es Student
    setName("");
    setBelt("Blanco");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-white">
      <h3 className="text-lg font-semibold ">Agregar Alumno</h3>
      <div>
        <label className="block text-sm">Nombre</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-gray-300 text-black"
        />
      </div>
      <div>
        <label className="block text-sm">Cinturón</label>
        <select
          value={belt}
          onChange={(e) => setBelt(e.target.value)}
          className="w-full bg-gray-300 text-black"
        >
          <option>Blanco</option>
          <option>Azul</option>
          <option>Morado</option>
          <option>Café</option>
          <option>Negro</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Guardar
      </button>
    </form>
  );
}
