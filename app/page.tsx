"use client";

import DashboardStats from "./components/DashboardStats";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import { sampleStudents } from "../lib/sampleData";
import { useState } from "react";
import { Student } from "./types";
import PaymentCharts from "./components/PaymentsChart";

export default function Home() {
  const [students, setStudents] = useState<Student[]>(sampleStudents);

  const handleAddStudent = (student: Student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center">
          BLACKBELTSYSTEM - Sistema de Alumnos
        </h1>

        {/* Stats */}
        <DashboardStats />

        {/* Layout responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de alumnos */}
          <div className="lg:col-span-2 bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl text-white font-semibold mb-4 ">
              Alumnos Registrados
            </h2>
            <StudentList students={students} />
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <StudentForm onAddStudent={handleAddStudent} />
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
          <PaymentCharts />
        </div>
      </div>
    </main>
  );
}
