"use client";
// import { Slider } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import React from "react";

import {
  Accordion,
  AccordionItem,
  Checkbox,
  Input,
  Slider,
} from "@nextui-org/react";

export default function GenrePage() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <>
      <section
        id="genre"
        className="bg-gradient-to-b from-bl via-bl to-bl2 w-full h-fit"
      >
        {/* <div className="px-20">
          <h1 className="text-white text-4xl">Browse by Category</h1>
        </div> */}
        <div className="px-20">
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
              <div className="w-1/3 bg-bl border-2 p-2 rounded-lg border-lg h-fit">
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
                    aria-label="Accordion 1"
                    title="Accordion 1"
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
                    aria-label="Accordion 2"
                    title="Accordion 2"
                  >
                    <div className="flex flex-col space-y-2">
                      <Checkbox defaultSelected radius="full">
                        Open Trip
                      </Checkbox>{" "}
                      <Checkbox defaultSelected radius="full">
                        Open Trip
                      </Checkbox>{" "}
                      <Checkbox defaultSelected radius="full">
                        Open Trip
                      </Checkbox>{" "}
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Accordion 3"
                  >
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                      <Input
                        placeholder="0.00"
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
                              <option>USD</option>
                              <option>ARS</option>
                              <option>EUR</option>
                            </select>
                          </div>
                        }
                        type="number"
                      />{" "}
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Accordion 4"
                    title="Accordion 4"
                  >
                    <div className="relative ml-2">
                      <CiSearch className="text-white  absolute left-2 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        className="bg-gray-600/40 focus:bg-bl/10 w-40 md:w-60 text-white  p-2 pl-8 h-10 rounded-[10px] border-white/30 focus:scale-[1.01] focus:border-2 focus:border-blue-500 duration-150"
                        placeholder="Name"
                      />
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="5"
                    aria-label="Accordion 5"
                    title="Accordion 5"
                  >
                    <Checkbox defaultSelected radius="full">
                      Open Trip
                    </Checkbox>
                    <Checkbox defaultSelected radius="full" className="ml-2">
                      Private Trip
                    </Checkbox>
                  </AccordionItem>
                  <AccordionItem
                    key="6"
                    aria-label="Accordion 6"
                    title="Accordion 6"
                  >
                    <Slider
                      label="Durasi"
                      step={1}
                      maxValue={10}
                      minValue={0}
                      defaultValue={0.4}
                      className="max-w-md"
                    />
                  </AccordionItem>
                </Accordion>{" "}
              </div>
              <div className="w-3/4 bg-bl rounded-lg border-2 px-10 border-lg h-fit p-2">
                <form action="" className="flex justify-between space-x-10 ">
                  <div className="relative ml-2">
                    <CiSearch className="text-white  absolute left-2 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      className="border-b-4  p-2 pl-8  w-full bg-transparent  focus:outline-none text-white border-bl2"
                    />
                  </div>
                  <div className="relative ml-2">
                    <CiSearch className="text-white  absolute left-2 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      className="border-b-4  p-2 pl-8  w-full bg-transparent  focus:outline-none text-white border-bl2"
                    />
                  </div>
                </form>
                <div className="mt-2">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="w-full bg-white h-40"></div>
                    <div className="w-full bg-white h-40"></div>
                    <div className="w-full bg-white h-40"></div>
                    <div className="w-full bg-white h-40"></div>
                    <div className="w-full bg-white h-40"></div>
                    <div className="w-full bg-white h-40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Input type="email" label="Email" />
      </section>
    </>
  );
}
