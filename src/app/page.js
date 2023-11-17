import SliderHome from "./components/custom/SliderHome";
import Image from "next/image";
import Link from "next/link";
import { Figtree } from "next/font/google";
import PopularPage from "./components/popular/page";
import Nav from "./components/nav/page";

export default function Home() {
  return (
    <>
      <main className="light light:bg-[url('/assets/img/bg.jpg')] dark:bg-[url('/assets/img/bg3.jpg')] relative  bg-cover h-[972px] overflow-x-hidden">
        <Nav className="fixed top-0" />

        <h1 className="-mt-20 text-[80px] md:text-[200px] font-black text-center flex justify-center items-center h-screen font-figtree text-white/70">
          Find Your Way
        </h1>

        <div className="md:flex  px-10 -mt-60 md:-mt-40 items-center justify-between">
          <div className="md:flex justify-center pt-20">
            <div className="flex justify-center">
              <div className="bg-white/20 m-4 backdrop-blur-xl w-40 h-28 p-2 rounded-lg">
                <div className="bg-[#0D1E3D] rounded-xl w-36 h-10 flex justify-center items-center">
                  <h1 className="text-center text-white">😎Trip</h1>
                </div>
                <h1 className="text-white p-2 text-md text-center">
                  Unbelivable Trip Experience
                </h1>
              </div>
              <div className="bg-white/20 m-4 backdrop-blur-xl w-40 h-28 p-2 rounded-lg">
                <div className="bg-[#0D1E3D] rounded-xl w-36 h-10 flex justify-center items-center">
                  <h1 className="text-center text-white">😎Trip</h1>
                </div>
                <h1 className="text-white p-2 text-md text-center">
                  Unbelivable Trip Experience
                </h1>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/20 m-4 backdrop-blur-xl w-40 h-28 p-2 rounded-lg">
                <div className="bg-[#0D1E3D] rounded-xl w-36 h-10 flex justify-center items-center">
                  <h1 className="text-center text-white">😎Trip</h1>
                </div>
                <h1 className="text-white p-2 text-md text-center">
                  Unbelivable Trip Experience
                </h1>
              </div>
              <div className="bg-white/20 m-4 backdrop-blur-xl w-40 h-28 p-2 rounded-lg">
                <div className="bg-[#0D1E3D] rounded-xl w-36 h-10 flex justify-center items-center">
                  <h1 className="text-center text-white">😎Trip</h1>
                </div>
                <h1 className="text-white p-2 text-md text-center">
                  Unbelivable Trip Experience
                </h1>
              </div>
            </div>
          </div>
          <div className=" ml-4">
            <div className="w-full md:w-[500px] h-40">
              {" "}
              <SliderHome />
            </div>
            {/* <h1 className="w-96 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, magnam.
            </h1> */}
          </div>
        </div>

        {/* <div className="absolute bg-white bottom-0 h-10 z-10 w-full"></div> */}
      </main>
      <PopularPage />
      {/* <div className="mt-[1000px]"></div> */}
    </>
  );
}
