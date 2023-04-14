import Link from "next/link";

const Footer = () => {
  return ( 
    <footer>

      <nav className="footer-navbar" >
          
        <Link href="/" >Home</Link>
        <Link href="/" >New</Link>
        <Link href="/" >Popular</Link>
        <Link href="/" >Trending</Link>
        <Link href="/" >Categories</Link>
          
      </nav> 

      <div className="footer-message">
        <h1>
          Site programmé par Pierre-Alexandre Olivier-Fiset ;) 
        </h1>

        <h1>  
          Images et Design du site faite sur Front-end mentor.
        </h1>
      </div>
    </footer> 
  );
}
 
export default Footer;