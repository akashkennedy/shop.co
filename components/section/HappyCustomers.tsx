import { ArrowLeft } from "lucide-react";
import { testimonials } from "@/constants/testimonials";
import Testimonial from "../Testimonial";

export default function HappyCustomers() {
  return (
    <section className="px-16">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold">OUR HAPPY CUSTOMERS</h1>
        <div className="flex gap-3">
          <ArrowLeft />
          <ArrowLeft className="rotate-180" />
        </div>
      </div>
      <div className="flex gap-3 my-10">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            name={testimonial.name}
            content={testimonial.content}
          />
        ))}
      </div>
    </section>
  );
}
