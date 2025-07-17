import React from 'react'

function Home() {
  return (
    <div className='bg-black flex flex-col gap-4 md:gap-8 justify-center items-center text-white w-screen h-screen p-4'>
      
      <div className='font-extrabold text-cyan-500 font-mono text-4xl md:text-6xl lg:text-9xl'>
        Lorem64
      </div>

      <div className='text-center'>
        <span className='text-2xl md:text-4xl lg:text-5xl font-sans text-blue-400'>
          One Site For 
        </span>
        <div className='flex flex-col md:flex-row gap-2 md:gap-4 mt-2'>
          <a href="/manga" className='text-xl md:text-2xl lg:text-3xl hover:underline'>Manga,</a>
          <a href="/anime" className='text-xl md:text-2xl lg:text-3xl hover:underline'>Anime,</a>
          <a href="/ln" className='text-xl md:text-2xl lg:text-3xl hover:underline'>Light Novels</a>
        </div>
      </div>
    </div>
  )
}

export default Home
