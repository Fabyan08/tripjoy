"use client";

import Nav from "@/app/components/nav/page";
import Image from "next/image";
import CustomAccor from "./CustomAccor";
import { Slider } from "@nextui-org/react";
import { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import MorePage from "./more/page";
import ContactPage from "@/app/components/contact/page";

export default function DetailPage() {
  const [jumlahSlider, setJumlahSlider] = useState(1);
  const handleSliderChange = (newValue) => {
    setJumlahSlider(newValue);
  };
  const hargaTotal = jumlahSlider * 1200000;

  return (
    <>
      <section id="detail" className="bg-[#0D1E3D] w-full h-fit pb-20 md:px-40">
        <Nav />
        {/* <div className="flex "></div> */}
        <div className="pt-24 pr-6 relative md:flex items-center justify-center space-x-4">
          <div className="flex flex-col text-center md:text-end uppercase  ">
            <h1 className="text-7xl font-bold text-white">Gunung</h1>
            <h1 className="text-7xl font-bold text-white">Bromo</h1>
          </div>
          <img
            src="/assets/img/detail/1.jpg"
            className="rounded-tr-[200px] h-[500px] border-blue-300 border-8 rounded-tl-[200px] rounded-b-lg object-cover hover:scale-[1.02] duration-300 w-full md:w-[400px] h-[500px]"
            alt=""
            // style={{ width: "100%", height: "auto" }} // optional
          />
          <div className="">
            <CustomAccor />
          </div>
          {/* <h1>Detail</h1> */}
        </div>
        <div className="mt-4 relative z-10 px-4">
          <div className="bg-gradient-to-b md:space-x-10 from-bl2 text-white  to-[#0e2f4d] md:p-4 items-center shadow-md rounded-xl w-full md:w-fit md:px-20 px-4 h-fit p-4 space-y-5 md:space-y-0 justify-center md:h-40 md:flex">
            <div className="flex flex-col space-y-2">
              <h1>
                Titik Penjemputan{" "}
                <span className="text-sm">(Dari Titik Terdekat Anda)</span>
              </h1>
              <select
                name=""
                className="bg-bl border-2 text-white border-white h-10 w-fit p-2 rounded-lg "
                id=""
              >
                <option value="">Jalan Raya Saimbang</option>
                <option value="">Jalan Raya Balikpapan</option>
                <option value="">Jalan Raya Bandung</option>
              </select>
            </div>

            <div>
              <Slider
                label="Pesan Tiketmu"
                step={1}
                maxValue={20}
                minValue={0}
                defaultValue={1}
                className="w-full md:w-[400px]"
                onChange={(value) => handleSliderChange(value)} // Perubahan di sini
              />
              <h1>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(hargaTotal)}
              </h1>
            </div>
            <div>
              <button className="bg-[#0D1E3D] flex items-center  text-white p-4 rounded-lg">
                <BsCartCheck className="mr-2" />
                Pesan
              </button>
            </div>
            <div>
              <img
                src="/assets/img/detail/order.png"
                className="hidden md:flex w-40"
                alt=""
              />
              <i className="https://lottie.host/0744899b-1670-4ad0-ac8a-ed6a342428a9/mc2VUceAs3.lottie"></i>
            </div>
          </div>
        </div>
      </section>
      <MorePage />
      <ContactPage />
    </>
  );
}
