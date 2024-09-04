import { Star } from "lucide-react";
import { CircleCheckBig } from "lucide-react";

interface TestimonailTypes {
  name: string;
  content: string;
  id?: number;
}

const Testimonial = ({ name, content, id }: TestimonailTypes) => {
  return (
    <div className="border rounded-xl p-10 space-y-3">
      <div className="flex gap-2">
        <Star fill="#FFC633" stroke="0" />
        <Star fill="#FFC633" stroke="0" />
        <Star fill="#FFC633" stroke="0" />
        <Star fill="#FFC633" stroke="0" />
        <Star fill="#FFC633" stroke="0" />
      </div>
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold">
          {name}
          <CircleCheckBig
            color="#ffffff"
            fill="#01AB31"
            className="inline ml-3 size-8"
          />
        </h2>
        <p className="text-gray-700 font-normal">&quot; {content} &quot;</p>
      </div>
    </div>
  );
};

export default Testimonial;
