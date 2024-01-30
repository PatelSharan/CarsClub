import heroSectionImage from '../Images/HeroSection.jpg';

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
        <div className="flex items-center px-20 Roboto ">
          <h1 className="text-white text-5xl font-semibold">WELCOME TO <span className='text-cyan-400'>CARSCLUB</span></h1>
        </div>
      </div>
    </>
  );
}
