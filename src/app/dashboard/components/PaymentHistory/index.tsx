import { useAtomValue } from "jotai";
import { Poppins } from "next/font/google";
import { dataGraphicAtom } from "../../atom";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

interface InfoPaymentHistoryType {
  id: string;
  date: string;
  name: string;
  location: string;
  value: string;
  isApproved: boolean;
}

export default function PaymentHistory() {
  const dataGraphic = useAtomValue(dataGraphicAtom);

  function renderInfoPaymentHistory(item: InfoPaymentHistoryType) {
    const { id, date, name, location, value, isApproved } = item;

    return (
      <div>
        <div className="grid grid-cols-6 text-xs text-[#6A6969] my-6">
          <p>{id}</p>
          <p>{date}</p>
          <p>{name}</p>

          <p>{location}</p>
          <p>{value}</p>

          <div className="flex items-center gap-2">
            <div
              data-isApproved={isApproved}
              className="right-[-0.4rem] w-[0.5rem] h-[0.5rem] bg-[#FFCE52]  data-[isApproved=true]:bg-green-base  rounded-lg"
            />

            <p> {isApproved ? "Aprovado" : "Em análise"}</p>
          </div>
        </div>

        <div className="h-[2px] w-full bg-[#F2F6FF] " />
      </div>
    );
  }
  return (
    <div
      className={`${poppins.className} bg-white h-[20.9375rem] w-full rounded-xl px-6 py-8  text-black mb-12 col-span-4`}
    >
      <h2 className=" text-black text-2xl mb-8">Histórico de compradores</h2>

      <div className="grid grid-cols-6 text-base mb-2">
        <span>ID</span>
        <span>Data</span>
        <span>Nome</span>
        <span>Localização</span>
        <span>Valor</span>
        <span>Situação</span>
      </div>

      {dataGraphic
        .find((item) => item.isSelected)
        ?.buyerHistory.map((item) => {
          return renderInfoPaymentHistory(item);
        })}
    </div>
  );
}
