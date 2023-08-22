"use client";

import { Poppins } from "next/font/google";
import { useAtomValue } from "jotai";
import "./styles.css";
import { dataGraphicAtom } from "../../atom";
import NumberAnimation from "@/animation/numberAnimation";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function GraphicWeek() {
  const dataGraphic = useAtomValue(dataGraphicAtom);

  return (
    <div
      className={`${poppins.className} bg-white h-[20.9375rem] w-full rounded-xl px-6 py-8  text-black col-span-2`}
    >
      <h1 className=" text-2xl mb-4">Histórico de transações</h1>

      {dataGraphic
        .find((item) => item.isSelected)
        ?.history.map(({ date, value }) => {
          return (
            <div className=" w-full bg-blue-sub/[0.09] rounded-md flex justify-between px-3 py-3 mb-5 text-base text-blue-sub">
              <p className=" text-base text-blue-sub">{date}</p>

              <NumberAnimation value={value} />
            </div>
          );
        })}
    </div>
  );
}
