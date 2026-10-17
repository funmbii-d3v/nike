import "./styles/TornNote.css";

export default function TornNote({
  children,
  tilt = 0,     
  tape = true,  
  holes = false,
}) {
  return (
    <div
      className={`note ${tape ? "has-tape" : ""}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className={`paper ${holes ? "with-holes" : ""}`}>
        <p>{children}</p>
      </div>
    </div>
  );
}
