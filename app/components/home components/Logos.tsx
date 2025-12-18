import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from 'react-icons/bs';

const Logos = () => {
  return (
    <div className="[grid-area:logos] flex flex-row justify-center gap-5 text-(--gray) text-2xl">
        <a className='hover:text-(--white)' href="https://www.linkedin.com/in/mariel-palacio-7ba10b349/" target="_blank"><BsLinkedin/></a>
        <a className='hover:text-(--white)' href='https://github.com/mari3l-p' target='_blank'><BsGithub/></a>
        <a className='hover:text-(--white)' href='https://x.com/mari3l_p' target='_blank'><BsTwitterX/></a>
        <a className='hover:text-(--white)' href='https://www.youtube.com/@mari3l-p' target='_blank'><BsYoutube/></a>
    </div>
  )
}

export default Logos