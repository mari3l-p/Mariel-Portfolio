import { Underline } from 'lucide-react'
import React from 'react'
import { SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiFigma, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiGit, SiGithub, SiVercel, SiNpm } from 'react-icons/si'
import UnderlineHeader from './UnderlineHeader'


const TechStack = () => {
  return (
    <div className="px-6 py-11 h-fit text-2xl rounded-xl border border-(--soft-blue) bg-(--dark-blue) [grid-area:stack] techStack md:mt-15">
        <h3 className='font-semibold text-2xl text-center'>Tech Stack</h3>

        <div className='flex flex-col items-center lg:items-start'>
          <span><SiHtml5 className='text-[#E34F26]'/> Html</span>
          <span><SiCss3 className='text-[#663399]'/> CSS</span>
          <span><SiBootstrap className='text-[#7952B3]'/> Bootstrap</span>
          <span><SiTailwindcss className='text-[#06B6D4]'/> Tailwind CSS</span>
          <span><SiFigma className='text-[#F24E1E]'/> Figma</span>
          <span><SiJavascript className='text-[#F7DF1E]'/> JavaScript</span>
          <span><SiTypescript className='text-[#3178C6]'/> TypeScript</span>
          <span><SiReact className='text-[#61DAFB]'/> React</span>
          <span><SiNextdotjs className='text-[#FFFFFF]'/> Next.JS</span>
          <span><SiGit className='text-[#F05032]'/> Git</span>
          <span><SiGithub className='text-[#FFFFFF]'/> GitHub</span>
          <span><SiVercel className='text-[#FFFFFF]'/> Vercel</span>
          <span><SiNpm className='text-[#FFFFFF]'/> Npm</span>
        </div>
    </div>
  )
}

export default TechStack