import React from 'react'
const textColor = `text-${color}`;
const Hero = () => {
  return ( 
        <section className='bg-black h-screen w-screen text-center overflow-hidden relative'>
        <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Foods</span> Devlivered</h1>
            </div>           
        </div>
    </div>
    <div class="absolute top-0 bottom-0 h-full w-full z-10">
    <video
    class="object-center object-cover h-full w-full"
    autoplay
    muted
    loop
    src="../assets/video/video-bg.mp4"></video>
  </div>
    </section>
  )
}

export default Hero