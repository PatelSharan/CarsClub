'use client'
import Link from 'next/link';
import Image from 'next/image';
import heroSectionImage from '../Images/HeroSection.jpg';
import G63 from '../Images/G63.jpg'
import porsche_911 from '../Images/porsche_911.jpg'
import porsche_911_Front from '../Images/porsche_911_Front.jpg'

export default function Home() {

  return (
    <>
      {/* HeroSection */}
      <div className="bg-black sm:h-[80vh] flex h-[40vh]">
        <div className='flex items-center px-5 sm:px-20 flex-col justify-center w-full '>
          <div className='w-full text-left'>
            <h1 className="text-white sm:text-xl md:text-3xl lg:text-5xl font-semibold text-xl">WELCOME TO <span className='text-cyan-400'>CARSCLUB</span></h1>
          </div>
          <div className='text-left w-full'>
            <h1 className="text-gray-300 mt-2 lg:text-lg font-semibold text-xs">DISCOVER THE THRILL OF DRIVING.</h1>
          </div>
          <div className='text-left w-full'>
            <Link href={'/screener'}> <button className='MainBtnWhite w-40 mt-2'>Discover Car</button></Link>
          </div>
        </div>
        <div className="relative right-5 sm:right-20 w-1/2 h-full"
          style={{
            backgroundImage: `url(${heroSectionImage.src})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat"
          }}
        ></div>
      </div>


      {/* What We Offer Section */}
      <div className='min-h-80 my-3 sm:flex border-b p-3'>
        <div className='h-full flex flex-col mr-4 w-full'>
          <h1 className='text-3xl font-semibold my-3'>What We Offers</h1>
          <p className='text-xs mb-5 sm:text-sm'>Welcome to our website, where we provide a seamless experience for car enthusiasts and buyers alike. Our platform offers a sophisticated car screener, allowing users to effortlessly filter through an extensive database of vehicles based on their preferences, including make, model, price range, and more. <br />
            Additionally, our compare page enables users to juxtapose multiple car models side by side, facilitating informed decision-making. For added convenience and personalized experience, we offer a secure login/signup page, where users can create accounts to save their searches, compare lists, and receive tailored recommendations. <br />
            Whether you're a seasoned car aficionado or a first-time buyer, our website is your ultimate destination for all things automotive. Start your journey with us today and discover the perfect vehicle that fits your needs and desires.</p>
        </div >
        <div className='min-h-full w-full overflow-hidden'>
          <Image src={porsche_911_Front} alt='Image' width={100} height={100} layout="responsive" className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"
          ></Image>
        </div>
      </div >

      {/* Most Popular Cars Section */}
      <div className='min-h-96 p-3 mb-10' >
        <div>
          <h1 className='text-3xl font-semibold'>Most Popular Cars</h1>
        </div>

        <div className='grid grid-cols-4 py-4'>
          <div className='m-auto text-sm sm:text-base'>
            <div className='border shadow-lg w-40 sm:w-60 rounded overflow-hidden'>
              <div className='h-[50%]'>
                <Image src={G63} alt='Image' width={100} height={100} layout='responsive' className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
              </div>
              <div className='p-4'>
                <h1><span className='font-semibold'>Car Name : </span><span>G63</span></h1>
                <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                <div className='flex justify-center mt-3'>
                  <button className='MainBtnBlack w-40'>View Car</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}