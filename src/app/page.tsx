import Image from "next/image";
import "./style.scss"
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";
// import linkOp from "./components/links/linkOp";
export default function Home() {
  return (
<>

<section id="Homepage"><Hero/> <Navbar/> 
</section>
<section id="Services"><Parallax type="Services"/></section>
<section>Service</section>
<section>Parallax</section>
<section id="Portfolio"><Parallax type="Portfolio"/></section>
<section>Portfolio2</section>
<section>Portfolio3</section>
<section id="Contact">Contact</section>




</>    
  );
}
