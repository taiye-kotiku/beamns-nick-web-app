export default function Home() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "4rem 1rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Evict My Tenant – Alabama
      </h1>

      <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
        Generate Alabama‑compliant eviction notices in minutes.
      </p>

      <div style={{
        padding: "2rem",
        background: "white",
        borderRadius: 12,
        boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
      }}>
        <h2>Start an Eviction</h2>
        <ul>
          <li>✔ Non‑payment of rent</li>
          <li>✔ Lease violations</li>
          <li>✔ Notice to Quit</li>
        </ul>

        <button style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1.25rem",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 8,
          fontSize: "1rem"
        }}>
          Begin
        </button>
      </div>
    </main>
  );
}
