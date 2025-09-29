export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Nagare BJJ — Sistema de gestión ·{" "}
        <a href="/privacy" className="underline">
          Privacidad
        </a>
      </div>
    </footer>
  );
}
