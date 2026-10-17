"use client";

import Link from "next/link";
import { useState } from "react";
import { songs } from "@/lib/songs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SongCard from "@/components/SongCard";

export default function Home() {
  const [activeSong, setActiveSong] = useState<string | null>(null);

  return (
    <main className="site" id="top">
      <Navbar />

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="dot" /> THE WORLD OF ANUV JAIN
          </p>

          <h1>
            Some feelings
            <br />
            sound like <em>music.</em>
          </h1>

          <p className="hero-description">
            A little corner of the internet for the songs that say what our
            hearts sometimes cannot.
          </p>

          <div className="hero-actions">
            <Link className="primary-button" href="/music">
              Explore songs <span>↗</span>
            </Link>

            <Link className="text-button" href="/about">
              Discover his story ↓
            </Link>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            MUSIC · MEMORIES · EMOTIONS
          </div>
        </div>

        <div className="hero-art">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />

          <div className="art-circle">
            <img
              src="/images/anuvjain.jpg"
              alt="Anuv Jain portrait"
              className="art-portrait"
            />

            <div className="art-image-overlay" />

            <span className="art-star">✳</span>
            <span className="art-small">THE SOUND OF</span>
            <span className="art-big">FEELING.</span>
            <span className="art-bottom">
              ANUV JAIN · MUSIC JOURNAL
            </span>
          </div>

          <div className="floating-card">
            <span className="playing-bars">♫</span>
            <div>
              <strong>{activeSong ?? "A song for your soul"}</strong>
              <p>
                {activeSong
                  ? "Selected track · Open to listen"
                  : "Pick a song from the collection"}
              </p>
            </div>
          </div>

          <span className="side-label">LISTEN WITH YOUR HEART</span>
        </div>

        <div className="hero-index">01 — THE MUSIC JOURNAL</div>
      </section>

      <section className="music-section" id="music">
        <div className="section-heading">
          <div>
            <p className="eyebrow">YOUR NEXT REPEAT</p>
            <h2>
              Songs that <em>stay.</em>
            </h2>
          </div>

          <span className="song-count">
            FAN FAVOURITES · {String(songs.length).padStart(2, "0")}
          </span>
        </div>

        <div className="song-grid">
          {songs.map((song, index) => (
            <div
              key={song.slug}
              onMouseEnter={() => setActiveSong(song.title)}
              onFocus={() => setActiveSong(song.title)}
            >
              <SongCard song={song} index={index} />
            </div>
          ))}
        </div>

        <p className="player-note">
          Open any song for its cover banner, custom audio controls, and lyrics
          section.
        </p>

        <Link href="/music" className="text-button">
          View all songs ↗
        </Link>
      </section>

      <section className="about-section" id="about">
        <div className="about-mark">A.</div>

        <div>
          <p className="eyebrow">BEHIND THE MUSIC</p>

          <h2>
            For the feelings
            <br />
            we <em>never explain.</em>
          </h2>

          <p className="about-text">
            Discover Anuv Jain, the Indian singer-songwriter known for
            intimate melodies and heartfelt songwriting. Explore his musical
            journey, popular songs, and stories behind the music.
          </p>

          <Link className="text-button" href="/about">
            Read his story ↗
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}