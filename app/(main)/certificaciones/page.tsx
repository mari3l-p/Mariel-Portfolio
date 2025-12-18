import HeaderTitle from "@/app/components/HeaderTitle"
import { ArrowUpRight } from "lucide-react"
import { SiFreecodecamp, SiHackerrank } from 'react-icons/si'
import { FaUniversity } from 'react-icons/fa';


const Certificaiones = () => {

  const certArr = [
          {icon: SiFreecodecamp, name: "FreeCodeCamp", title: "Responsive Web Design", year: "2023", color: "text-white", link: "https://www.freecodecamp.org/certification/mari3l_p/responsive-web-design"},
          {icon: FaUniversity, name: "Harvard Online", title: "CS50's Scratch Introduction", year: "2023", color: "text-[#A51C30]", link: "https://cs50.harvard.edu/certificates/c06b894d-1428-4154-858e-ac44b28f1013"},
          {icon: SiHackerrank, name: "HackerRank", title: "CSS Skill", year: "2023", color: "text-[#00EA64]", link: "https://www.hackerrank.com/certificates/iframe/75de956b5385"},
          {icon: FaUniversity, name: "Harvard Online", title: "CS50'x Introduction to CS", year: "2024", color: "text-[#A51C30]", link: "https://cs50.harvard.edu/certificates/2ee3bd03-7283-4967-98b3-80f9c84fd899"},
          {icon: SiFreecodecamp, name: "FreeCodeCamp", title: "JavaScript Algorithms and Data Structures", year: "2025", color: "text-white", link: "https://www.freecodecamp.org/certification/mari3l_p/javascript-algorithms-and-data-structures-v8"},
      ]


  return (
    <div className="h-screen">
        <HeaderTitle 
          text1="Lista de Links con mis certificaciones."
          bold=""
          text2=""
          title="Apartado de Certificaciones"
          link="https://harvardonline.harvard.edu"
        />


      <ul>
        {certArr.map(cert => {
          const Icon = cert.icon;
          return (
            <li key={cert.title} className="my-4"> {/* 1. Deja solo el margen aquí */}
              <a 
                href={cert.link} 
                target="_blank" 
                // 2. Mueve el resto de estilos aquí y agrega 'flex' y 'items-center'
                className="flex items-center border border-(--gray) p-3 rounded-lg hover:bg-(--dark-blue)"
              >
                <Icon className={`inline size-5 mx-2 ${cert.color}`}/> 
                {cert.title} from {cert.name} 
                <ArrowUpRight className="ml-2" /> {/* Agregué un pequeño margen a la flecha */}
              </a>
            </li>
          )
        })} 
      </ul> 
    </div>
  
      )
}

export default Certificaiones