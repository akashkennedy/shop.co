import Image from "next/image";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] w-full py-10 pb-10 px-5 md:px-10 lg:px-16">
      <section className="h-72 gap-2 lg:h-40 md:h-36 w-full rounded-xl bg-black p-8 flex flex-col lg:flex-row md:flex-row justify-between items-center mb-10">
        <h1 className="w-full text-3xl lg:text-4xl font-black text-white lg:w-1/2">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="flex flex-col items-center gap-3 w-80">
          <div className="flex items-center">
            <Mail className="text-gray-500 absolute left-10 lg:right-96 lg:left-auto md:left-[26.7rem]" />
            <input
              type="email"
              required
              className="bg-white rounded-full h-10 pl-10 min-w-80"
              placeholder="Enter Your Email Address"
            />
          </div>
          <Button
            className="w-full bg-white text-black rounded-full"
            type="submit"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </section>
      <div className="grid grid-cols-2 gap-10 lg:flex lg:gap-5 justify-between my-10">
        <div className="hidden lg:flex flex-col w-72 gap-8">
          <h3 className="font-extrabold text-4xl">SHOP.CO</h3>
          <p className="text-gray-700 font-light">
            We Have Clothes That Suits Your Style and Which You are Proud to
            wear, From Women to Men
          </p>
          <div className="flex gap-3 w-20">
            <Image
              src="/twitter.svg"
              height={28}
              width={28}
              alt="Twitter"
              className="cursor-pointer"
            />
            <Image
              src="/facebook.svg"
              height={28}
              width={28}
              alt="Facebook"
              className="cursor-pointer"
            />
            <Image
              src="/instagram.svg"
              height={28}
              width={28}
              alt="Instagram"
              className="cursor-pointer"
            />
            <Image
              src="/github.svg"
              height={28}
              width={28}
              alt="Github"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-normal mb-5">COMPANY</h3>
          <ul className="text-gray-700 flex flex-col justify-between gap-4 font-light">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-normal mb-5">HELP</h3>
          <ul className="text-gray-700 flex flex-col justify-between gap-4 font-light">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-normal mb-5">FAQ</h3>
          <ul className="text-gray-700 flex flex-col justify-between gap-4 font-light">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-normal mb-5">RESOURCES</h3>
          <ul className="text-gray-700 flex flex-col justify-between gap-4 font-light">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
      <hr className="bg-gray-400 h-[2px]" />
      <div className="block md:flex lg:flex mt-8 justify-between items-center">
        <p className="text-center lg:text-left my-3 lg:my-0 text-gray-700 font-light">
          Shop.co &copy; 2000-2024. All Rights Reserved
        </p>
        <div className="flex justify-between gap-2">
          <Image
            src="/visa.svg"
            alt="Visa"
            width={80}
            height={50}
            className="cursor-pointer"
          />
          <Image
            src="/mastercard.svg"
            alt="MasterCard"
            width={80}
            height={50}
            className="cursor-pointer"
          />
          <Image
            src="/paypal.svg"
            alt="Paypal"
            width={80}
            height={50}
            className="cursor-pointer"
          />
          <Image
            src="/applepay.svg"
            alt="Gpay"
            width={80}
            height={50}
            className="cursor-pointer"
          />
          <Image
            src="/gpay.svg"
            alt="Gpay"
            width={80}
            height={50}
            className="cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
