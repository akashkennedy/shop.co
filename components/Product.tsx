import Image, { StaticImageData } from "next/image";
import { Star } from "lucide-react";

interface ProductProps {
  image: string;
  title: string;
  rating: number;
  price: number;
}

const Product = ({ image, title, price, rating }: ProductProps) => {
  return (
    <div>
      <div className="h-64 w-56 rounded-3xl">
        <Image
          src={image}
          alt={title}
          height={400}
          width={600}
          className="my-auto rounded-lg"
        />
      </div>
      <div className="space-y-1">
        <h4 className="font-semibold text-md">{title}</h4>
        <div className="flex gap-2">
          <Star fill="#FFC633" stroke="0" />
          <Star fill="#FFC633" stroke="0" />
          <Star fill="#FFC633" stroke="0" />
          <Star fill="#FFC633" stroke="0" />
          <p className="text-gray-500 ml-1">
            {rating}/<span className="font-normal text-black">5</span>
          </p>
        </div>
        <h4 className="font-bold text-md">${price}</h4>
      </div>
    </div>
  );
};

export default Product;
