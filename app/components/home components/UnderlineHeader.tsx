import React from 'react'

type aboutProps = {
    text: string;
    width: string;
}

const UnderlineHeader = ({text, width}: aboutProps) => {
  return (
    <div className={`${width} flex flex-col items-center mx-auto xl:mx-0 my-11`}>
        <h3 className='text-2xl text-center'>{text}</h3>
        <div className={`${width} h-1 rounded-full gradient mt-2`}></div>
    </div>
  )
}

export default UnderlineHeader