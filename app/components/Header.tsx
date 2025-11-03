"use client";

import Link from "next/link";
import { LogIn } from "lucide-react"; // ← Importamos el icono desde lucide-react

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
            NB
          </div>
          <span className="font-semibold">BlackBeltSystem</span>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
          <a
            href="#dashboard"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Dashboard
          </a>
          <a
            href="#students"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Alumnos
          </a>
          <a
            href="#payments"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Cobros
          </a>
        </nav>

        {/* LOGIN BUTTON */}
        <Link
          href="/login"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-all"
        >
          <LogIn size={20} strokeWidth={2.5} /> {/* Icono de Lucide */}
          <span>Login</span>
        </Link>
      </div>
    </header>
  );
}
