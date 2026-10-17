import Link from "next/link";
import type { Song } from "@/lib/songs";

export default function SongCard({ song, index }: { song: Song; index: number }) {
  return (
    <article className="song-card">
      <Link href={`/music/${song.slug}`} aria-label={`View ${song.title}`}>
        <div className="cover cover-with-image" style={{ backgroundColor: song.color, backgroundImage: `url(${song.image})` }}>
          <span className="cover-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="play-button" aria-hidden="true">▶</span>
        </div>
      </Link>
      <div className="song-meta">
        <div>
          <h3><Link href={`/music/${song.slug}`}>{song.title}</Link></h3>
          <p>{song.mood}</p>
        </div>
        <span className="song-arrow">↗</span>
      </div>
    </article>
  );
}
