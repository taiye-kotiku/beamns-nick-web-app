export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "2rem"
    }}>
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Evict My Tenant
        </h1>

        <p style={{ fontSize: "1.25rem", opacity: 0.85, maxWidth: 600 }}>
          Automated eviction workflows for Alabama landlords.
          Fast notices. Court‑ready documents. Zero guesswork.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <button style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            background: "#2563eb",
            border: "none",
            borderRadius: "6px",
            color: "white",
            cursor: "pointer"
          }}>
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
