import HeaderTitle from '@/app/components/HeaderTitle'
import ProyectosContainer from '@/app/components/ProyectosContainer'
import { BsFileEarmarkCode } from 'react-icons/bs'

const DaysJs = () => {

  const daysProyects = [
    {link: "my30js/01-drum/index.html", img: "/my30js/img/1.jpg", title: "JS Drum", text: "A Cat drummer, press the keys."},
    {link: "my30js/02-clock/index.html", img: "/my30js/img/2.jpg", title: "Clock", text: "Vintage clock for display."},
    {link: "my30js/03-cssVar/index.html", img: "/my30js/img/3.jpg", title: "Css Variables", text: "App to learn about CSS variables."},
    {link: "my30js/04-arrayCardio1/index.html", img: "/my30js/img/4.jpg", title: "Arrays on JS (1)", text: "Practice the ussage of arrays in JS (part 1)."},
    {link: "my30js/05- JS-Flex/index.html", img: "/my30js/img/5.jpg", title: "JS Flexbox", text: "Beautiful pictures displayed with Flex CSS and JS."},
    {link: "my30js/06 - Type Ahead/index.html", img: "/my30js/img/6.jpg", title: "Search USA cities", text: "Type the name of a USA city."},
    {link: "my30js/07 - Array Cardio Day 2/index.html", img: "/my30js/img/7.jpg", title: "Arrays on JS (2)", text: "Practice the ussage of arrays in JS (part 2)."},
    {link: "my30js/08 - Fun with HTML5 Canvas/index.html", img: "/my30js/img/8.jpg", title: "HTML Canvas", text: "Draw in the white canvas with the mouse."},
    {link: "my30js/09 - Dev Tools Domination/index.html", img: "/my30js/img/9.jpg", title: "Dev Tools", text: "Open the Dev Tools."},
    {link: "my30js/10 - Hold Shift and Check Checkboxes/index.html", img: "/my30js/img/10.jpg", title: "Checkboxes", text: "Hold shift and check all the checkboxes."},
    {link: "my30js/11 - Custom Video Player/index.html", img: "/my30js/img/11.jpg", title: "Video Player Customizable", text: "Try my video player."},
    {link: "my30js/12 - Key Sequence Detection/index.html", img: "/my30js/img/12.jpg", title: "Key Sequence Detection", text: "Open the console and see what key you are pressing."},
    {link: "my30js/13 - Slide in on Scroll/index.html", img: "/my30js/img/13.jpg", title: "Pictures sliding", text: "Scroll down for pictures to appear."},
    {link: "my30js/14 - JavaScript References VS Copying/index.html", img: "/my30js/img/14.jpg", title: "Reference VS Copying", text: "learning the difference in copying and reference."},
    {link: "my30js/15 - LocalStorage/index.html", img: "/my30js/img/15.jpg", title: "Storing a Menu", text: "Local Storage of a menu."},
    {link: "my30js/16 - Mouse Move Shadow/index.html", img: "/my30js/img/16.jpg", title: "Shades of mouse", text: "Mouse Movement of Shadows."},
    {link: "my30js/17 - Sort Without Articles/index.html", img: "/my30js/img/17.jpg", title: "List sorted", text: "List sorted by articles."},
    {link: "my30js/18 - Adding Up Times with Reduce/index.html", img: "/my30js/img/18.jpg", title: "Length of videos", text: "On the console see the sum of the length."},
    {link: "my30js/21 - Geolocation/index.html", img: "/my30js/img/21.jpg", title: "Geolocation", text: "Move the phone to use the geolocation."},
    {link: "my30js/22 - Follow Along Link Highlighter/index.html", img: "/my30js/img/22.jpg", title: "Follow Along", text: "Highlight the movement."},
    {link: "my30js/23 - Speech Synthesis/index.html", img: "/my30js/img/23.jpg", title: "Speech Synthesis", text: "Type something for a speech synthesis."},
    {link: "my30js/24 - Sticky Nav/index.html", img: "/my30js/img/24.jpg", title: "Sticy Nav", text: "Cool and Sticy Nav."},
    {link: "my30js/25 - Event Capture, Propagation, Bubbling and Once/index.html", img: "/my30js/img/25.jpg", title: "Event Capture", text: "learn about the differences of event capture."},
    {link: "my30js/26 - Stripe Follow Along Nav/index.html", img: "/my30js/img/26.png", title: "Follow Along Nav", text: "Follow along nav about me."},
    {link: "my30js/28 - Video Speed Controller/index.html", img: "/my30js/img/28.jpg", title: "Video Speed", text: "Control the video speed with the bar."},
    {link: "my30js/29 - Countdown Timer/index.html", img: "/my30js/img/29.jpg", title: "Countdown Timer", text: "Countdown Timer for breaks."},
    {link: "my30js/30 - Whack A Mole/index.html", img: "/my30js/img/30.jpg", title: "Whack A Mole", text: "Play this fun game. Whack A Mole!!!."},
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