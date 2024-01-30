import Image from 'next/image';
import heroSectionImage from '../Images/HeroSection.jpg';
import G63 from '../Images/G63.jpg'

export default function Home() {

  return (
    <>
      {/* HeroSection */}
      <div className="bg-black h-80 flex relative">
        <div
          className="absolute right-0 w-1/3 h-full"
          style={{
            backgroundImage: `url(${heroSectionImage.src})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat"
          }}
        ></div>
        <div className="flex items-center px-20 ">
          <h1 className="text-white text-5xl font-semibold">WELCOME TO <span className='text-cyan-400'>CARSCLUB</span></h1>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className='h-80 my-3 flex border-b p-3'>
        <div className='h-full flex flex-col w-[60%]'>
          <h1 className='text-3xl font-semibold my-4'>What We Offers</h1>
          <p className='text-sm mb-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis perspiciatis tenetur officia. Praesentium velit minima sint cum dolores fugiat corporis provident, voluptas dolorum explicabo id quos sequi !</p>
          <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis perspiciatis tenetur officia. Praesentium velit minima sint cum dolores fugiat corporis provident, voluptas dolouos sequi repudiandae laudantium!</p>
          <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis perspiciatis tenetur officia. Praesentium velit minima sint cum dolores fugiat corporis provident, voluptas dolorum explicabo id quos sequi repudiandae laudantium!</p>
          <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis perspiciatis tenetur officia. Praesentium velit minima sint cum dolores fugiat corporis provident, voluptas dolorum explicabo id quos sequi repudiandae laudantium!</p>
        </div>
        <div className='h-full w-[40%] overflow-hidden'>
          <Image src={G63} alt='Image' width={100} height={100} layout="responsive" className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"
          ></Image>
        </div>
      </div >

      {/* Most Popular Cars Section */}
      <div className='min-h-96 p-3 mb-10'>
        <div>
          <h1 className='text-3xl font-semibold'>Most Popular Cars</h1>
        </div>

        <div className='grid  grid-cols-4'>
          <div className='my-4 m-auto'>
            <div className='border shadow-lg w-60 rounded-lg overflow-hidden'>
              <div className='h-[50%]'>
                <Image src={G63} width={100} height={100} layout='responsive' className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
              </div>
              <div className='p-4'>
                <h1><span className='font-semibold text-lg'>Car Name : </span><span>G63</span></h1>
                <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                <div className='flex justify-center mt-5'>
                  <button className='border border-black text-xs p-1 w-40 bg-black text-white hover:text-black hover:bg-white'>View Car</button>
                </div>
              </div>
            </div>
          </div>
          <div className='my-4 m-auto'>
            <div className='border shadow-lg w-60 rounded-lg overflow-hidden'>
              <div className='h-[50%]'>
                <Image src={G63} width={100} height={100} layout='responsive' className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
              </div>
              <div className='p-4'>
                <h1><span className='font-semibold text-lg'>Car Name : </span><span>G63</span></h1>
                <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                <div className='flex justify-center mt-5'>
                  <button className='border border-black text-xs p-1 w-40 bg-black text-white hover:text-black hover:bg-white'>View Car</button>
                </div>
              </div>
            </div>
          </div>
          <div className='my-4 m-auto'>
            <div className='border shadow-lg w-60 rounded-lg overflow-hidden'>
              <div className='h-[50%]'>
                <Image src={G63} width={100} height={100} layout='responsive' className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
              </div>
              <div className='p-4'>
                <h1><span className='font-semibold text-lg'>Car Name : </span><span>G63</span></h1>
                <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                <div className='flex justify-center mt-5'>
                  <button className='border border-black text-xs p-1 w-40 bg-black text-white hover:text-black hover:bg-white'>View Car</button>
                </div>
              </div>
            </div>
          </div>
          <div className='my-4 m-auto'>
            <div className='border shadow-lg w-60 rounded-lg overflow-hidden'>
              <div className='h-[50%]'>
                <Image src={G63} width={100} height={100} layout='responsive' className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
              </div>
              <div className='p-4'>
                <h1><span className='font-semibold text-lg'>Car Name : </span><span>G63</span></h1>
                <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                <div className='flex justify-center mt-5'>
                  <button className='border border-black text-xs p-1 w-40 bg-black text-white hover:text-black hover:bg-white'>View Car</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}