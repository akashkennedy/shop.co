import Hero from "@/components/section/Hero";
import Brands from "@/components/section/Brands";
import Footer from "@/components/Footer";
import NewArrivals from "@/components/section/NewArrivals";
import TopSelling from "@/components/section/TopSelling";
import HappyCustomers from "@/components/section/HappyCustomers";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewArrivals />
      <Brands />
      <TopSelling />
      <HappyCustomers />
      <Footer />
    </main>
  );
}
