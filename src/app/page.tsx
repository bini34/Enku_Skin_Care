import Link from "next/link";
export default function Home() {
  return (
    <main className="w-full h-[100vh] ">
<section className="mn-h-[100vh] w-full flex justify-center items-center py-20 ">
<video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full  object-cover -z-10 "
      >
        <source src="videos/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
 <div className="md:w-[70%] w-[90%] flex flex-col items-center align-middle gap-10 mb-28 ">
  <h1 className="text-white  text-7xl md:text-9xl text-center">Experience the art of skincare</h1>
  <p className="md:text-3xl text-xl">Find the right skincare services with our specialists.</p>
  <div className="flex md:flex-row flex-col gap-5 justify-center">
  <Link href="/" className='px-10 py-5 bg-amber-600'>BOOK NOW</Link>
  <Link href="/" className='px-10 py-5 border-amber-600 border-2 border-solid hover:bg-amber-500 '>LEARN MORE</Link>
  </div>

 </div>
</section >
<section className="h-[100vh] w-full bg-amber-300 ">
hello
</section>
<section className="h-[100vh] w-full">

</section>
<section className="h-[100vh] w-full">

</section>
    </main>
  );
}
