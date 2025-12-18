import HeaderTitle from '@/app/components/HeaderTitle'
import ProyectosContainer from '@/app/components/ProyectosContainer'
import { BsFileEarmarkCode } from 'react-icons/bs'

const freeCodeCamp = () => {

  const fCCproyects = [
    {link: "freeCodeCamp/Iphone Calculator/index.html", img: "/freeCodeCamp/img/calculatorImg.jpg", title: "Iphone Calculator", text: "Iphone like calculator."},
    {link: "freeCodeCamp/palindrome checker/index.html", img: "/freeCodeCamp/img/palindromeImg.jpg", title: "Palindrome Checker", text: "An app that checks if the word is a palindrome."},
    {link: "freeCodeCamp/roman calculator/index.html", img: "/freeCodeCamp/img/romanImg.jpg", title: "Roman Calculator", text: "Converts standard numbers to Roman numerals."},
    {link: "freeCodeCamp/rpg search creature/index.html", img: "/freeCodeCamp/img/creatures.jpg", title: "RPG Search Creature", text: "Search a creature by Id or name."},
    {link: "freeCodeCamp/todo app/index.html", img: "/freeCodeCamp/img/todoPic.jpg", title: "Todo App", text: "A task management tool implementing full CRUD operations."},
  ]

  return (
    <div>
      <HeaderTitle 
        text1="Esta pagina contiene algunos de mis proyectos del curso "
        bold="JavaScript Algorithms and Data Structures"
        text2="de FreeCodeCamp. Cada proyecto fue creado con HTML, CSS y vanilla JavaScript."
        title="Proyectos de FreeCodeCamp"
        link="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-introductory-javascript-by-building-a-pyramid-generator"/>

      <div className='mb-10 text-xl font-medium flex flex-row items-center gap-2'><BsFileEarmarkCode/> Lista de Proyectos</div>
      
      <div className='flex flex-wrap gap-10'>
        {fCCproyects.map(project => {
          return (
            <a key={project.title} href={project.link} target='_blank' className='w-full md:w-auto'>
              <ProyectosContainer src={project.img} title={project.title} text={project.text}/>
            </a>)
        })}
      </div>
    </div>
  )
}

export default freeCodeCamp