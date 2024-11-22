export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <div className="max-w-4xl mx-auto">
          <header className="p-4 border-b">
            <h1 className="text-2xl font-bold text-center">Recepten Grabbelton</h1>
          </header>
          <main>
            {children}
          </main>
          <footer className="p-4 border-t mt-8 text-center text-gray-600">
            <p>© 2024 Recepten Grabbelton Rankings</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
