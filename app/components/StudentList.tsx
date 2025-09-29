"use client";

import Link from "next/link";
import { Card, CardContent } from "../components/ui/card";

interface Student {
  id: number;
  name: string;
  belt: string;
  lastPayment: string;
  nextDue: string;
}

interface StudentListProps {
  students: Student[];
}

export default function StudentList({ students }: StudentListProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Lista de Alumnos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <Link key={student.id} href={`/students/${student.id}`}>
            <Card className="bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{student.name}</h3>
                <p className="text-sm">Cinturón: {student.belt}</p>
                <p className="text-sm">Último pago: {student.lastPayment}</p>
                <p className="text-sm">
                  Próximo vencimiento: {student.nextDue}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
