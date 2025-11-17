"use client"

import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Typewriter = () => {

    const [text] = useTypewriter({
        words: ['Frontend Developer', 'Web Designer', 'React Developer', 'Problem Solver'],
        loop: 0,
        typeSpeed: 120,
        deleteSpeed: 80,
    })

  return (
    <h2 className='text-xl lg:text-4xl font-medium my-3'>
        <span>{text}</span>
        <span><Cursor cursorStyle="|"/></span>
    </h2>
  )
}

export default Typewriter