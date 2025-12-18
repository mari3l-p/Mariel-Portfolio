import Image from 'next/image'

type ProyectosProps = {
  src: string;
  title: string;
  text: string;
}

const ProyectosContainer = ({src, title, text}: ProyectosProps) => {
  return (
    <div className='relative w-full md:w-50 md:h-50 h-[260px] rounded-xl'>
        <div className="relative group w-full md:w-50 md:h-50 h-[260px] rounded-xl">
        {/* Glow border */}
        <div className="
          absolute inset-0 rounded-xl 
          bg-linear-to-r from-(--blue)  to-(--pink)
          opacity-0 group-hover:opacity-100
          blur-md transition-all duration-500
          pointer-events-none
        "></div>

        {/* Card */}
        <div className="
          relative h-full w-full rounded-xl overflow-hidden 
          bg-[#0f0f16] 
          transition-transform duration-500 group-hover:scale-[1.02]
        ">
          <Image src={src} alt="Code project" fill className="object-cover opacity-80" />

          <div className="w-full p-5 md:p-3 absolute bottom-0 rounded-b-xl bg-[#00000080] backdrop-blur-sm">
            <h4 className="text-xl md:text-base font-medium mt-5 md:mt-3">{title}</h4>
            <p className="mt-4 md:mt-2 md:text-xs">{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProyectosContainer