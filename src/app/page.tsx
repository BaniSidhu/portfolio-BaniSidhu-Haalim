import Image from "next/image";
import "./style.scss"
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import Parallax from "./components/Parallax/Parallax";
import Parallax1 from "./components/Parallax1/Parallax1";
import Portfolio from "./components/Portfolio/Portfolio"
import Services from "./components/Services/Services";
import Portfolio2 from "./components/Portfolio2/Portfolio2";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
<>

<section id="Homepage"><Hero/> <Navbar/> </section>
<section id="Services"><Parallax1/></section>
<section><Services/></section>
<section id="Portfolio" typeof="Portfolio2"><Portfolio /></section>
<Portfolio2/>


<section id="Contact">

  <Contact/>
</section>




</>    
  );
}
