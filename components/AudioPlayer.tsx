"use client";

import { useEffect, useRef, useState } from "react";
import type { Song } from "@/lib/songs";

function timeLabel(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

export default function AudioPlayer({ song }: { song: Song }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [speed, setSpeed] = useState(1);
  const [missingFile, setMissingFile] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.playbackRate = speed;
  }, [volume, speed]);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    setMissingFile(false);
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
      setMissingFile(true);
    }
  }

  function seek(value: number) {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(audio.duration)) return;
    audio.currentTime = value;
    setCurrentTime(value);
  }

  function changeSpeed() {
    const speeds = [1, 1.25, 1.5, 0.75];
    setSpeed(speeds[(speeds.indexOf(speed) + 1) % speeds.length]);
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="audio-player" aria-label={`Audio player for ${song.title}`}>
      <audio
        ref={audioRef}
        src={song.audioSrc}
        preload="metadata"
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => {
          setDuration(event.currentTarget.duration);
          setMissingFile(false);
        }}
        onDurationChange={(event) => setDuration(event.currentTarget.duration || 0)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onError={() => { setPlaying(false); setMissingFile(true); }}
      />
      <div className="player-topline"><span className="player-live-dot" /> NOW PLAYING <span className="player-quality">LOCAL AUDIO</span></div>
      <div className="player-track-row">
        <div className="player-mini-cover" style={{ backgroundImage: `url(${song.image})`, backgroundColor: song.color }} />
        <div className="player-track-copy"><strong>{song.title}</strong><span>Anuv Jain · {song.year}</span></div>
        <button className="player-speed" type="button" onClick={changeSpeed} aria-label={`Playback speed ${speed}x`}>{speed}×</button>
      </div>
      <div className="player-timeline">
        <input aria-label="Seek audio" type="range" min={0} max={duration || 100} step="0.1" value={Math.min(currentTime, duration || 100)} onChange={(event) => seek(Number(event.target.value))} style={{ background: `linear-gradient(to right, var(--accent) ${progress}%, #4a4841 ${progress}%)` }} />
        <div className="player-times"><span>{timeLabel(currentTime)}</span><span>{duration ? timeLabel(duration) : "--:--"}</span></div>
      </div>
      <div className="player-controls">
        <button className="player-skip" type="button" aria-label="Back 10 seconds" onClick={() => seek(Math.max(0, currentTime - 10))}>↶<small>10</small></button>
        <button className="player-main-play" type="button" onClick={togglePlayback} aria-label={playing ? "Pause" : "Play"}>{playing ? "Ⅱ" : "▶"}</button>
        <button className="player-skip" type="button" aria-label="Forward 10 seconds" onClick={() => seek(Math.min(duration || currentTime + 10, currentTime + 10))}>↷<small>10</small></button>
        <div className="player-volume"><span aria-hidden="true">{volume === 0 ? "×" : "◖"}</span><input aria-label="Volume" type="range" min="0" max="1" step="0.05" value={volume} onChange={(event) => setVolume(Number(event.target.value))} /></div>
      </div>
      {missingFile && <p className="audio-message">Audio file not found yet. Add <code>{song.slug}.mp3</code> inside <code>public/audio/</code>, then refresh this page.</p>}
      <p className="audio-caption">Your player is ready. Playback starts when you press play.</p>
    </section>
  );
}
