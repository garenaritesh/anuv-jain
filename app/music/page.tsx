 "use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SongCard from "@/components/SongCard";
import { songs } from "@/lib/songs";

export default function MusicPage() {
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => songs.filter((song) =>
    `${song.title} ${song.mood} ${song.year}`.toLowerCase().includes(search.toLowerCase())
  ), [search]);

  return (
    <main className="site" id="top">
      <Navbar />
      <section className="page-shell">
        <p className="eyebrow">THE COLLECTION</p>
        <h1 className="page-title">Every song has<br /><em>a feeling.</em></h1>
        <p className="page-intro">Explore a growing collection of Anuv Jain tracks. Open a song to find its details and an embedded listening option.</p>
        <input className="search-box" type="search" placeholder="Search songs, moods, or year…" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search songs" />
        {filtered.length ? <div className="song-grid">{filtered.map((song, index) => <SongCard key={song.slug} song={song} index={index} />)}</div> : <p className="page-intro">No songs match that search. Try another title.</p>}
        <p className="player-note">Song names and artwork references are used for fan discovery. Music and official artwork belong to their respective rights holders.</p>
      </section>
      <Footer />
    </main>
  );
}
