
export default function Card({ label, value }) {
    return (
      <div className="weather-card">
        <p><b>{label}</b></p>
        <p>{value}</p>
      </div>
    )
}