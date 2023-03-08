import Link from "next/link";

export const Header:React.FC = () => {
  return <header className="navbar bg-base-100">
    <div className="navbar-start px-3">
      <Link href="/">Logo</Link>
    </div>

    <div className="navbar-end">
      <div className="px-3">
        <Link href="/blog">
          Blog
        </Link>
      </div>
      <div className="px-3">Concept</div>
      <div className="px-3">Connexion</div>
    </div>

    </header>;
}