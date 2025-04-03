import React from 'react'
import Image from 'next/image'
import Link from "next/link";

function page() {
  return (
    <main>
      <section className='w-full h-[52vh] flex flex-col justify-center items-center'
       >
<div className='absolute top-0 left-0 w-full h-[69vh] object-cover -z-10 ' style={{background:" linear-gradient(180deg, #DFC1A3 0%, #FEEFDF 100%)"}}></div>
<div className='flex flex-col justify-center items-center md:w-[70%] lg:w-[70%] w-full gap-5'>
<h2 className="text-amber-700 font-medium">ABOUT US
</h2>
    <h1 className="text-3xl md:text-4xl lg:text-6xl text-center text-black">
    Transforming beauty, enhancing confidence

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
      <section className='w-full flex lg:flex-row flex-col md:gap-10 gap-30 p-10 pt-20 md:20'>
  <div className="lg:w-[50%] w-full relative flex justify-center items-center h-full">
  <Image
    src="/images/y5h35yh.png"
    alt="Background"
    width={450} // Adjusted size for the first image
    height={450}
   // Slightly enlarges the background image
  />
  <div className="absolute inset-0 flex justify-center items-center">
    <Image
      src="/images/3y5h5yhy5f.png"
      alt="Foreground"
      width={350} // Adjusted size for the second image
      height={350}
    />
  </div>
</div>
    <div className="lg:w-[50%] w-full flex flex-col justify-center gap-6">
      <div className=" flex flex-col gap-2">
      <h2 className="text-amber-700 lg:text-left text-center">OUR STORY
      </h2>
      <h1 className="text-2xl md:text-6xl lg:text-left text-center text-black">
      Where science and beauty collide

      </h1>
      </div>
   
      <p className="text-xl text-black lg:text-left text-center">
      We are a leading cosmetology and dermatology clinic dedicated to transforming beauty and enhancing confidence. Our team of highly skilled professionals combines artistry, advanced techniques, and cutting-edge technology to deliver exceptional results tailored to your unique needs.

      </p>
      <div className='w-full h-auto'>
<div className='w-[30%]'>
  <h1></h1>
  <p></p>

</div>
      </div>

  </div>
      </section>
      <section className='w-full h-[40vh]'>
        <div className=''>

        </div>
      </section>
      <section
  className="p-5 sm:p-5 md:p-20 lg:p-40 w-full bg-white flex flex-col gap-10"
  style={{
    backgroundImage: "url(/images/bg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="w-full flex flex-col justify-center items-center gap-5">
    <h2 className="text-amber-700">OUR MISSION</h2>
    <h1 className="md:text-2xl lg:text-5xl text-center text-black">
    To be a force for positive change in the beauty industry, advocating for inclusivity, diversity, and self-acceptance, while providing services that celebrate individual beauty in all its forms.

    </h1>
  </div>
  <hr className="text-black" />
  <div className="w-full flex lg:flex-row flex-col md:gap-10 gap-30">
  <div className="lg:w-[50%] w-full relative flex justify-center items-center h-full">
  <Image
    src="/images/y5h35yh.png"
    alt="Background"
    width={450} // Adjusted size for the first image
    height={450}
   // Slightly enlarges the background image
  />
  <div className="absolute inset-0 flex justify-center items-center">
    <Image
      src="/images/3y5h5yhy5f.png"
      alt="Foreground"
      width={350} // Adjusted size for the second image
      height={350}
    />
  </div>
</div>
    <div className="lg:w-[50%] w-full flex flex-col justify-center gap-6">
      <div className=" flex flex-col gap-2">
      <h2 className="text-amber-700 lg:text-left text-center">ABOUT US</h2>
      <h1 className="text-2xl md:text-6xl lg:text-left text-center text-black">
        Where science and beauty collide
      </h1>
      </div>
   
      <p className="text-xl text-black lg:text-left text-center">
        Step into our world and experience the power of transformation. Unleash
        your confidence and embrace your ageless beauty with us.
      </p>
      <div className="flex gap-5">
        <Image src="/images/aroma.png" alt="bg" width={32} height={32} />
        <div>
          <h1 className="text-xl md:text-2xl lg:text-left text-center text-black">
            Advanced laser systems
          </h1>
          <p className="text-l text-black lg:text-left text-center">
            Discover the benefits of our modern cosmetology and dermatology
            equipment, carefully selected to provide you with the best
            experience.
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <Image src="/images/aroma.png" alt="bg" width={32} height={32} />
        <div>
          <h1 className="text-xl md:text-2xl lg:text-left text-center text-black">
            Advanced laser systems
          </h1>
          <p className="text-l text-black lg:text-left text-center">
            Discover the benefits of our modern cosmetology and dermatology
            equipment, carefully selected to provide you with the best
            experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className='w-full h-[50vh]'
 style={{
  backgroundImage: "url(/images/yh5h5yhb-min.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
}}>

</section>
<section className='w-full h-[80vh] flex flex-col justify-center items-center'
 style={{
  backgroundImage: "url(/images/t4g4t42tg.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
}}      >
<div className='flex flex-col justify-center items-center md:w-[70%] lg:w-[70%] w-full gap-5'>

    <h1 className="text-4xl md:text-6xl lg:text-8xl text-center text-black">
    Trust your skin to the experts

    </h1>
    <p className='text-center text-xl'>Step into our world and experience the power of transformation. Unleash your confidence and embrace your ageless beauty with us.
    </p>
    <Link href="/" className="px-10 py-4 bg-amber-600 text-white font-semibold">
              BOOK A VISIT
            </Link>
</div>


      </section>
    </main>
  )
}

export default page
