import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { GoPerson } from "react-icons/go";

const Header = () => {
  return (
    <header className="container sticky top-0">
      <nav className="mx-4 flex justify-between py-4 mt-4 ">
        <span className="text-sky-900 text-center flex gap-1">
          <h4>Next</h4>shop
        </span>
        <ul className="flex justify-between gap-4">
          <li>Home</li>
          <li>Category</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
        <div className="flex gap-4 ">
          <GoSearch size={24} />
          <BsCart2 size={24} />
          <GoHeart size={24} />
          <div>
            <GoPerson size={24} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
