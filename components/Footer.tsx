import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <Link href="/" className="logo">anuv<span>.</span></Link>
      <p>Unofficial fan-made music journal · Made with ♡</p>
      <Link href="#top">Back to top ↑</Link>
    </footer>
  );
}
