"use client";

import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import "./styles.css";
import { getFiveNumberCaption, getValueH, getHighestValue } from "./utils";
import { useAtom } from "jotai";
import { dataGraphicAtom } from "../../atom";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function GraphicMonth() {
  const [dataGraphic, setDataGraphic] = useAtom(dataGraphicAtom);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setExpanded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  function handleSelectPeriod(mes: string) {
    const newDataGraphic = dataGraphic.map((item) => {
      if (item.mes === mes) {
        return {
          ...item,
          isSelected: true,
        };
      }
      return {
        ...item,
        isSelected: false,
      };
    });

    setDataGraphic(newDataGraphic);
  }

  return (
    <div
      className={`${poppins.className} bg-white h-[20.9375rem] w-full rounded-xl px-6 py-8  text-black col-span-2`}
    >
      <h1 className=" text-2xl mb-4">Gráfico de receitas</h1>

      <div className=" flex">
        <section className="flex flex-col gap-5">
          {getFiveNumberCaption(getHighestValue(dataGraphic)).map((item) => {
            return (
              <p key={item} className=" text-base text-black-1">
                {item}
              </p>
            );
          })}
        </section>

        <section className=" min-h-[14rem] flex flex-row justify-start items-end gap-4 ml-10 overflow-x-auto">
          {dataGraphic.map((item) => {
            return (
              <div
                key={item.mes}
                className=" group flex flex-col items-center cursor-pointer"
                onClick={() => handleSelectPeriod(item.mes)}
              >
                <div
                  data-isSelected={item.isSelected}
                  className={`group mb-2 w-11 rounded-md bg-blue-sub/[0.09] data-[isSelected=true]:bg-blue-sub animated-box ${
                    expanded ? "expanded" : ""
                  }  group-hover:bg-blue-sub`}
                  style={{
                    height: `${
                      expanded
                        ? `${getValueH(
                            item.value,
                            getHighestValue(dataGraphic)
                          )}`
                        : 0
                    }rem`,
                  }}
                />
                <p className=" text-base text-black-1">{item.mes}</p>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
