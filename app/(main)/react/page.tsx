import HeaderTitle from '@/app/components/HeaderTitle'
import ProyectosContainer from '@/app/components/ProyectosContainer'
import { BsFileEarmarkCode } from 'react-icons/bs'

const react = () => {

  const reactProyects = [
    {link: "https://mari3l-p.github.io/Rock-Paper-Scissors/", img: "/reactImg/rock.jpg", title: "Rock Paper Scissors", text: "Beat the bot in this classic game."},
    {link: "https://mari3l-p.github.io/User-Form/", img: "/reactImg/2.jpg", title: "User Form", text: "Easy template of User Form on React."},
    {link: "https://mari3l-p.github.io/Stop-Watch/", img: "/reactImg/3.jpg", title: "Stop Watch", text: "Learning hooks on React with this stop watch."},
    {link: "https://mari3l-p.github.io/Tic-Tac-Toe/", img: "/reactImg/4.jpg", title: "Tic Tac Toe Game", text: "Play with a friend this classic game."},
    {link: "https://mari3l-p.github.io/Grid-on-React-Sample/", img: "/reactImg/5.jpg", title: "Grid on React", text: "Simple Grid on React that shows the basics of a grid."},
  ]

  return (
    <div>
      <HeaderTitle 
        text1="Esta pagina contiene algunos de mis proyectos con los que aprendí "
        bold="React."
        text2="Cada proyecto fue creado con HTML, Tailwind CSS y TypeScript."
        title="Proyectos de React"
        link="https://react.dev"/>

      <div className='mb-10 text-xl font-medium flex flex-row items-center gap-2'><BsFileEarmarkCode/> Lista de Proyectos</div>
      
      <div className='flex flex-wrap gap-10'>
        {reactProyects.map(project => {
          return (
            <a key={project.title} href={project.link} target='_blank' className='w-full md:w-auto'>
              <ProyectosContainer src={project.img} title={project.title} text={project.text}/>
            </a>)
        })}
      </div>
    </div>
  )
}

export default react