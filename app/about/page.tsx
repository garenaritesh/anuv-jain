
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="site" id="top">
      <Navbar />

      <section className="page-shell">
        <p className="eyebrow">THE ARTIST &amp; THE JOURNEY</p>

        <h1 className="page-title">
          The voice behind
          <br />
          <em>the feelings.</em>
        </h1>

        <p className="page-intro">
          Anuv Jain is an Indian singer-songwriter known for intimate,
          acoustic-led songs and emotionally direct writing. His music often
          explores love, longing, distance, and the small moments that stay
          with us.
        </p>

        <div className="about-section">
          <div className="about-mark">A.</div>

          <div>
            <p className="eyebrow">A NOTE ON HIS MUSIC</p>

            <h2>
              Simple words.
              <br />
              <em>Lasting feelings.</em>
            </h2>

            <p className="about-text">
              With a recognisable vocal style and guitar-led arrangements,
              Anuv&apos;s songs have connected with listeners who find comfort
              in thoughtful, personal storytelling. Tracks such as
              “Baarishein,” “Alag Aasmaan,” “Gul,” “Husn,” and
              “Jo Tum Mere Ho” are among the songs fans often return to.
            </p>

            <p className="about-text">
              This fan-made biography keeps the focus on publicly released
              music. For exact dates, credits, and current tour announcements,
              consult the artist&apos;s verified profiles and official music
              platforms.
            </p>

            <Link className="primary-button" href="/music">
              Explore the music ↗
            </Link>
          </div>
        </div>

        <p className="eyebrow">MUSICAL MILESTONES</p>

        <div className="timeline">
          <div className="timeline-item">
            <h3>Early releases</h3>
            <p>
              Acoustic songs such as “Baarishein” helped introduce listeners
              to his intimate songwriting style.
            </p>
          </div>

          <div className="timeline-item">
            <h3>A growing audience</h3>
            <p>
              Tracks including “Alag Aasmaan” and “Gul” became familiar to
              listeners across streaming and video platforms.
            </p>
          </div>

          <div className="timeline-item">
            <h3>Wider recognition</h3>
            <p>
              “Husn” and “Jo Tum Mere Ho” brought another wave of attention
              to his romantic, reflective sound.
            </p>
          </div>
        </div>

        <p className="player-note">
          This is an independent fan project, not an official artist website.
          Details are intentionally concise and should be checked against
          official sources for publication.
        </p>
      </section>

      <Footer />
    </main>
  );
}

