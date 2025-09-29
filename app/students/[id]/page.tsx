import { Card, CardContent } from "../../components/ui/card";

// Datos simulados
const students = [
  {
    id: 1,
    name: "Juan Pérez",
    belt: "Blanco",
    payments: ["2025-01-15", "2025-02-15"],
  },
  { id: 2, name: "María Gómez", belt: "Azul", payments: ["2025-01-10"] },
];

export default function StudentDetail({ params }: { params: { id: string } }) {
  const student = students.find((s) => s.id === parseInt(params.id));

  if (!student) {
    return <p className="text-center text-red-500">Alumno no encontrado</p>;
  }

  return (
    <main className="p-6">
      <Card className="max-w-lg mx-auto">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold">{student.name}</h1>
          <p className="text-gray-600 mb-4">Cinturón: {student.belt}</p>

          <h2 className="text-lg font-semibold">Pagos realizados</h2>
          <ul className="list-disc list-inside">
            {student.payments.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
