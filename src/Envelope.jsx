import { useState } from "react";
import "./styles/Envelope.css"

const CONFIG = {
  line1: "HAPPY",
  line2: "BIRTHDAY",
  age: "19",
  photo: "/photo/niks.jpeg",
  photoAlt: "Birthday photo",
  buttonText: "open me!",
  letterText: "Hello Adewemimo Adenike, I hope this meets you well. I broke my back working on this site...literally. Well, this is just a mini note from me, your sister. Have a great day..and dare I say, a great year.🎊",
  letterColors: ["#6e1423", "#2f4f4f", "#c9a227", "#1f1f1f", "#b4455a"],
  letterBackgrounds: ["#f4efe6", "#e8dfcf", "#ffffff", "#efe3d3"],
  flapMs: 600,       
  letterMs: 700,    
  totalMs: 1800,     
};

function RansomWord({ word, offset = 0 }) {
  return (
    <div className="ransom-word" aria-label={word}>
      {word.split("").map((ch, i) => {
        const n = i + offset;
        return (
          <span
            key={i}
            aria-hidden="true"
            style={{
              color: CONFIG.letterColors[n % CONFIG.letterColors.length],
              background: CONFIG.letterBackgrounds[n % CONFIG.letterBackgrounds.length],
              transform: `rotate(${((n * 7) % 9) - 4}deg) translateY(${((n * 5) % 7) - 3}px)`,
              fontFamily: n % 2 === 0 ? "var(--font-serif)" : "var(--font-sans)", fontWeight: "var(--font-weight)", fontStyle: "var(--font-style)"
            }}
          >
            {ch}
          </span>
        );
      })}
    </div>
  );
}

export default function Envelope({ onFinish }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) return;           
    setOpen(true);               
    setTimeout(() => {
      if (onFinish) onFinish();  
    }, CONFIG.totalMs);
  };

  return (
    <div className={`scene ${open ? "scene-leaving" : ""}`}>
      <div
        className={`envelope ${open ? "open" : ""}`}
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        aria-label={CONFIG.buttonText}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleOpen()}
        style={{
          "--flap-ms": `${CONFIG.flapMs}ms`,
          "--letter-ms": `${CONFIG.letterMs}ms`,
        }}
      >
        <div className="envelope-back" />
        <div className="letter">
          <p>{CONFIG.letterText}</p>
        </div>
        <div className="envelope-pocket" />
        <div className="envelope-flap" />
        <div className="front">
          <RansomWord word={CONFIG.line1} />
          <div className="middle">
            {CONFIG.age && <span className="age">{CONFIG.age}</span>}
            {CONFIG.photo && (
              <img
                className="photo"
                src={CONFIG.photo}
                alt={CONFIG.photoAlt}
                onError={(e) => (e.currentTarget.style.display = "none")} 
              />
            )}
          </div>
          <RansomWord word={CONFIG.line2} offset={3} />
        </div>
      </div>

      <button className="open-btn" onClick={handleOpen} disabled={open}>
        {CONFIG.buttonText}
      </button>
    </div>
  );
}