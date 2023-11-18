import { CiMail } from "react-icons/ci";
import { Image } from "@nextui-org/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-bl w-full px-10  h-fit pb-10">
      <div className="md:flex -space-y-40 md:space-y-0 md:space-x-28">
        <div className="flex space-x-6 w-fit h-60 items-center">
          <CiMail className="text-white shadow-inner bg-blue-500 text-4xl rounded-full shadow-white p-2" />
          <div className="flex flex-col text-white">
            <h1 className="font-bold text-lg">Email</h1>
            <h1 className="text-md">tripjoy@gmail.com</h1>
          </div>
        </div>
        <div className="flex space-x-6 w-fit h-60 items-center">
          <CiMail className="text-white shadow-inner bg-blue-500 text-4xl rounded-full shadow-white p-2" />
          <div className="flex flex-col text-white">
            <h1 className="font-bold text-lg">Email</h1>
            <h1 className="text-md">tripjoy@gmail.com</h1>
          </div>
        </div>
        <div className="flex space-x-6 w-fit h-60 items-center">
          <CiMail className="text-white shadow-inner bg-blue-500 text-4xl rounded-full shadow-white p-2" />
          <div className="flex flex-col text-white">
            <h1 className="font-bold text-lg">Email</h1>
            <h1 className="text-md">tripjoy@gmail.com</h1>
          </div>
        </div>
      </div>
      <section id="footer">
        <div className="md:flex space-y-5 flex flex-col-reverse md:space-y-0 md:space-x-40">
          <div className="space-y-4 mt-4 md:mt-0">
            <Image
              src="/assets/img/logo2.webp"
              width={150}
              height={150}
              alt=""
            />
            <h1 className="text-white w-80">
              <b>Trip Joy</b> is Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio eius voluptas ullam debitis reprehenderit
              error autem corrupti culpa delectus accusamus.
            </h1>
            <div className="flex space-x-2">
              <FaFacebookF className="text-4xl p-2 bg-white text-gray-800 hover:bg-bl hover:text-white duration-200  rounded-full" />
              <FaTwitter className="text-4xl p-2 bg-white text-gray-800 hover:bg-bl hover:text-white duration-200  rounded-full" />
              <FaInstagram className="text-4xl p-2 bg-white text-gray-800 hover:bg-bl hover:text-white duration-200  rounded-full" />
              <FaLinkedin className="text-4xl p-2 bg-white text-gray-800 hover:bg-bl hover:text-white duration-200  rounded-full" />
              <FaTiktok className="text-4xl p-2 bg-white text-gray-800 hover:bg-bl hover:text-white duration-200  rounded-full" />
            </div>
          </div>
          <div className="flex flex-col space-y-4 text-white">
            <h1 className="font-bold text-lg">Services</h1>
            <a href="#">Adventure Packages</a>
            <a href="#">Outbond Family</a>
            <a href="#">Family Camping</a>
            <a href="#">Honeymoon</a>
            <a href="#">Destination</a>
          </div>
          <div className="flex flex-col space-y-4 pt-10 text-white">
            <a href="#">Latest News & Blog</a>
            <a href="#">Feature & Menu</a>
            <a href="#">Meet Our Team</a>
            <a href="#">Discount</a>
          </div>
          <div className="flex flex-col space-y-4 text-white">
            <h1 className="font-bold text-lg">Newsletter</h1>

            <h1>
              Here you can fill with your email, so we can have information
              about you!
            </h1>
            <input
              type="text"
              className="bg-white/30 rounded-xl p-2 border-2 border-white/20 w-full h-10"
              placeholder="Email..."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
