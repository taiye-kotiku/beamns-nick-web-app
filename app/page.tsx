export default function Home() {
  return (
    <main style={{ padding: "4rem", maxWidth: 900, margin: "0 auto" }}>
      <h1>Evict My Tenant Alabama</h1>

      <p>
        A professional eviction filing platform built for Alabama landlords
        and attorneys.
      </p>

      <ul>
        <li>✔ County‑specific filing logic</li>
        <li>✔ Auto‑generated eviction documents</li>
        <li>✔ Attorney & firm white‑labeling</li>
        <li>✔ Audit logs & compliance tracking</li>
      </ul>

      <div style={{ marginTop: 32 }}>
        <button style={{ marginRight: 12 }}>Create Account</button>
        <button>Attorney Login</button>
      </div>
    </main>
  );
}

