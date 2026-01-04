export default function DashboardPage() {
  return (
    <div className="card">
      <h2>Eviction Dashboard</h2>

      <form>
        <label>
          Tenant Name
          <input type="text" placeholder="John Doe" />
        </label>

        <label>
          Property Address
          <input type="text" placeholder="123 Main St, Birmingham AL" />
        </label>

        <label>
          Reason for Eviction
          <select>
            <option>Non‑payment of rent</option>
            <option>Lease violation</option>
            <option>Holdover tenant</option>
          </select>
        </label>

        <button type="submit">Generate Notice</button>
      </form>
    </div>
  );
}
