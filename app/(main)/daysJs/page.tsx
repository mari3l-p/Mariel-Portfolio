import HeaderTitle from '@/app/components/HeaderTitle'
import ProyectosContainer from '@/app/components/ProyectosContainer'
import { BsFileEarmarkCode } from 'react-icons/bs'

const DaysJs = () => {

  const daysProyects = [
    {link: "my 30 days of JS/01-drum/index.html", img: "/my 30 days of JS/img/1.jpg", title: "JS Drum", text: "A Cat drummer, press the keys."},
    {link: "my 30 days of JS/02-clock/index.html", img: "/my 30 days of JS/img/2.jpg", title: "Clock", text: "Vintage clock for display."},
    {link: "my 30 days of JS/03-cssVar/index.html", img: "/my 30 days of JS/img/3.jpg", title: "Css Variables", text: "App to learn about CSS variables."},
    {link: "my 30 days of JS/04-arrayCardio1/index.html", img: "/my 30 days of JS/img/4.jpg", title: "Arrays on JS (1)", text: "Practice the ussage of arrays in JS (part 1)."},
    {link: "my 30 days of JS/05- JS-Flex/index.html", img: "/my 30 days of JS/img/5.jpg", title: "JS Flexbox", text: "Beautiful pictures displayed with Flex CSS and JS."},
    {link: "my 30 days of JS/06 - Type Ahead/index.html", img: "/my 30 days of JS/img/6.jpg", title: "Search USA cities", text: "Type the name of a USA city."},
    {link: "my 30 days of JS/07 - Array Cardio Day 2/index.html", img: "/my 30 days of JS/img/7.jpg", title: "Arrays on JS (2)", text: "Practice the ussage of arrays in JS (part 2)."},
    {link: "my 30 days of JS/08 - Fun with HTML5 Canvas/index.html", img: "/my 30 days of JS/img/8.jpg", title: "HTML Canvas", text: "Draw in the white canvas with the mouse."},
    {link: "my 30 days of JS/09 - Dev Tools Domination/index.html", img: "/my 30 days of JS/img/9.jpg", title: "Dev Tools", text: "Open the Dev Tools."},
    {link: "my 30 days of JS/10 - Hold Shift and Check Checkboxes/index.html", img: "/my 30 days of JS/img/10.jpg", title: "Checkboxes", text: "Hold shift and check all the checkboxes."},
    {link: "my 30 days of JS/11 - Custom Video Player/index.html", img: "/my 30 days of JS/img/11.jpg", title: "Video Player Customizable", text: "Try my video player."},
    {link: "my 30 days of JS/12 - Key Sequence Detection/index.html", img: "/my 30 days of JS/img/12.jpg", title: "Key Sequence Detection", text: "Open the console and see what key you are pressing."},
    {link: "my 30 days of JS/13 - Slide in on Scroll/index.html", img: "/my 30 days of JS/img/13.jpg", title: "Pictures sliding", text: "Scroll down for pictures to appear."},
    {link: "my 30 days of JS/14 - JavaScript References VS Copying/index.html", img: "/my 30 days of JS/img/14.jpg", title: "Reference VS Copying", text: "learning the difference in copying and reference."},
    {link: "my 30 days of JS/15 - LocalStorage/index.html", img: "/my 30 days of JS/img/15.jpg", title: "Storing a Menu", text: "Local Storage of a menu."},
    {link: "my 30 days of JS/16 - Mouse Move Shadow/index.html", img: "/my 30 days of JS/img/16.jpg", title: "Shades of mouse", text: "Mouse Movement of Shadows."},
    {link: "my 30 days of JS/17 - Sort Without Articles/index.html", img: "/my 30 days of JS/img/17.jpg", title: "List sorted", text: "List sorted by articles."},
    {link: "my 30 days of JS/18 - Adding Up Times with Reduce/index.html", img: "/my 30 days of JS/img/18.jpg", title: "Length of videos", text: "On the console see the sum of the length."},
    {link: "my 30 days of JS/21 - Geolocation/index.html", img: "/my 30 days of JS/img/21.jpg", title: "Geolocation", text: "Move the phone to use the geolocation."},
    {link: "my 30 days of JS/22 - Follow Along Link Highlighter/index.html", img: "/my 30 days of JS/img/22.jpg", title: "Follow Along", text: "Highlight the movement."},
    {link: "my 30 days of JS/23 - Speech Synthesis/index.html", img: "/my 30 days of JS/img/23.jpg", title: "Speech Synthesis", text: "Type something for a speech synthesis."},
    {link: "my 30 days of JS/24 - Sticky Nav/index.html", img: "/my 30 days of JS/img/24.jpg", title: "Sticy Nav", text: "Cool and Sticy Nav."},
    {link: "my 30 days of JS/25 - Event Capture, Propagation, Bubbling and Once/index.html", img: "/my 30 days of JS/img/25.jpg", title: "Event Capture", text: "learn about the differences of event capture."},
    {link: "my 30 days of JS/26 - Stripe Follow Along Nav/index.html", img: "/my 30 days of JS/img/26.png", title: "Follow Along Nav", text: "Follow along nav about me."},
    {link: "my 30 days of JS/28 - Video Speed Controller/index.html", img: "/my 30 days of JS/img/28.jpg", title: "Video Speed", text: "Control the video speed with the bar."},
    {link: "my 30 days of JS/29 - Countdown Timer/index.html", img: "/my 30 days of JS/img/29.jpg", title: "Countdown Timer", text: "Countdown Timer for breaks."},
    {link: "my 30 days of JS/30 - Whack A Mole/index.html", img: "/my 30 days of JS/img/30.jpg", title: "Whack A Mole", text: "Play this fun game. Whack A Mole!!!."},


  ]

  return (
    <div>
      <HeaderTitle 
        text1="Esta pagina contiene algunos de mis proyectos del curso "
        bold="30 Days of JavaScript"
        text2="de WesBos. Cada proyecto fue creado con HTML, CSS y vanilla JavaScript."
        title="Proyectos de 30 Days of Js"
        link="https://javascript30.com"/>

      <div className='mb-10 text-xl font-medium flex flex-row items-center gap-2'><BsFileEarmarkCode/> Lista de Proyectos</div>
      
      <div className='flex flex-wrap gap-10'>
        {daysProyects.map(project => {
          return (
            <a key={project.title} href={project.link} target='_blank' className='w-full md:w-auto'>
              <ProyectosContainer src={project.img} title={project.title} text={project.text}/>
            </a>)
        })}
      </div>
    </div>
  )
}

export default DaysJs