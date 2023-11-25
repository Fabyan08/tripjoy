"use client";
// import { Slider } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import React from "react";
import { MdNavigateNext } from "react-icons/md";
import DestinationCard from "../CardDestination/page";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  Checkbox,
  Input,
  Slider,
} from "@nextui-org/react";

export default function GenrePage() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    // Remove non-digit characters from the input value
    const rawValue = event.target.value.replace(/\D/g, "");

    // Format the input value with thousand separators
    const formattedValue = Number(rawValue).toLocaleString();

    // Update the state with the formatted value
    setInputValue(formattedValue);
  };
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const destinations = [
    {
      date: "31",
      location: "Tanjung Pinang, Makassar",
      description:
        "Wisata Alam Indah dengan Penampilan Hutan yang Asri dan....",
      price: 1000000,
      rating: 5,
    },
    {
      date: "25",
      location: "Destinasi Lain",
      description:
        "Wisata Alam Indah dengan Penampilan Hutan yang Asri dan....",
      price: 800000,
      rating: 4,
    },
    {
      date: "25",
      location: "Destinasi Lain",
      description:
        "Wisata Alam Indah dengan Penampilan Hutan yang Asri dan....",
      price: 800000,
      rating: 4,
    },
    {
      date: "25",
      location: "Destinasi Lain",
      description:
        "Wisata Alam Indah dengan Penampilan Hutan yang Asri dan....",
      price: 800000,
      rating: 4,
    },
    {
      date: "25",
      location: "Destinasi Lain",
      description:
        "Wisata Alam Indah dengan Penampilan Hutan yang Asri dan....",
      price: 800000,
      rating: 4,
    },
    {
      date: "25",
      location: "Destinasi Lain",
      description:
        "Wisata Alam Indah dengan Penampilan Hutan yang Asri dan....",
      price: 800000,
      rating: 4,
    },
    {
      date: "25",
      location: "Destinasi Lain",
      description:
        "Wisata Alam Indah dengan Penampilan Hutan yang Asri dan....",
      price: 800000,
      rating: 4,
    },
    {
      date: "25",
      location: "Destinasi Lain",
      description:
        "Wisata Alam Indah dengan Penampilan Hutan yang Asri dan....",
      price: 800000,
      rating: 4,
    },
    // Tambahkan destinasi lain jika diperlukan
    // Tambahkan destinasi lain jika diperlukan
  ];
  return (
    <>
      <section id="genre" className="bg-bl w-full h-fit pb-20">
        {/* <div className="px-20">
          <h1 className="text-white text-4xl">Browse by Category</h1>
        </div> */}
        <div className="px-10 pt-20 md:pt-0 md:px-20">
          <div className="flex justify-between">
            <h1 className="text-white text-4xl">All Tour</h1>
            <div className="flex items-center space-x-2 text-white">
              <h1>Urutkan</h1>
              <select name="" className="bg-bl2 rounded-lg p-2" id="">
                <option value="">Termahal</option>
                <option value="">Termurah</option>
              </select>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex w-full space-x-2 ">
              <div className="w-1/3 hidden md:flex bg-bl border-2 p-2 rounded-lg border-lg h-fit">
                <Accordion
                  className="text-white"
                  motionProps={{
                    variants: {
                      enter: {
                        y: 0,
                        opacity: 1,
                        height: "auto",
                        transition: {
                          height: {
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                            duration: 1,
                          },
                          opacity: {
                            easings: "ease",
                            duration: 1,
                          },
                        },
                      },
                      exit: {
                        y: -10,
                        opacity: 0,
                        height: 0,
                        transition: {
                          height: {
                            easings: "ease",
                            duration: 0.25,
                          },
                          opacity: {
                            easings: "ease",
                            duration: 0.3,
                          },
                        },
                      },
                    },
                  }}
                >
                  <AccordionItem
                    key="1"
                    aria-label="Tipe Perjalanan"
                    title="Tipe Perjalanan"
                  >
                    <Checkbox defaultSelected radius="full">
                      Open Trip
                    </Checkbox>
                    <Checkbox defaultSelected radius="full" className="ml-2">
                      Private Trip
                    </Checkbox>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Tema Perjalanan"
                    title="Tema Perjalanan"
                  >
                    <div className="flex flex-col space-y-2">
                      <Checkbox defaultSelected radius="full">
                        Destinasi Populer
                      </Checkbox>{" "}
                      <Checkbox defaultSelected radius="full">
                        Vitamin Sea{" "}
                      </Checkbox>{" "}
                      <Checkbox defaultSelected radius="full">
                        Pegunungan{" "}
                      </Checkbox>{" "}
                    </div>
                  </AccordionItem>
                  <AccordionItem key="3" aria-label="Budget" title="Budget">
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                      <Input
                        placeholder="000"
                        labelPlacement="outside"
                        endContent={
                          <div className="flex items-center">
                            <label className="sr-only" htmlFor="currency">
                              Currency
                            </label>
                            <select
                              className="outline-none border-0 bg-transparent text-default-400 text-small"
                              id="currency"
                              name="currency"
                            >
                              <option>RP</option>
                              <option>USD</option>
                            </select>
                          </div>
                        }
                        type="text" // Change the type to text to allow non-numeric characters
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Lokasi Keberangkatan"
                    title="Lokasi Keberangkatan"
                  >
                    <div className="relative ml-2">
                      <CiSearch className="text-white  absolute left-2 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        className="bg-gray-600/40 focus:bg-bl/10 w-40 md:w-60 text-white  p-2 pl-8 h-10 rounded-[10px] border-white/30 focus:scale-[1.01] focus:border-2 focus:border-blue-500 duration-150"
                        placeholder="Dimana Lokasi Kamu?"
                      />
                    </div>
                  </AccordionItem>
                  <AccordionItem key="5" aria-label="Rating" title="Rating">
                    <Checkbox defaultSelected radius="full">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-300" />
                        <h1>3</h1>
                      </div>
                    </Checkbox>
                    <Checkbox defaultSelected radius="full" className="ml-4">
                      <div className="flex items-center gap-1 ">
                        <FaStar className="text-yellow-300" />
                        <h1>5</h1>
                      </div>
                    </Checkbox>
                  </AccordionItem>
                  <AccordionItem
                    key="6"
                    aria-label="Durasi Wisata"
                    title="Durasi Wisata"
                  >
                    <Slider
                      label="Durasi"
                      step={1}
                      maxValue={10}
                      minValue={0}
                      defaultValue={1}
                      className="max-w-md"
                    />
                  </AccordionItem>
                </Accordion>{" "}
              </div>
              <div className="md:w-3/4 w-full max-h-[1000px] overflow-auto bg-bl rounded-lg border-2 px-4 md:px-10 border-lg h-fit p-2">
                <form action="" className="flex justify-end space-x-10 ">
                  <div className="relative ml-2 mb-4">
                    <CiSearch className="text-white  absolute left-2 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="border-b-4  p-2 pl-8 rounded-full  w-full bg-transparent  focus:outline-none text-white border-bl2"
                    />
                  </div>
                </form>
                <div className="mt-2">
                  <div className="flex justify-center">
                    <div className="grid md:grid-cols-3  gap-3">
                      {/* Gunakan komponen DestinationCard untuk setiap destinasi */}
                      {/* Gunakan komponen DestinationCard untuk setiap destinasi */}
                      {destinations.map((destination, index) => (
                        <DestinationCard
                          key={index}
                          destination={destination}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
