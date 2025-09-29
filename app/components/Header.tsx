"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
            NB
          </div>
          <span className="font-semibold">BlackBeltSystem</span>
        </Link>
        <nav className="hidden md:flex gap-4">
          <a href="#dashboard">Dashboard</a>
          <a href="#students">Alumnos</a>
          <a href="#payments">Cobros</a>
        </nav>
      </div>
    </header>
  );
}
