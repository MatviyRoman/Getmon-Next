import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Головна</Link></li>
        <li><Link href="/about/">Про нас</Link></li>
        <li><Link href="/blog/">Blog</Link></li>
        <li><Link href="/kontakt/">Kontakt</Link></li>
      </ul>
    </nav>
  );
}