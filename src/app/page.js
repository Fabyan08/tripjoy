import SliderHome from "./components/custom/SliderHome";
import Image from "next/image";
import Link from "next/link";
import { Figtree } from "next/font/google";
import PopularPage from "./components/popular/page";
import Nav from "./components/nav/page";
import DiscoverPage from "./components/discover/page";
import AboutPage from "./components/about/page";
import ReviewPage from "./components/review/page";
import ContactPage from "./components/contact/page";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="light light:bg-[url('/assets/img/bg.jpg')] dark:bg-[url('/assets/img/bg3.jpg')] relative  bg-cover h-[972px] overflow-x-hidden">
        <Nav className="fixed top-0" />

        <h1 className="-mt-20 text-[80px] md:text-[200px] font-black text-center flex justify-center items-center h-screen font-figtree text-white/70">
          Find Your Way
        </h1>

        <div className="md:flex   px-10 -mt-60 md:-mt-40 items-center justify-between">
          <div className="md:flex justify-center pt-20">
            <div className="flex justify-center">
              <div className="bg-white/20 m-4 backdrop-blur-xl w-40 h-28 p-2 rounded-lg">
                <div className="bg-[#0D1E3D] rounded-xl w-36 h-10 flex justify-center items-center">
                  <h1 className="text-center text-white">🏕️</h1>
                </div>
                <h1 className="text-white p-2 text-md text-center">
                  Camping With The Best View
                </h1>
              </div>
              <div className="bg-white/20 m-4 backdrop-blur-xl w-40 h-28 p-2 rounded-lg">
                <div className="bg-[#0D1E3D] rounded-xl w-36 h-10 flex justify-center items-center">
                  <h1 className="text-center text-white">🛳️</h1>
                </div>
                <h1 className="text-white p-2 text-md text-center">
                  Unbelivable With Ship Experience
                </h1>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/20 m-4 backdrop-blur-xl w-40 h-28 p-2 rounded-lg">
                <div className="bg-[#0D1E3D] rounded-xl w-36 h-10 flex justify-center items-center">
                  <h1 className="text-center text-white">🏄🏻‍♀️</h1>
                </div>
                <h1 className="text-white p-2 text-md text-center">
                  Feel The Cold of The Beach{" "}
                </h1>
              </div>
              <div className="bg-white/20 m-4 backdrop-blur-xl w-40 h-28 p-2 rounded-lg">
                <div className="bg-[#0D1E3D] rounded-xl w-36 h-10 flex justify-center items-center">
                  <h1 className="text-center text-white">🧗🏻‍♀️</h1>
                </div>
                <h1 className="text-white p-2 text-md text-center">
                  Climbing With Mountain View{" "}
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
        {/* <div className="relative"> */}
        {/* <div className=""> */}
        {/* <div class="block-container fixed w-12 h-12"><div class="btn-back rounded-xl btn-back-red"></div><div class="btn-front rounded-xl flex justify-center items-center"><FaArrowUp /></div></div> */}
        <div className="block-container">
          <a
            href="#"
            className="bg-bl2/20 text-white backdrop-blur-md  hover:scale-110 hover:bg-bl2 duration-150  hover:border-2 hover:border-white hover:rounded-full fixed z-50 bottom-12 right-12 rounded-xl p-4"
          >
            <FaArrowUp />
          </a>
        </div>
        {/* </div> */}
        {/* </div> */}

        {/* <div className="absolute bg-white bottom-0 h-10 z-10 w-full"></div> */}
      </main>
      <PopularPage />
      <DiscoverPage />
      <AboutPage />
      <ReviewPage />
      <ContactPage />
      {/* <div className="mt-[1000px]"></div> */}
    </>
  );
}
