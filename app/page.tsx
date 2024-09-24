import Hero from "@/components/sections/Hero";
import Brands from "@/components/sections/Brands";
import Footer from "@/components/Footer";
import NewArrivals from "@/components/sections/NewArrivals";
import TopSelling from "@/components/sections/TopSelling";
import HappyCustomers from "@/components/sections/HappyCustomers";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <HappyCustomers />
      <Footer />
    </main>
  );
}
