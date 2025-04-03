import React from 'react'

function page() {
  return (
    <main className='w-full m-h-[100vh]'>
       <section className='w-full h-[52vh] flex flex-col justify-center items-center'
       >
<div className='absolute top-0 left-0 w-full h-[69vh] object-cover -z-10 ' style={{background:" linear-gradient(180deg, #DFC1A3 0%, #FEEFDF 100%)"}}></div>
<div className='flex flex-col justify-center items-center md:w-[70%] lg:w-[70%] w-full gap-5'>
<h2 className="text-amber-700 text-2xl">CONTACT US

</h2>
    <h1 className="text-3xl md:text-4xl lg:text-6xl text-center text-black">
    Transformations: before and after – explore our gallery

    </h1>
    <p className='text-center text-xl'>Step into our world and experience the power of transformation. Unleash your confidence and embrace your ageless beauty with us.

    </p>
</div>

      </section>
      <section className='w-full h-[70vh] '
       style={{
        backgroundImage: "url(/images/i4uthg4t-1024x425.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

      </section>
      

    </main>
  )
}

export default page
