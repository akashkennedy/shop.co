import { Button } from "../ui/button";
import Product from "../Product";
import { topSelling } from "@/constants/products";

export default function TopSelling() {
  return (
    <section className="mx-16">
      <h1 className="text-5xl text-center font-bold my-20">Top Selling</h1>
      <div className="flex justify-between">
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
  );
}
