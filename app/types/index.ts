export interface Student {
  id: number;
  name: string;
  belt: string;
  lastPayment: string;
  nextDue: string;
  status: "activo" | "inactivo";
}
