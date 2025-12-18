'use client'; // Agrega esto si estás usando Next.js App Router (carpeta app)

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube, BsEnvelope } from 'react-icons/bs';

const Contacto = () => {
  // CORRECCIÓN 1: Agregar <HTMLFormElement>(null) y los paréntesis ()
  // Esto le dice a TypeScript que esta referencia se usará en un formulario HTML.
  const form = useRef<HTMLFormElement>(null);

  // CORRECCIÓN 2: Definir el tipo del evento 'e'
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verificamos que form.current no sea null antes de enviar
    if (!form.current) return;

    emailjs
      .sendForm(
        'service_zvkz1pd', 
        'template_za8mdsv', // Recuerda poner tu ID real aquí
        form.current, 
        {
          publicKey: '1_OTCzgHL-8U7RwGz',
        }
      )
      .then(
        () => {
          alert('¡Gracias por tu mensaje!');
          // En TypeScript, a veces e.target no tiene .reset(), mejor usar la referencia:
          form.current?.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Hubo un error al enviar el mensaje.');
        },
      );
  };

  return (
    <form 
      ref={form} 
      onSubmit={sendEmail} 
      className='flex flex-col gap-15 xl:flex-row justify-center items-center xl:h-screen'
    >
      {/* ... (Tu sección de redes sociales y texto se mantiene igual) ... */}
      <div className='max-w-xl'>
        <h1 className='text-4xl md:text-6xl font-bold my-10 text-center text-(--light-blue)'>Pongamonos en Contacto</h1>
        <p className='text-xl text-center font-medium'>Construamos algo juntos. Proyectos de codigo abierto, colaboraciones, y platicas sobre tech stuff.</p>
        
        <div className="flex flex-row mt-15 mb-10 justify-center gap-5">
            <a href="https://www.linkedin.com/in/mariel-palacio-7ba10b349/" target="_blank"><BsLinkedin className='size-8 text-(--light-blue) hover:text-(--white)'/></a>
            <a href='https://github.com/mari3l-p' target='_blank'><BsGithub className='size-8 text-(--light-blue) hover:text-(--white)'/></a>
            <a href='https://x.com/mari3l_p' target='_blank'><BsTwitterX className='size-8 text-(--light-blue) hover:text-(--white)'/></a>
            <a href='https://www.youtube.com/@mari3l-p' target='_blank'><BsYoutube className='size-8 text-(--light-blue) hover:text-(--white)'/></a>
        </div>

        <div className='text-base md:text-xl text-center font-medium'><BsEnvelope className='mx-2 inline text-3xl text-(--light-blue)'/> mari3lpalacio@gmail.com</div>
      </div>

      <div id="contact-form" className='flex flex-col p-10 items-center border border-(--light-blue) bg-(--dark-blue) rounded-lg'>
        <input 
            name="user_name" 
            id='name' 
            type="text" 
            placeholder='Nombre' 
            autoComplete='off' 
            className='w-[250px] md:w-[350px]'
            required
        />
        <input 
            name="user_email" 
            id='email' 
            type='email' 
            placeholder='Email' 
            autoComplete='off' 
            className='w-[250px] md:w-[350px]'
            required
        />
        <textarea 
            name="message" 
            id="message" 
            placeholder='Mensaje' 
            rows={5} 
            className='w-[250px] md:w-[350px]'
            required
        ></textarea>
        <button className='mt-5 text-lg font-medium hover:bg-(--white) hover:text-(--black) hover:cursor-pointer rounded-lg bg-(--light-blue) min-w-[250px] py-3'>
            Enviar Mensaje
        </button>
      </div>
    </form>
  )
}

export default Contacto;