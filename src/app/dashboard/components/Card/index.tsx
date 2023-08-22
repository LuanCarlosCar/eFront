import NumberAnimation from "@/animation/numberAnimation";
import PercentAnimation from "@/animation/percentAnimation";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  data: { title: string; value: number; percent: number };
}
export default function Card(props: Props) {
  const { title, value, percent } = props.data;

  function renderPercent() {
    const isNegative = percent < 0;
    const Icon = isNegative ? BiTrendingDown : BiTrendingUp;

    return (
      <div
        data-isNegative={isNegative}
        className=" font-semibold inline-flex rounded-3xl items-center text-green-base bg-green-base/[0.1] py-[0.4375rem] data-[isNegative=true]:text-red-sub data-[isNegative=true]:bg-red-sub/[0.1] px-3  gap-2"
      >
        <Icon className=" text-xl" />

        <PercentAnimation value={percent} />
      </div>
    );
  }

  return (
    <div
      className={`${poppins.className} bg-white px-5 py-5 w-full h-75 rounded-xl`}
    >
      <h2 className=" text-black text-base mb-[0.5rem]">{title}</h2>

      <div className=" text-black text-base font-semibold text-2xl mb-[0.75rem]">
        <NumberAnimation value={value} />
      </div>

      {renderPercent()}
    </div>
  );
}
