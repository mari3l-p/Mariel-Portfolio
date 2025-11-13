import "./globals.css";

export default function Home() {
  return (
    <>
      <div id="container" 
          className="rounded-lg flex-1 h-full overflow-y-auto
          grid grid-cols-1 md:grid-cols-[4fr_1.5fr] [grid-template-areas:var(--grid-mobile)] md:[grid-template-areas:var(--grid-dashboard)]">
          

          <div className="bg-pink-500 [grid-area:hero] rounded-lg"></div>
          <div className="bg-indigo-500 [grid-area:about] rounded-lg" ></div>
          <div className="bg-red-500 [grid-area:projects] rounded-lg" ></div>
          <div className="bg-orange-500 [grid-area:stack] rounded-lg" ></div>
          <div className="bg-cyan-500 [grid-area:certification] rounded-lg" ></div>
          <div className="bg-gray-500 [grid-area:logos] rounded-lg" ></div>
        </div>
      
    </>
  );
}
