
import Image from "next/image";



// Hero provides a static video that autoplays on the top of the app

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat  flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0 bg-black  ">
     <div className="h-[30vh] lg:h-[45vh] w-full flex justify-center items-center top-0 left-0 object-cover">
        <video
        autoPlay
        muted
        loop
        src="./aot-video-prev.mov"
        className="brightness-[70%]"></video>
        <div className="absolute  w-[90%] lg:w-[90%] 2xl:w-[77%] md:bottom-[70%] lg:bottom-[50%] xl:bottom-[50%] mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold ">Attack on Titan</h1>
            <p className="text-xs sm:text-lg md:text-lg opacity-50 mt-5 w-64 sm:w-72 lg:w-[30rem] line-clamp-3">Vor einer langen Zeit wurde die gesamte Menschheit gezwungen, sich hinter gigantische, kreisförmige Mauern zurück zu ziehen...</p>
        </div>
     </div>
    </header>
  );
}

export default Hero;