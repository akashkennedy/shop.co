import {
  ChevronDown,
  Search,
  ShoppingCart,
  UserCircle,
  Menu,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="mx-5 flex gap-6 items-center justify-between my-6 lg:mx-16 md:mx-10">
      <div className="flex items-center gap-2">
        <Menu className="lg:hidden md:hidden cursor-pointer" size={35} />
        <h1 className="text-3xl font-extrabold cursor-pointer">SHOP.CO</h1>
      </div>
      <ul className="hidden lg:flex md:flex gap-3">
        <li>
          Shop <ChevronDown className="inline" />
        </li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>
      <div className="h-8 flex items-center">
        <Search className="mr-7 cursor-pointer lg:mr-0 relative -right-10" />
        <input
          type="search"
          className="hidden lg:block rounded-full w-[35em] bg-gray-100 text-gray-800 p-3 placeholder-shown:p-3 pl-16 placeholder-shown:pl-16"
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
