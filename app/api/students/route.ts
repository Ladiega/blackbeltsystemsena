import { NextResponse } from "next/server";
import { sampleStudents } from "../../../lib/sampleData";

let students = [...sampleStudents]; // demo en memoria

export async function GET() {
  return NextResponse.json(students);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newStudent = {
    id: Date.now(),
    name: body.name,
    belt: body.belt ?? "Blanco",
    lastPayment: new Date().toISOString().slice(0, 10),
    nextDue: "",
  };
  students.push(newStudent);
  return NextResponse.json(newStudent, { status: 201 });
}
