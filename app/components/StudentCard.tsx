"use client";
import type { Student } from "../../lib/types";

export default function StudentCard({ student }: { student: Student }) {
  return (
    <article className="p-4 bg-white dark:bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold">{student.name}</h3>
      <p>
        Cinturón: <strong>{student.belt}</strong>
      </p>
      <p>
        Último pago:{" "}
        <time dateTime={student.lastPayment}>{student.lastPayment}</time>
      </p>
      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1 border rounded">Ver</button>
        <button className="px-3 py-1 border rounded">Editar</button>
      </div>
    </article>
  );
}
