import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">anuv<span>.</span></Link>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/music">Music</Link>
        <Link href="/about">About</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
      <Link href="/music" className="nav-button">Explore music ↗</Link>
    </nav>
  );
}
