import React from 'react';
import ContactForm from '@/components/contact-form';
import Link from 'next/link';
import ShopMap from '@/components/map';

function page() {
  return (
    <main className="w-full m-h-[100vh]">
      <section className="w-full h-[52vh] flex flex-col justify-center items-center">
        <div
          className="absolute top-0 left-0 w-full h-[69vh] object-cover -z-10 "
          style={{ background: ' linear-gradient(180deg, #DFC1A3 0%, #FEEFDF 100%)' }}
        ></div>
        <div className="flex flex-col justify-center items-center md:w-[70%] lg:w-[70%] w-full gap-5">
          <h2 className="text-amber-700 text-2xl">CONTACT US</h2>
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-center text-black">
            Transformations: before and after – explore our gallery
          </h1>
          <p className="text-center text-xl">
            Step into our world and experience the power of transformation. Unleash your confidence
            and embrace your ageless beauty with us.
          </p>
        </div>
      </section>
      <section
        className="w-full h-[70vh] "
        style={{
          backgroundImage: 'url(/images/i4uthg4t-1024x425.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></section>
      <section className="w-full m-h-[100vh] flex  p-30 gap-10">
        <div className="w-[50%] m-h-[100vh] border-2 border-amber-600 p-20 flex flex-col gap-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-left text-black">Reach out to us</h1>
<p className="text-left text-xl">We’re here to answer your cosmetology and dermatology questions</p>
          <ContactForm />
        </div>
        
        <div className="w-[50%] m-h-[100vh]"  style={{
          backgroundImage: 'url(/images/57mun75.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        </div>

      </section>
      <section
        className="h-[70vh] w-full flex flex-col justify-center items-center bg-black bg-opacity-100 gap-5 py-10"
        style={{
          backgroundImage: 'url(/images/yh5h5yhb-min.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-white text-5xl md:text-8xl text-center">Your skin, your confidence.</h1>
        <p className="md:text-3xl text-xl text-white">
          Find the right skincare services with our specialists.
        </p>
        <Link href="/" className="px-10 py-4 bg-amber-600 text-white">
          BOOK NOW
        </Link>
      </section>
      <section className="w-full m-h-[100vh] flex flex-col  items-center p-30 gap-20">
      <div className="w-full flex flex-col   gap-5">
          <h2 className="text-amber-700 text-left">FIND US</h2>
          <h1 className="md:text-2xl lg:text-5xl  text-black">
          Whether you seek to diminish fine lines, plump lips, or rejuvenate your skin, our clinic offers a comprehensive range of services.

          </h1>
        </div>
        <div className="w-full flex md:flex-row flex-col gap-5">
          <div className="w-[50%]  flex flex-col gap-5">
            <h1 className="text-3xl text-black">Contact information</h1>
            <div className="flex flex-col gap-5">
               <div className="flex  gap-5">
               <i aria-hidden="true" className="fas fa-phone-alt text-amber-600"></i>
               <i className="fa fa-phone w-10 h-10 text-amber-600" aria-hidden="true"></i>
               <p className="text-black">+91 9876543210</p>
               </div>
            </div>
          </div>
          <div className="w-[50%] ">
 <ShopMap/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
