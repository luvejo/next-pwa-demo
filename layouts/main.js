import Link from "next/link";

export default function Main({ children }) {
  return (
    <div className="container">
      <nav className="navigation">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>

      <main>{children}</main>
    </div>
  );
}
