"use client";
import { User, Link } from "@nextui-org/react";
import { Tabs, Tab, Chip } from "@nextui-org/react";
import { GrWaypoint } from "react-icons/gr";
import { FaBookOpenReader } from "react-icons/fa6";
import { LuGalleryHorizontal } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import { Accordion, AccordionItem } from "@nextui-org/react";
import SliderGallery from "./MorePage/SliderGallery";
import { IoSend } from "react-icons/io5";

export default function MorePage() {
  const defaultContent = "Lorem ipsum dolor sit amet,";
  return (
    <>
      <section
        id="More"
        className="bg-bl w-full md:px-40 h-full mmd:overflow-hidden "
      >
        <div className="flex justify-center">
          <div className="flex w-full px-4  flex-col justify-center  text-white border-none md:overflow-hidden">
            <Tabs
              aria-label="Options"
              color="primary"
              defaultIndex={0} // Menetapkan indeks tab Detail Perjalanan sebagai default (indeks dimulai dari 0)
              variant="underlined"
              classNames={{
                tabList:
                  "gap-6 w-full md:overflow-hidden relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-[#22d3ee]",
                tab: "max-w-fit px-0 h-12",
                tabContent: "group-data-[selected=true]:text-[#06b6d4]",
              }}
            >
              <Tab
                key="Detail Perjalanan"
                title={
                  <div className="flex items-center space-x-2">
                    <GrWaypoint />
                    <span>Detail Perjalanan</span>
                    {/* <Chip size="sm" variant="faded">
                    9
                  </Chip> */}
                  </div>
                }
              >
                <Accordion>
                  <AccordionItem key="1" aria-label="Hari 1" title="Hari 1">
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Accordion 2"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Accordion 3"
                  >
                    {defaultContent}
                  </AccordionItem>
                </Accordion>{" "}
              </Tab>
              <Tab
                key="Syarat & Ketentuan"
                title={
                  <div className="flex items-center space-x-2">
                    <FaBookOpenReader />
                    <span>Syarat & Ketentuan</span>
                  </div>
                }
              >
                <ul className="custom-list ">
                  <li>Tes</li>
                  <li>Tes</li>
                  <li>Tes</li>
                  <li>Tes</li>
                </ul>
              </Tab>
              <Tab
                key="Galeri"
                title={
                  <div className="flex items-center space-x-2">
                    <LuGalleryHorizontal />
                    <span>Galeri</span>
                  </div>
                }
              >
                <SliderGallery />
              </Tab>
              <Tab
                key="Ulasan"
                title={
                  <div className="flex items-center space-x-2">
                    <MdOutlineRateReview />
                    <span>Ulasan</span>
                  </div>
                }
              >
                {" "}
                <div className="grid md:grid-cols-3 gap-5">
                  <div className="bg-bl2 p-4 w-80 h-40 rounded-[40px]">
                    <User
                      name="Junior Garcia"
                      description={
                        <Link
                          href="https://twitter.com/jrgarciadev"
                          size="sm"
                          isExternal
                        >
                          @jrgarciadev
                        </Link>
                      }
                      avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                      }}
                    />
                    <h1>
                      &ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Eligendi iure commodi vero odio distinctio.&ldquo;
                    </h1>
                  </div>
                  <div className="bg-bl2  p-4 w-80 h-40 rounded-[40px]">
                    <User
                      name="Junior Garcia"
                      description={
                        <Link
                          href="https://twitter.com/jrgarciadev"
                          size="sm"
                          isExternal
                        >
                          @jrgarciadev
                        </Link>
                      }
                      avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                      }}
                    />
                    <h1>
                      &ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Eligendi iure commodi vero odio distinctio.&ldquo;
                    </h1>
                  </div>
                  <div className="bg-bl2  p-4 w-80 h-40 rounded-[40px]">
                    <User
                      name="Junior Garcia"
                      description={
                        <Link
                          href="https://twitter.com/jrgarciadev"
                          size="sm"
                          isExternal
                        >
                          @jrgarciadev
                        </Link>
                      }
                      avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                      }}
                    />
                    <h1>
                      &ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Eligendi iure commodi vero odio distinctio.&ldquo;
                    </h1>
                  </div>
                  <div className="bg-bl2  p-4 w-80 h-40 rounded-[40px]">
                    <User
                      name="Junior Garcia"
                      description={
                        <Link
                          href="https://twitter.com/jrgarciadev"
                          size="sm"
                          isExternal
                        >
                          @jrgarciadev
                        </Link>
                      }
                      avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                      }}
                    />
                    <h1>
                      &ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Eligendi iure commodi vero odio distinctio.&ldquo;
                    </h1>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="relative">
                    <input
                      type="text"
                      className="bg-white/30 backdrop-blur-md w-full p-2 rounded-full h-10 focus:outline-white"
                      placeholder="Tuliskan Ulasan Kamu..."
                    />
                    <IoSend className="text-white absolute right-2 top-1/2 transform -translate-y-1/2" />
                  </div>

                  {/* <div className="relative">
                    <input
                      type="text"
                      className="bg-white/30 backdrop-blur-md w-full p-2 rounded-full h-10 focus:outline-white"
                    />
                    <IoSend className="absolute right-0 z-10" />
                  </div> */}
                </div>
              </Tab>
            </Tabs>
          </div>{" "}
        </div>
      </section>
    </>
  );
}
