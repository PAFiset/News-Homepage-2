import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <nav className="footer-navbar">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/">New</Link>
        </div>
        <div>
          <Link href="/">Popular</Link>
        </div>
        <div>
          <Link href="/">Trending</Link>
        </div>
        <div>
          <Link href="/">Categories</Link>
        </div>
      </nav>

      <div className="footer-message">
        <h1>Site programmé par Pierre-Alexandre Olivier-Fiset ;)</h1>

        <h1>Images et Design du site faite sur Front-end mentor.</h1>
      </div>
    </footer>
  );
};

export default Footer;
