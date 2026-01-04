import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Eviction Dashboard</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <p className="mb-4 text-gray-700">
          Start a new eviction filing or continue an existing case.
        </p>

        <Link
          href="/evictions/new"
          className="inline-block bg-black text-white px-4 py-2 rounded"
        >
          Start New Eviction
        </Link>
      </div>
    </main>
  );
}
