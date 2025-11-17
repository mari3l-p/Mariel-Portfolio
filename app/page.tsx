import About from "./components/home components/About"
import Hero from "./components/home components/Hero"


export default function Home() {
  return (
    <>
      <div id="container" 
          className="my-11 md:m-11 rounded-lg flex-1 h-full overflow-y-auto
          grid grid-cols-1 md:grid-cols-[4fr_1.5fr] [grid-template-areas:var(--grid-mobile)] md:[grid-template-areas:var(--grid-dashboard)]">
          
          <Hero/>
          <About/>
          <div className="h-50 bg-red-500 [grid-area:projects] rounded-lg" ></div>
          <div className="h-150 bg-orange-500 [grid-area:stack] rounded-lg" ></div>
          <div className=" h-50 bg-cyan-500 [grid-area:certification] rounded-lg" ></div>
          <div className=" h-50 bg-gray-500 [grid-area:logos] rounded-lg" ></div>
        </div>
      
    </>
  );
}
