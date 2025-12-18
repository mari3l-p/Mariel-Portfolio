import About from "./components/home components/About"
import Certificaciones from "./components/home components/Certificaciones"
import Hero from "./components/home components/Hero"
import Logos from "./components/home components/Logos"
import Projects from "./components/home components/Projects"
import TechStack from "./components/home components/TechStack"


export default function Home() {
  return (
    <>
      <div id="container" 
          className="my-11 md:m-11 rounded-lg flex-1 h-full overflow-y-auto
          grid grid-cols-1 lg:grid-cols-[4fr_1.5fr] [grid-template-areas:var(--grid-mobile)] lg:[grid-template-areas:var(--grid-dashboard)]">
          
          <Hero/>
          <About/>
          <TechStack/>
          <Projects/>
          <Certificaciones/>
          <Logos/>
        </div>
      
    </>
  );
}
