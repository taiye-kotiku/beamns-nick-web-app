"use client";

import { useParams, useRouter } from "next/navigation";

export default function TenantInfoPage() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4">
        Tenant Information
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/evictions/${id}/lease`);
        }}
        className="space-y-4"
      >
        <input
          required
          placeholder="Tenant Full Name"
          className="w-full border p-2 rounded"
        />

        <input
          required
          placeholder="Rental Address"
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
