"use client";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { BiSolidUserPlus } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { FaGoogle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

import { FaUnlockKeyhole } from "react-icons/fa6";

export default function LoginPage() {
  return (
    <div>
      <section className="bg-[url('/assets/img/auth/bg2.jpg')] relative  overflow-hidden  bg-cover h-screen ">
        <div className="bg-gradient-to-tr from-[#272A37] via-[#272A37] to-bl/70 w-full h-full">
          <div className="top-10 left-2 md:left-10 absolute z-10 w-full">
            <Link
              href="/"
              className="flex space-x-2 items-center text-sm md:text-2xl absolute text-white"
            >
              <IoMdArrowRoundBack className=" text-sm md:text-2xl" />
              <h1>Back To Home</h1>
            </Link>
          </div>
          <div className="flex items-center h-screen px-10 font-poppins">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-bold relative z-10 uppercase text-gray-500">
                START FOR FREE
              </h1>
              <div className="text-[60px] text-white font-bold relative z-10">
                Create New Account<span className="text-blue-500">.</span>
              </div>
              <h1 className="text-md relative z-10 text-gray-500">
                Dont Have Account?{" "}
                <Link href="/auth/register" className="text-blue-500">
                  Sign In
                </Link>
              </h1>
              <form action="" className="md:max-w-lg mt-10 relative z-10">
                <div className="flex space-x-4 mt-10">
                  <div className="relative">
                    <CiUser className="text-white absolute left-2 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      className="bg-gray-600/40 focus:bg-bl/10 w-40 md:w-60 text-white p-2 pl-8 h-10 rounded-[10px] border-white/30 focus:scale-[1.01] focus:border-2 focus:border-blue-500 duration-150"
                      placeholder="Name"
                    />
                  </div>
                  <div className="relative">
                    <BiSolidUserPlus className="text-white absolute left-2 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      className="bg-gray-600/40 focus:bg-bl/10  w-40 md:w-60 text-white p-2 pl-8 h-10 rounded-[10px] border-white/30 focus:scale-[1.01] focus:border-2 focus:border-white/20 duration-150"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="relative mt-4">
                  <HiMail className="text-white absolute left-2 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    className="bg-gray-600/40 focus:bg-bl/10 w-[340px]  md:w-[500px] text-white p-2 pl-8 h-10 rounded-[10px] border-white/30 focus:scale-[1.01] focus:border-2 focus:border-white/20 duration-150"
                    placeholder="Email"
                  />
                </div>
                <div className="relative mt-4">
                  <FaUnlockKeyhole className="text-white absolute left-2 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    className="bg-gray-600/40 focus:bg-bl/10 w-[340px]  md:w-[500px] text-white p-2 pl-8 h-10 rounded-[10px] border-white/30 focus:scale-[1.01] focus:border-2 focus:border-white/20 duration-150"
                    placeholder="Password"
                  />
                </div>
                <div className="mt-10 flex space-x-2 justify-center">
                  <button className="bg-blue-400 text-center w-full border-2 border-white/20 hover:scale-110 duration-300 hover:bg-white hover:text-blue-500 text-xl font-bold p-2 hover:border-2 hover:border-bl rounded-full text-white">
                    Create Account
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500">
                    By signing up, you agree to our{" "}
                    <Link href="" className="text-blue-500">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="" className="text-blue-500">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
                {/* <div className="mt-4">
                  <div className="flex">
                    <FaGoogle className="text-bl bg-white p-2 w-20 h-20 rounded-lg"/>
                  </div>
                </div> */}
              </form>
              <div className="flex absolute h-full -top-[6px] justify-center w-full">
                <img src="/assets/img/auth/dot.svg" alt="" />
              </div>
            </div>
            <img
              src="/assets/img/logo2.webp"
              className="absolute bottom-12 right-10 w-20"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
