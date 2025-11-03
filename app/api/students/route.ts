import { NextResponse } from "next/server";
import { sampleStudents } from "../../../lib/sampleData";
import { Student } from "../../../lib/types";

let students: Student[] = [...sampleStudents]; // Datos en memoria

// ✅ GET: devuelve todos los alumnos
export async function GET() {
  return NextResponse.json(students);
}

// ✅ POST: agrega un nuevo alumno
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newStudent: Student = {
      id: Date.now(),
      name: body.name || "Sin nombre",
      belt: body.belt || "Blanco",
      status: body.status || "activo",
      lastPayment: new Date().toISOString().slice(0, 10),
      nextDue: "",
    };

    students.push(newStudent);

    return NextResponse.json(newStudent, { status: 201 });
  } catch (error) {
    console.error("Error en POST /api/students:", error);
    return NextResponse.json(
      { error: "Error al crear el estudiante" },
      { status: 500 }
    );
  }
}
