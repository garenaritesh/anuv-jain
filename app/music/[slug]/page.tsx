import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import { songs, getSong } from "@/lib/songs";

export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.slug }));
}

export default async function SongPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const song = getSong(slug);
  if (!song) notFound();

  return (
    <main className="site" id="top">
      <Navbar />
      <section className="page-shell song-page-shell">
        <Link href="/music" className="text-button">← All songs</Link>
        <div className="song-banner" style={{ backgroundColor: song.color }}>
          <img src={song.image} alt={`${song.title} fan-made cover artwork`} />
          <div className="song-banner-shade" />
          <div className="song-banner-copy"><p className="eyebrow">ANUV JAIN · MUSIC JOURNAL</p><h1>{song.title}</h1><span>{song.mood} <i>·</i> {song.year}</span></div>
          <span className="banner-index">TRACK / {String(songs.findIndex((item) => item.slug === song.slug) + 1).padStart(2, "0")}</span>
        </div>

        <div className="song-detail-grid">
          <div className="song-side-note"><p className="eyebrow">THE SONG</p><h2>Listen<br /><em>closely.</em></h2><p>Artwork, audio, and notes in one place. This is an unofficial fan-made music journal.</p><div className="side-note-line" /><span>FEEL · LISTEN · REPEAT</span></div>
          <div className="song-main-column">
            <p className="eyebrow">TRACK NOTES</p>
            <p className="song-description">{song.description}</p>
            <AudioPlayer song={song} />
          </div>
        </div>

        <section className="lyrics-section" aria-labelledby="lyrics-title">
          <div className="lyrics-heading"><div><p className="eyebrow">WORDS & MEANING</p><h2 id="lyrics-title">The <em>lyrics.</em></h2></div><span className="lyrics-language">LYRICS / TEXT</span></div>
          {song.lyrics.trim() ? (
            <div className="lyrics-paper"><p className="lyrics-content">{song.lyrics}</p></div>
          ) : (
            <div className="lyrics-empty"><span className="lyrics-mark">“ ”</span><div><h3>Make space for the words.</h3><p>Lyrics are not prefilled here. Add lyrics you wrote yourself or have permission to publish in <code>lib/songs.ts</code> under this song’s <code>lyrics</code> field. Keep each line separated with <code>\n</code>; the page will preserve the line breaks.</p></div><span className="lyrics-empty-label">LYRICS NOT ADDED</span></div>
          )}
        </section>

        <div className="keep-exploring"><div><p className="eyebrow">KEEP EXPLORING</p><h2>Stay a little <em>longer.</em></h2></div><div className="hero-actions"><Link className="primary-button" href="/music">Explore more songs ↗</Link><Link className="text-button" href="/about">Read the biography →</Link></div></div>
      </section>
      <Footer />
    </main>
  );
}
