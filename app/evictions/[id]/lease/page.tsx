"use client";

import { useParams, useRouter } from "next/navigation";

export default function LeasePage() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4">
        Lease & Grounds for Eviction
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/evictions/${id}/notices`);
        }}
        className="space-y-4"
      >
        <select className="w-full border p-2 rounded" required>
          <option value="">Select Reason</option>
          <option>Nonpayment of Rent</option>
          <option>Lease Violation</option>
          <option>Holdover</option>
        </select>

        <input
          type="date"
          required
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Continue
        </button>
      </form>
    </main>
  );
}
