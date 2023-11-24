"use client";
import SliderDestinasi from "@/app/components/custom/SliderDestinasi";
import Nav from "@/app/components/nav/page";
import GenrePage from "./genre/page";
import ContactPage from "@/app/components/contact/page";
import { FaArrowUp } from "react-icons/fa";

export default function DestinasiPage() {
  return (
    <>
      <div className="bg-bl w-full h-fit pb-20 md:h-screen">
        <Nav />
        <div>
          <h1>Destinasi</h1>
        </div>
        <div className="pt-20">
          <SliderDestinasi />
        </div>
      </div>
      <GenrePage />
      <ContactPage />
      <div className="block-container">
        <a
          href="#"
          className="bg-bl2/20 text-white backdrop-blur-md  hover:scale-110 hover:bg-bl2 duration-150  hover:border-2 hover:border-white hover:rounded-full fixed z-50 bottom-12 right-12 rounded-xl p-4"
        >
          <FaArrowUp />
        </a>
      </div>
    </>
  );
}
