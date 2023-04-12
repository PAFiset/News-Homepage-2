import { useState , useEffect } from 'react';
import Link from 'next/link';

const Header = () => {

  const [isMobileModal,setMobileModal] = useState(false);

  const getWindowDimension = () =>{
    const width = window.innerWidth;
    return width;
  };

  const clickHandler = () => {
    setMobileModal(!isMobileModal);
  };

  useEffect(() => {
    const links = document.querySelectorAll(".links");
    console.log(` render +  ${links}`);
    
    function handleResize() {
      getWindowDimension() < 700 ? "" : setMobileModal(false);
    }

    window.addEventListener('resize', handleResize);

    links.forEach((link) => {
      link.addEventListener("click",function () {
        setMobileModal(false)
      });
    });

    return() => {
      window.removeEventListener("resize",handleResize);
    }

  }, []);


  return ( 
    <header >    
      <nav className="navbar" >
          <Link href="/"><img src="./images/logo.svg" alt="W. logo"/></Link>
          <div className={isMobileModal ? "navcontent" : "navcontent" + " " + "navbarmobileclosed"}>
              <Link href="/" >Home</Link>
              <Link href="/" >New</Link>
              <Link href="/" >Popular</Link>
              <Link href="/" >Trending</Link>
              <Link href="/" >Categories</Link>
          </div>
      </nav> 
      <button className={ isMobileModal ? "navicon_open" + " " + "navicon" : "navicon"} onClick={clickHandler} >
          <span></span>
          <span></span>
          <span></span>
      </button>
    </header>
  );
}
 
export default Header;