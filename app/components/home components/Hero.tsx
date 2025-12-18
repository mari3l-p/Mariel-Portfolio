import { Download } from 'lucide-react'
import Image from 'next/image'
import Typewriter from './Typewriter'


const Hero = () => {

  return (
    <div className="mt-10 md:mt-15 flex flex-col items-center md:flex-row justify-between [grid-area:hero]">
        <div>
            <h1 className='text-4xl lg:text-7xl font-bold'>Mariel Palacio</h1>
            <Typewriter/>
            <a href="/cv-mariel.pdf" download="/cv-mariel.pdf" 
                className='rounded-xl gradient inline-flex items-center gap-2 py-2 px-4 shadow-lg shadow-pink-500/20
                  transition-all duration-300 ease-in-out 
                  hover:scale-105 
                  hover:shadow-2xl hover:shadow-cyan-500/30'>
                Descargar CV <Download/>
            </a>
        </div>
        <div>
            <Image 
                className='rounded-[50%] mx-auto mt-15 md:m-0' 
                src="/myPic.png" width={250} height={250} alt='A picture of me with a dark background' loading="eager"/>
        </div>
    </div>
  )
}

export default Hero