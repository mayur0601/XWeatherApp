
export default function Card({ label, value }) {
    return (
      <div className="card">
        <p><b>{label}</b></p>
        <p>{value}</p>
      </div>
    )
}