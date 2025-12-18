import UnderlineHeader from './UnderlineHeader'
import ProyectosContainer from '../ProyectosContainer'
import Link from 'next/link'

const Projects = () => {

  const projectsArr = [
    {link: "/freeCodeCamp", src: "/banners/rpg.jpg", title: "FreeCodeCamp", text: "Web Responsive Design and Js Algorithms", openOn: "_self"},
    {link: "/daysJs", src: "/banners/theLF.jpg", title: "30 Days of Js", text: "Daily JS projects following Wes Bos Online Course", openOn: "_self"},
    {link: "/react", src: "/banners/ttt.jpg", title: "React", text: "Small projects using React JS and Tailiwind CSS", openOn: "_self"},
    {link: "https://analyze-data.vercel.app", src: "/banners/analisis.jpg", title: "Instagram Analizer", text: "A web app to analize the data of your followers", openOn: "_blank"},
  ]


  return (
    <div className="[grid-area:projects]">

      <UnderlineHeader text="Proyectos" width='w-36'/>

      <div className='flex flex-col gap-15 justify-center sm:flex-row  md:gap-5 lg:gap-15 xl:justify-start flex-wrap'>
        {projectsArr.map(project => {
          return <a target={project.openOn} key={project.link} href={project.link}><ProyectosContainer src={project.src} title={project.title} text={project.text} /></a>
        })}
      </div>
    </div>
  )
}

export default Projects