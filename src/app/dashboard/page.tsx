"use client";

import Sidebar from "@/components/Sidebar";
import Header from "./components/Header";
import GraphicMonth from "./components/GraphicMonth";
import GraphicWeek from "./components/GraphicWeek";
import Card from "./components/Card";
import { useAtomValue } from "jotai";
import { dataGraphicAtom } from "./atom";
import PaymentHistory from "./components/PaymentHistory";

export default function dashboard() {
  const dataGraphic = useAtomValue(dataGraphicAtom);

  return (
    <main className=" bg-[#F3F4F8]">
      <Sidebar />
      <section className=" ml-79">
        <Header />
        <div className=" px-36 mt-9  grid grid-cols-4  gap-8">
          <GraphicMonth />
          <GraphicWeek />

          {dataGraphic
            .find((item) => item.isSelected)
            ?.dataCardList.map((item) => {
              return <Card data={item} />;
            })}

          <PaymentHistory />
        </div>
      </section>
    </main>
  );
}

//   ml-10 mt-10
