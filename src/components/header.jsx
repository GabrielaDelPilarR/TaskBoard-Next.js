import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='bg-black/400'>
      <p className='logo'>
         <Image src="/tulipan.png" width={30} height={30} alt='tulipan'/> 
        <a className='block text-xl text-center uppercase ' href='https://gabrieladelpilarr.github.io/Portfolio-Gabriela/'>
          Gabriela Rojas
        </a>
      </p>
    </header>
  )
}
