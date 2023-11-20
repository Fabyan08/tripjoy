import { Image } from "@nextui-org/react";
export default function DiscoverPage() {
  return (
    <section
      id="Discover"
      className="bg-gradient-to-t from-[#162238] to-bl pt-20 md:pt-40  text-white"
    >
      <div className="text-center">
        <h1 className="text-blue-400 text-2xl">Discover Trip</h1>
        <h1 className="mt-2 text-center font-bold text-lg">
          Discover the world through our eyes
        </h1>
        <div className="mt-10">
          <Image
            src="assets/icon/travel.svg"
            width="100%"
            height="100%"
          ></Image>
        </div>{" "}
      </div>
      <div className="md:flex mt-10 grid grid-cols-2 px-10  md:space-x-10 relative md:justify-between h-[500px]">
      
        <Image
          src="assets/img/discover/1.jpg"
          className="w-full rounded-lg h-full hover:scale-[1.05] duration-300"
          alt="mount"
        ></Image>
        <div className="md:flex md:flex-col relative z-10  md:justify-between">
          <img
            src="assets/img/discover/2.jpg"
            className="w-96 hover:scale-[1.05] duration-300 rounded-lg md:pb-2 h-1/2"
            alt=""
          />{" "}
          <img
            src="assets/img/discover/3.jpg"
            className="w-96 hover:scale-[1.05] duration-300 rounded-lg md:pt-2 h-1/2 hover:rounded-none"
            alt=""
          />{" "}
        </div>
        <Image
          src="assets/img/discover/4.jpg"
          className="w-full hidden md:flex hover:scale-[1.05] duration-300 rounded-lg h-full"
          alt="mount"
        ></Image>{" "}
      </div>
      <div className="flex -mt-20 justify-center">
        <button className="bg-white/10 relative z-10 border-2 border-white backdrop-blur-md hover:bg-bl2  hover:scale-110 duration-150 rounded-full text-lg py-2 px-4">
          Book Now!
        </button>
      </div>
      <div className="-hue-rotate-20 opacity-40 -mt-20 relative ">
        <Image src="assets/img/climb2.png"></Image>
      </div>
    </section>
  );
}
