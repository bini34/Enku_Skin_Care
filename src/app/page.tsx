import Link from "next/link";
const bg = '/images/bg.png';
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
        className="p-5 sm:p-5 md:p-10 lg:p-40 w-full bg-white flex flex-col gap-10"
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
        <div className="w-full flex md:flex-row flex-col gap-10">
          <div className="w-[50%]"></div>
          <div className="w-[50%] flex flex-col justify-center items-left gap-5">
            <h2 className="text-amber-700">ABOUT US</h2>
            <h1 className="text-2xl md:text-5xl text-left text-black">
              Where science and beauty collide
            </h1>
            <p className="text-xl text-black">
              Step into our world and experience the power of transformation.
              Unleash your confidence and embrace your ageless beauty with us.
            </p>
          </div>
        </div>
      </section>

      <section className="h-[100vh] w-full"></section>
      <section className="h-[100vh] w-full"></section>
    </main>
  );
}