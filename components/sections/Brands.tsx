import Image from "next/image";
import logo1 from "/public/logo1.png";
import logo2 from "/public/logo2.png";
import logo3 from "/public/logo3.png";
import logo4 from "/public/logo4.png";
import logo5 from "/public/logo5.png";

export default function Brands() {
  return (
    <section className="min-h-28 bg-black w-full flex justify-evenly">
      <Image src={logo1} alt="logo1" className="h-auto w-auto py-10" />
      <Image src={logo2} alt="logo2" className="h-auto w-auto py-10" />
      <Image src={logo3} alt="logo3" className="h-auto w-auto py-10" />
      <Image src={logo4} alt="logo4" className="h-auto w-auto py-10" />
      <Image src={logo5} alt="logo5" className="h-auto w-auto py-10" />
    </section>
  );
}
