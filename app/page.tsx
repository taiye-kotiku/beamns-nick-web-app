export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: 720, margin: '0 auto' }}>
      <h1>Evict My Tenant</h1>

      <p>
        Start your eviction workflow by selecting your state and entering tenant details.
      </p>

      <form style={{ marginTop: '2rem', display: 'grid', gap: '1rem' }}>
        <label>
          State
          <select required>
            <option value="">Select a state</option>
            <option value="AL">Alabama</option>
          </select>
        </label>

        <label>
          Tenant Name
          <input type="text" placeholder="John Doe" required />
        </label>

        <label>
          Property Address
          <input type="text" placeholder="123 Main St" required />
        </label>

        <button type="submit">
          Start Eviction
        </button>
      </form>
    </main>
  );
}
