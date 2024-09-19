import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import { testimonials } from "@/constants/testimonials";
import Product from "@/components/Product";
import { newArrivals } from "@/constants/products";
import { topSelling } from "@/constants/products";
import Image from "next/image";
import logo1 from "/public/logo1.png";
import logo2 from "/public/logo2.png";
import logo3 from "/public/logo3.png";
import logo4 from "/public/logo4.png";
import logo5 from "/public/logo5.png";
import { ArrowLeft } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section>
        <div className="flex flex-col gap-5  w-full mt-5 lg:my-20 lg:w-1/2 px-5 lg:px-16 justify-center h-full lg:absolute">
          <h1 className="text-4xl font-extrabold lg:text-6xl text-left">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-gray-500 text-sm">
            Browse through our diverse range of meticulously crafted garments
            designed to bring out your individuality and cater to your sense of
            style
          </p>
          <Button className="rounded-full w-full lg:max-w-48 max-h-16 p-6 bg-black font-semibold">
            Shop Now
          </Button>
          <div className="size-60 lg:size-full grid grid-cols-2 mx-auto lg:flex gap-7 mt-5">
            <div>
              <h5 className="font-semibold text-3xl lg:text-4xl">200+</h5>
              <p className="text-gray-500 text-sm">International Brands</p>
            </div>
            <div>
              <h5 className="font-semibold text-3xl lg:text-4xl">2000+</h5>
              <p className="text-gray-500 text-sm">High Quality Products</p>
            </div>
            <div className="ml-10 lg:ml-0">
              <h5 className="font-semibold text-3xl lg:text-4xl">30,000+</h5>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
        <Image
          src="/star.png"
          alt="star"
          height={56}
          width={56}
          className="hidden lg:block absolute top-[45%] left-[52%]"
        />
        <Image
          src="/star.png"
          alt="star"
          height={104}
          width={104}
          className="hidden lg:block absolute top-[23%] left-[90%]"
        />
        <Image
          src="/hero-wrapper.png"
          alt="Hero Wrapper"
          className="hidden lg:block min-w-full overflow-clip bg-contain "
          height={999}
          width={999}
        />
      </section>
      <section className="flex-wrap gap-5 h-28 bg-black w-full flex justify-evenly">
        <Image src={logo1} alt="logo1" className="h-auto w-auto py-10" />
        <Image src={logo2} alt="logo2" className="h-auto w-auto py-10" />
        <Image src={logo3} alt="logo3" className="h-auto w-auto py-10" />
        <Image src={logo4} alt="logo4" className="h-auto w-auto py-10" />
        <Image src={logo5} alt="logo5" className="h-auto w-auto py-10" />
      </section>
      <section className="mx-5 lg:mx-16">
        <h1 className="text-5xl text-center font-bold my-20">New Arrivals</h1>
        <div className="grid grid-cols-2 gap-5 lg:flex justify-between">
          {newArrivals.map((product) => (
            <div key={product.id}>
              <Product
                title={product.title}
                image={product.image}
                rating={product.rating}
                price={product.price}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button variant="outline" className="mx-auto my-20 rounded-full">
            View All
          </Button>
        </div>
      </section>
      <section className="mx-5 lg:mx-16">
        <h1 className="text-5xl text-center font-bold my-10 lg:my-20">
          Top Selling
        </h1>
        <div className="grid grid-cols-2 gap-3 lg:flex justify-between">
          {topSelling.map((product) => (
            <div key={product.id}>
              <Product
                title={product.title}
                image={product.image}
                rating={product.rating}
                price={product.price}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button variant="outline" className="mx-auto my-20 rounded-full">
            View All
          </Button>
        </div>
      </section>
      <section className="mx-5 lg:mx-16">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-left lg:text-center">
            OUR HAPPY CUSTOMERS
          </h1>
          <div className="flex gap-3">
            <ArrowLeft />
            <ArrowLeft className="rotate-180" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:flex md:flex gap-3 my-10">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              name={testimonial.name}
              content={testimonial.content}
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
