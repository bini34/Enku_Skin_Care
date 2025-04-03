import Link from "next/link";
import Image from 'next/image'
import {StarFilledIcon } from "@radix-ui/react-icons"

export default function Home() {
  return (
    <main className="w-full mn-h-[100vh]">
      <section className="h-[100vh] w-full flex justify-center items-center text-white">
        <video
        
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-[120vh] object-cover -z-10"
        >
          <source src="videos/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="md:w-[70%] w-[90%] flex flex-col items-center align-middle gap-10 mb-28">
          <h1 className=" text-7xl md:text-9xl text-center">
            Experience the art of skincare
          </h1>
          <p className="md:text-3xl text-xl">
            Find the right skincare services with our specialists.
          </p>
          <div className="flex md:flex-row flex-col gap-5 justify-center">
            <Link href="/" className="px-10 py-4 bg-amber-600 text[#2f2b2a]">
              BOOK NOW
            </Link>
            <Link
              href="/"
              className="px-10 py-4 border-amber-600 border-2 border-solid hover:bg-amber-500"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      <section className="p-10 w-full bg-[#c96c4e]">
        <p className="text-white text-center">hello</p>
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
      To be a force for positive change in the beauty industry, advocating for
      inclusivity, diversity, and self-acceptance, while providing services that
      celebrate individual beauty in all its forms.
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

<section
  className="h-[70vh] w-full flex flex-col justify-center items-center bg-black bg-opacity-100 gap-5 py-10"
  style={{
    backgroundImage: "url(/images/yh5h5yhb-min.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
<h1 className="text-white text-5xl md:text-8xl text-center">
Your skin, your confidence.

          </h1>
          <p className="md:text-3xl text-xl text-white">
            Find the right skincare services with our specialists.
          </p>
            <Link href="/" className="px-10 py-4 bg-amber-600 text-white">
              BOOK NOW
            </Link>
      </section>
      <section
  className="p-5 sm:p-5 md:p-20 lg:p-40 w-full bg-white flex flex-col gap-10 m-h-[100vh]"
  style={{
    backgroundImage: "url(/images/bg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
<div className="w-full flex flex-col justify-center items-center gap-5">
    <h2 className="text-amber-700">OUR SERVICES    </h2>
    <h1 className="md:text-2xl lg:text-5xl text-center text-black">
    With our cutting-edge techniques and advanced cosmetic procedures, we strive to bring out your unique beauty and help you shine.

    </h1>
  </div>
  <div className="w-full flex md:flex-row flex-col gap-10  justify-center">
    <div className="lg:w-[400px] md:w-[200px] w-full  flex flex-col gap-5">
      <div className="w-[51px] h-[51px]">
      <Image
      src="/images/u6j5h5.png"
      alt="Foreground"
      width={51} // Adjusted size for the second image
      height={51}
    />
      </div>
  
      <div >
        <h2 className="lg:text-4xl md:text-3xl text-2xl text-black ">
        Dermatology

        </h2>
        <p className="text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur </p>
      </div>
      <Link href="/" className=" text-amber-600 text-lg font-semibold tracking-wider">
              
DISCOVER
            </Link>
 
 
    </div>
    <div className="lg:w-[400px] md:w-[200px] w-full mt-20 flex flex-col gap-5">
    <Image
      src="/images/u6j5h5.png"
      alt="Foreground"
      width={51} // Adjusted size for the second image
      height={51}
    />
      <div >
        <h2 className="text-4xl text-black ">
        Dermatology

        </h2>
        <p className="text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur </p>
      </div>
      <Link href="/" className=" text-amber-600 text-lg font-semibold tracking-wider">
              
DISCOVER
            </Link>
 
 
    </div>
    <div className="lg:w-[400px] md:w-[200px] w-full  flex flex-col gap-5">
    <Image
      src="/images/u6j5h5.png"
      alt="Foreground"
      width={51} // Adjusted size for the second image
      height={51}
    />
      <div >
        <h2 className="text-4xl text-black ">
        Dermatology

        </h2>
        <p className="text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur </p>
      </div>
      <Link href="/" className=" text-amber-600 text-lg font-semibold tracking-wider">
              
DISCOVER
            </Link>
 
 
    </div>
  </div>
      
      </section>
      <section className="w-full m-h-[70vh] bg-[#c96c4e] flex lg:flex-row flex-col gap-2 justify-center items-center sm:p-15 p-5">
        <div className="sm:w-[500px]   w-full flex flex-col justify-center  items-center text-center bg-[#FFFFFFB3] p-10 gap-5">
            <div className="flex  gap-2 text-2xl text-[#c96c4e]">
            <StarFilledIcon className=""/> <StarFilledIcon/> <StarFilledIcon/> <StarFilledIcon/> <StarFilledIcon/>
           </div>
           <p className="text-xl text-[#2f2b2a]">
           The cosmetologists are highly skilled and knowledgeable, providing personalized recommendations and delivering outstanding results. I left feeling rejuvenated and confident.

          </p>
          <h2 className="text-lg text-[#2f2b2a]">By <span className="text-2xl">Sarah Thompson</span></h2>
          <p className="text-[#c96c4e]">– 1 month ago –</p>
        </div>
        <div className="sm:w-[500px] w-full flex flex-col justify-center  items-center text-center bg-[#FFFFFFB3] p-10 gap-5">
            <div className="flex  gap-2 text-2xl text-[#c96c4e]">
            <StarFilledIcon className=""/> <StarFilledIcon/> <StarFilledIcon/> <StarFilledIcon/> <StarFilledIcon/>
           </div>
           <p className="text-xl text-[#2f2b2a]">
           The cosmetologists are highly skilled and knowledgeable, providing personalized recommendations and delivering outstanding results. I left feeling rejuvenated and confident.

          </p>
          <h2 className="text-lg text-[#2f2b2a]">By <span className="text-2xl">Sarah Thompson</span></h2>
          <p className="text-[#c96c4e]">– 1 month ago –</p>
        </div>
        <div className="sm:w-[500px] w-full flex flex-col justify-center  items-center text-center bg-[#FFFFFFB3] p-10 gap-5">
            <div className="flex  gap-2 text-2xl text-[#c96c4e]">
            <StarFilledIcon className=""/> <StarFilledIcon/> <StarFilledIcon/> <StarFilledIcon/> <StarFilledIcon/>
           </div>
           <p className="text-xl text-[#2f2b2a]">
           The cosmetologists are highly skilled and knowledgeable, providing personalized recommendations and delivering outstanding results. I left feeling rejuvenated and confident.

          </p>
          <h2 className="text-lg text-[#2f2b2a]">By <span className="text-2xl">Sarah Thompson</span></h2>
          <p className="text-[#c96c4e]">– 1 month ago –</p>
        </div>

      </section>
      <section className="w-full m-h-[70vh] flex gap-10  lg:flex-row flex-col justify-center items-center lg:p-2 md:p-20 p-5"
       style={{
        background: "linear-gradient(180deg, #DFC1A3 0%, #FEEFDF 100%)",
      }}>
         <div className="lg:w-[50%] w-full flex  justify-center items-center">
         <Image
      src="/images/skjrnhrs.png"
      alt="Foreground"
      width={400} // Adjusted size for the second image
      height={250}
    />
         </div>
         <div className="lg:w-[50%] w-full flex flex-col justify-center items-center lg:items-start  gap-5">
         <h1 className=" text-4xl md:text-6xl lg:text-8xl text-center lg:text-left ">
         Enhance your natural beauty


          </h1>
          <p className=" text-xl lg:text-left text-center">
          Step into our world and experience the power of transformation. Unleash your confidence and embrace your ageless beauty with us.

          </p>
            <Link href="/" className="px-10 py-4 bg-amber-600 text-white">
              BOOK NOW
            </Link>

</div>
      </section>
    </main>
  );
}