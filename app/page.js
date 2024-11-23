import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold text-orange-800 mb-4">Recepten Ranking</h1>
      <p className="mb-4">Welkom bij de Recepten Grabbelton Rankings!</p>
      <div className="bg-orange-50 p-4 rounded-lg shadow-sm">
        <p className="font-medium mb-2">Recept van de maand: Arayes</p>
        <Link 
          href="/recept" 
          className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Geef je beoordeling
        </Link>
      </div>
    </main>
  );
}
