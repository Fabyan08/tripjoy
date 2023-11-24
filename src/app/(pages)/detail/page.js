"use client";

import Nav from "@/app/components/nav/page";
import Image from "next/image";

export default function DetailPage() {
  return (
    <>
      <section id="detail" className="bg-[#0D1E3D] w-full h-fit pb-20 mb-96">
        <Nav />
        {/* <div className="flex "></div> */}
        <div className="pt-24 md:flex items-center justify-center space-x-4">
          <div className="flex flex-col text-center">
            <h1 className="text-7xl font-bold text-white">Gunung</h1>
            <h1 className="text-7xl font-bold text-white">Bromo</h1>
          </div>
          <Image
            src="/assets/img/detail/1.jpg"
            className="rounded-tr-[200px] h-[500px] border-blue-300 border-8 rounded-tl-[200px] rounded-b-lg object-cover hover:scale-[1.02] duration-300"
            width={400}
            height={700}
            alt=""
          />
          {/* <h1>Detail</h1> */}
        </div>
      </section>
    </>
  );
}
