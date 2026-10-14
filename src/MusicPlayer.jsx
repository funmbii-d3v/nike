import {useEffect, useRef, useState} from 'react'
import "./styles/MusicPlayer.css"

const CONFIG = {
  src: "/audio/or.mp3",
  title: "For you",
  autoStart: true,
  loop: true,
};

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

const MusicPlayer = () => {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);  
  const [duration, setDuration] = useState(0); 

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (err) {
      console.log("Playback was blocked:", err);
    }
  };

  useEffect(() => {
    if (CONFIG.autoStart && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const handleSeek = (e) => {
    const time = Number(e.target.value);
    audioRef.current.currentTime = time;
    setCurrent(time);
  };

  return (
  <div className="player">
      <audio
        ref={audioRef}
        src={CONFIG.src}
        loop={CONFIG.loop}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />

      <div className={`disc ${playing ? "spinning" : ""}`} aria-hidden="true">
        ♥
      </div>

      <div className="info">
        <div className="titles">
          <span className="song-title">{CONFIG.title}</span>
        </div>

        <div className="progress-row">
          <span className="time">{formatTime(current)}</span>
          <input
            className="progress"
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={current}
            onChange={handleSeek}
            aria-label="Seek"
            // Fills the left part of the bar with the accent color
            style={{ "--fill": duration ? `${(current / duration) * 100}%` : "0%" }}
          />
          <span className="time">{formatTime(duration)}</span>
        </div>
      </div>

      <button
        className="play-btn"
        onClick={toggle}
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? "❚❚" : "▶"}
      </button>
    </div>
  )
}

export default MusicPlayer