import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const moments = [
  { title: "Acoustic sessions", text: "The intimate, guitar-led side of the music.", color: "#514538", symbol: "♫" },
  { title: "Live performances", text: "Songs shared with a room full of listeners.", color: "#37464b", symbol: "✳" },
  { title: "Songwriting", text: "Stories, feelings, and melodies in progress.", color: "#4a5140", symbol: "✎" },
  { title: "Fan favourites", text: "Tracks listeners keep coming back to.", color: "#614847", symbol: "♡" }
];

export default function GalleryPage() {
  return (
    <main className="site" id="top">
      <Navbar />
      <section className="page-shell">
        <p className="eyebrow">MOMENTS IN MUSIC</p>
        <h1 className="page-title">A little visual<br /><em>moodboard.</em></h1>
        <p className="page-intro">A stylised gallery layout for the music journal. These are original graphic placeholders, not photographs of Anuv Jain. Add properly licensed or official press images before publishing.</p>
        <div className="song-grid">
          {moments.map((moment, i) => (
            <article className="song-card" key={moment.title}>
              <div className="cover" style={{ background: `radial-gradient(circle at 50% 38%, ${moment.color}, #211f1b 105%)` }}>
                <span className="cover-index">0{i + 1}</span>
                <span className="cover-symbol">{moment.symbol}</span>
                <span className="cover-title">{moment.title}</span>
              </div>
              <div className="song-meta"><div><h3>{moment.title}</h3><p>{moment.text}</p></div></div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 45 }}><Link href="/music" className="primary-button">Explore the songs ↗</Link></div>
      </section>
      <Footer />
    </main>
  );
}
