import { Poppins } from "next/font/google";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { BiSolidUserPlus } from "react-icons/bi";
import { HiMail } from "react-icons/hi";

export default function LoginPage() {
  return (
    <div>
      <section className="bg-[url('/assets/img/auth/bg2.jpg')] relative  bg-cover h-screen ">
        <div className="bg-gradient-to-tr from-bl via-bl/95 to-bl/70 w-full h-full">
          <div className="flex items-center h-screen px-10 font-poppins">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-bold uppercase text-gray-500">
                START FOR FREE
              </h1>
              <div className="text-[60px] text-white font-bold">
                Create New Account<span className="text-blue-500">.</span>
              </div>
              <h1 className="text-md text-gray-500">
                Already have an account?{" "}
                <Link href="" className="text-blue-500">
                  Sign In
                </Link>
              </h1>
              <form action="" className="max-w-lg">
                <div className="flex space-x-4">
                  <div className="relative">
                    <CiUser className="text-white absolute left-2 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      className="bg-bl2/40 w-60 text-white p-2 pl-8 h-10 rounded-[10px] border-white/30 focus:scale-[1.05] focus:border-2 focus:border-blue-500 duration-150"
                      placeholder="Name"
                    />
                  </div>
                  <div className="relative">
                    <BiSolidUserPlus className="text-white absolute left-2 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      className="bg-bl2/40 w-60 text-white p-2 pl-8 h-10 rounded-[10px] border-white/30 focus:scale-[1.05] focus:border-2 focus:border-white/20 duration-150"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="relative mt-4">
                  <HiMail className="text-white absolute left-2 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    className="bg-bl2/40 w-[500px] text-white p-2 pl-8 h-10 rounded-[10px] border-white/30 focus:scale-[1.05] focus:border-2 focus:border-white/20 duration-150"
                    placeholder="Email"
                  />
                </div>
                <div className="relative mt-4">
                  <HiMail className="text-white absolute left-2 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    className="bg-bl2/40 w-[500px] text-white p-2 pl-8 h-10 rounded-[10px] border-white/30 focus:scale-[1.05] focus:border-2 focus:border-white/20 duration-150"
                    placeholder="Email"
                  />
                </div>
                <div className="mt-4 flex space-x-2 justify-center">
                  <button className="bg-gray-400 text-center w-1/2 p-4 text-sm rounded-full text-white">
                    Change Method
                  </button>
                  <button className="bg-blue-400 text-center w-1/2 p-4 text-sm rounded-full text-white">
                    Create Account
                  </button>
                </div>
              </form>
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
