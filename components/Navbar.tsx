import { ChevronDown, Search, ShoppingCart, UserCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex gap-6 items-center justify-between my-6 mx-16">
      <h1 className="text-3xl font-extrabold">SHOP.CO</h1>
      <ul className="flex gap-3">
        <li>
          Shop <ChevronDown className="inline" />
        </li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>
      <div className="h-8 flex items-center">
        <Search className="relative -right-10" />
        <input
          type="search"
          className="rounded-full w-[35em] bg-gray-100 text-gray-800 p-3 placeholder-shown:p-3 pl-16 placeholder-shown:pl-16"
          placeholder="Search for Products"
        />
      </div>
      <div className="flex gap-5 items-center">
        <ShoppingCart className="cursor-pointer" />
        <UserCircle className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
