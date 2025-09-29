"use client";

import { useEffect, useState } from "react";

type ClientDateProps = {
  date: string; // ISO string o formato YYYY-MM-DD
};

export default function ClientDate({ date }: ClientDateProps) {
  const [formatted, setFormatted] = useState(date);

  useEffect(() => {
    const d = new Date(date);
    setFormatted(
      d.toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, [date]);

  return <time dateTime={date}>{formatted}</time>;
}
