import Link from "next/link";
import Image from 'next/image'
export default function Home() {
  return (
    <main className="w-full h-[100vh]">
      <section className="h-[100vh] w-full flex justify-center items-center">
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
          <h1 className="text-white text-7xl md:text-9xl text-center">
            Experience the art of skincare
          </h1>
          <p className="md:text-3xl text-xl">
            Find the right skincare services with our specialists.
          </p>
          <div className="flex md:flex-row flex-col gap-5 justify-center">
            <Link href="/" className="px-10 py-4 bg-amber-600">
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
          backgroundImage: `url(/images/bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <h2 className="text-amber-700">OUR MISSION</h2>
          <h1 className="md:text-2xl lg:text-5xl text-center text-black">
            To be a force for positive change in the beauty industry, advocating
            for inclusivity, diversity, and self-acceptance, while providing
            services that celebrate individual beauty in all its forms.
          </h1>
        </div>
        <hr className="text-black" />
        <div className="w-full flex lg:flex-row flex-col gap-10 l">
          <div className="lg:w-[50%] w-full"></div>
          <div className="lg:w-[50%] w-full flex flex-col justify-center gap-5">
            <h2 className="text-amber-700 lg:text-left text-center">ABOUT US</h2>
            <h1 className="text-2xl md:text-5xl lg:text-left text-center text-black">
              Where science and beauty collide
            </h1>
            <p className="text-xl text-black lg:text-left text-center">
              Step into our world and experience the power of transformation.
              Unleash your confidence and embrace your ageless beauty with us.
            </p>
            <div className="flex gap-5">
<Image
src='/images/aroma.png'
alt="bg"
width={32}
height={32}
/>
<div>
<h1 className="text-xl md:text-2xl lg:text-left text-center text-black">
Advanced laser systems
            </h1>
            <p className="text-l text-black lg:text-left text-center">
            Discover the benefits of our modern cosmetology and dermatology equipment, carefully selected to provide you with the best experience.
            </p>
</div>
            </div>
            <div className="flex gap-5">
<Image
src='/images/aroma.png'
alt="bg"
width={32}
height={32}
/>
<div>
<h1 className="text-xl md:text-2xl lg:text-left text-center text-black">
Advanced laser systems
            </h1>
            <p className="text-l text-black lg:text-left text-center">
            Discover the benefits of our modern cosmetology and dermatology equipment, carefully selected to provide you with the best experience.
            </p>
</div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="h-[100vh] w-full"></section>
      <section className="h-[100vh] w-full"></section>
    </main>
  );
}