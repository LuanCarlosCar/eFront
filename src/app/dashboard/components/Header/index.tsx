import Image from "next/image";
import user from "../../../../../public/user.svg";
import { Poppins } from "next/font/google";
import { FiSearch, FiBell } from "react-icons/fi";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  return (
    <header
      className={`${poppins.className} pt-14 pl-36 pr-36 flex justify-between text-black `}
    >
      <div>
        <h1 className=" text-2xl">Olá, Iuri</h1>
        <p className=" text-lg text-[#6A6969]">
          Aqui estão as informações sobre suas vendas.
        </p>
      </div>

      <ul className=" flex justify-start items-center">
        <li className=" mr-6">
          <FiSearch className=" text-2xl hover:text-blue-sub cursor-pointer" />
        </li>
        <li className=" relative mr-11">
          <FiBell className=" text-2xl hover:text-blue-sub cursor-pointer" />
          <div className="absolute top-0 right-[-0.4rem] w-[0.5rem] h-[0.5rem] bg-blue-sub  rounded-lg" />
        </li>
        <li className=" flex justify-start items-center gap-4">
          <Image src={user} alt="logo" />
          <p className=" text-base">Iuri Silva</p>
        </li>
      </ul>
    </header>
  );
}
