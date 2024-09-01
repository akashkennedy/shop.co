import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <div className="flex flex-col gap-5 absolute w-1/2 px-16 justify-center h-full -my-12">
          <h1 className="font-extrabold text-6xl text-left">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-gray-500 text-sm">
            Browse through our diverse range of meticulously crafted garments
            designed to bring out your individuality and cater to your sense of
            style
          </p>
          <Button className="rounded-full max-w-48 max-h-16 p-6 bg-black font-semibold">
            Shop Now
          </Button>
          <div className="flex gap-7 mt-5">
            <div>
              <h5 className="font-semibold text-4xl">200+</h5>
              <p className="text-gray-500 text-sm">International Brands</p>
            </div>
            <div>
              <h5 className="font-semibold text-4xl">2000+</h5>
              <p className="text-gray-500 text-sm">High Quality Products</p>
            </div>
            <div>
              <h5 className="font-semibold text-4xl">30,000+</h5>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
        <Image
          src="/star.png"
          alt="star"
          height={56}
          width={56}
          className="absolute top-[45%] left-[52%]"
        />
        <Image
          src="/star.png"
          alt="star"
          height={104}
          width={104}
          className="absolute top-[23%] left-[90%]"
        />
        <Image
          src="/hero-wrapper.png"
          alt="Hero Wrapper"
          className="min-w-full overflow-clip bg-contain "
          height={999}
          width={999}
        />
      </section>
    </main>
  );
}
