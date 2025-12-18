

import UnderlineHeader from './UnderlineHeader'
import { SiFreecodecamp, SiHackerrank } from 'react-icons/si'
import { FaUniversity } from 'react-icons/fa';


const Certificaciones = () => {

    const certArr = [
        {icon: SiFreecodecamp, name: "FreeCodeCamp", title: "Responsive Web Design", year: "2023", color: "text-[#0A0A23]", link: "https://www.freecodecamp.org/certification/mari3l_p/responsive-web-design"},
        {icon: FaUniversity, name: "Harvard Online", title: "CS50's Scratch Introduction", year: "2023", color: "text-[#A51C30]", link: "https://cs50.harvard.edu/certificates/c06b894d-1428-4154-858e-ac44b28f1013"},
        {icon: SiHackerrank, name: "HackerRank", title: "CSS Skill", year: "2023", color: "text-[#00EA64]", link: "https://www.hackerrank.com/certificates/iframe/75de956b5385"},
        {icon: FaUniversity, name: "Harvard Online", title: "CS50'x Introduction to CS", year: "2024", color: "text-[#A51C30]", link: "https://cs50.harvard.edu/certificates/2ee3bd03-7283-4967-98b3-80f9c84fd899"},
        {icon: SiFreecodecamp, name: "FreeCodeCamp", title: "JavaScript Algorithms and Data Structures", year: "2025", color: "text-[#0A0A23]", link: "https://www.freecodecamp.org/certification/mari3l_p/javascript-algorithms-and-data-structures-v8"},
    ]

    

    return (
        <div className="[grid-area:certification] self-start">

            <div className='flex justify-center'>
                <UnderlineHeader text="Certificaciones" width="w-52"/>
            </div>

            <div className='carousel'>
                <div className='group'>
                    {certArr.map(cert => {

                        const Icon = cert.icon;

                        return (
                            <div key={cert.title} className='h-75 w-75 bg-(--white) text-(--black) card rounded-xl'>
                                <a href={cert.link} target="_blank" className='flex flex-col justify-between h-full p-5'>
                                    <span className='flex flex-row justify-center items-center font-medium text-2xl'>
                                        <Icon className={`size-12 mx-2 ${cert.color}`}/>
                                        {cert.name}
                                    </span>
                                                
                                    <div className='text-2xl mx-11 text-center'>{cert.title}</div>
                                                        
                                    <div className='flex justify-between font-light'>
                                        <span>Developer Certification</span>
                                        <span>{cert.year}</span>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>

                <div aria-hidden className='group'>
                    {certArr.map(cert => {

                        const Icon = cert.icon;

                        return (
                            <div key={cert.title} className='size-75 bg-(--white) text-(--black) card rounded-xl'>
                                <a href={cert.link} target="_blank" className='flex flex-col justify-between h-full p-5'>
                                    <span className='flex flex-row justify-center items-center font-medium text-2xl'>
                                        <Icon className={`size-12 mx-2 ${cert.color}`}/>
                                        {cert.name}
                                    </span>
                                                
                                    <div className='text-2xl mx-11 text-center'>{cert.title}</div>
                                                        
                                    <div className='flex justify-between font-light'>
                                        <span>Developer Certification</span>
                                        <span>{cert.year}</span>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Certificaciones;
