"use client";

import { useRouter } from "next/navigation";

export default function NewEvictionPage() {
  const router = useRouter();

  const startEviction = () => {
    // TEMP: static ID until backend exists
    const evictionId = "demo-eviction-123";
    router.push(`/evictions/${evictionId}/tenant`);
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4">
        Start an Eviction Filing
      </h1>

      <button
        onClick={startEviction}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Begin
      </button>
    </main>
  );
}
