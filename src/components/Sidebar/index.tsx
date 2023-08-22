"use client";

import Image from "next/image";
import logo from "../../../public/eFront.svg";
import Cookies from "js-cookie";
import { LuLayoutGrid, LuShoppingCart, LuUsers } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { HiMiniPower, HiOutlineCog8Tooth } from "react-icons/hi2";
import { useRouter } from "next/navigation";

const itemsNavigation = [
  { icon: LuLayoutGrid, description: "Dashboard", isCheck: true },
  { icon: FiDownload, description: "Carteira", isCheck: false },
  { icon: LuShoppingCart, description: "Transações", isCheck: false },
  { icon: LuUsers, description: "Suporte", isCheck: false },
];

const itemsNavigation2 = [
  { icon: HiOutlineCog8Tooth, description: "Ajustes", isCheck: false },
  { icon: HiMiniPower, description: "Desconectar", isCheck: true },
];

export default function Sidebar() {
  const router = useRouter();

  function handleLogout() {
    Cookies.remove("auth_token");
    router.push("/");
  }

  return (
    <div className="fixed h-screen w-79 bg-white flex items-center flex-col rounded-e-2xl">
      <Image className=" mt-14 mb-20" src={logo} alt="logo" />

      <ul>
        {itemsNavigation.map(({ icon: Icon, description, isCheck }) => {
          return (
            <li
            key={description}
              data-isCheck={isCheck}
              className="group flex  items-center gap-4  p-4 mb-6 rounded-lg data-[isCheck=true]:bg-blue-sub/[.06] cursor-pointer"
            >
              <Icon
                data-isCheck={isCheck}
                className=" text-2xl text-black text-b font-bold data-[isCheck=true]:text-blue-sub group-hover:text-blue-sub"
              />
              <p
                data-isCheck={isCheck}
                className=" text-lg text-black font-bold data-[isCheck=true]:text-blue-sub group-hover:text-blue-sub"
              >
                {description}
              </p>
            </li>
          );
        })}
      </ul>
      <div className=" h-[3px] w-3/4  bg-[#F2F6FF] " />

      <ul>
        {itemsNavigation2.map(({ icon: Icon, description, isCheck }) => {
          if (description === "Desconectar") {
            return (
              <li
              key={description}
                data-isCheck={isCheck}
                onClick={handleLogout}
                className="group flex  items-center gap-4  p-4 mb-6 transition-all duration-300  rounded-lg data-[isCheck=true]:bg-blue-sub/[.06] cursor-pointer data-[isCheck=true]:hover:bg-red-sub/[0.5]"
              >
                <Icon
                  data-isCheck={isCheck}
                  className=" text-2xl text-black text-b font-bold data-[isCheck=true]:text-red-sub  "
                />
                <p
                  data-isCheck={isCheck}
                  className=" text-lg text-black font-bold data-[isCheck=true]:text-red-sub "
                >
                  {description}
                </p>
              </li>
            );
          }
          return (
            <li
            key={description}
              data-isCheck={isCheck}
              className="group flex  items-center gap-4  p-4 mb-6  rounded-lg data-[isCheck=true]:bg-blue-sub/[.06] cursor-pointer"
            >
              <Icon
                data-isCheck={isCheck}
                className=" text-2xl text-black text-b font-bold  group-hover:text-blue-sub"
              />
              <p
                data-isCheck={isCheck}
                className=" text-lg text-black font-bold  group-hover:text-blue-sub"
              >
                {description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
