import { atom } from "jotai";

const dataGraphic = [
  {
    value: 500,
    mes: "Fev",
    history: [
      { date: "Ontem", value: -540.32 },
      { date: "Quinta-Feira", value: -273.9 },
      { date: "Segunda-Feira", value: -1456.2 },
    ],

    dataCardList: [
      { title: "Total de vendas", value: 700, percent: 19 },
      { title: "Total líquido", value: 650, percent: 8 },
      { title: "Compras canceladas", value: 9875.4, percent: -97 },
      { title: "Reembolsos", value: 4560, percent: -3 },
    ],
    buyerHistory: [
      {
        id: "#12345",
        date: "02/08/2023",
        name: "Roberto Santos",
        location: "Rio Grande do Sul",
        value: "R$ 15,00",
        isApproved: true,
      },
      {
        id: "#54892",
        date: "02/01/2022",
        name: "Igor Leite",
        location: "Rio Grande do Sul",
        value: "R$ 63,00",
        isApproved: false,
      },
    ],
    isSelected: false,
  },
  {
    value: 5000,
    mes: "Mar",
    history: [
      { date: "Ontem", value: -30.32 },
      { date: "Quinta-Feira", value: 700.9 },
      { date: "Segunda-Feira", value: -1000.2 },
    ],
    dataCardList: [
      { title: "Total de vendas", value: 8000.8, percent: 70 },
      { title: "Total líquido", value: 365.7, percent: 12 },
      { title: "Compras canceladas", value: 329.4, percent: -5 },
      { title: "Reembolsos", value: 300, percent: -4 },
    ],
    buyerHistory: [
      {
        id: "#12345",
        date: "02/08/2023",
        name: "Roberto Santos",
        location: "Rio Grande do Sul",
        value: "R$ 15,00",
        isApproved: true,
      },
      {
        id: "#54892",
        date: "02/01/2022",
        name: "Igor Leite",
        location: "Rio Grande do Sul",
        value: "R$ 63,00",
        isApproved: false,
      },
    ],
    isSelected: false,
  },
  {
    value: 1500,
    mes: "Abr",
    history: [
      { date: "Ontem", value: -400.7 },
      { date: "Quinta-Feira", value: 300.9 },
      { date: "Segunda-Feira", value: -700.2 },
    ],
    dataCardList: [
      { title: "Total de vendas", value: 7580, percent: 63 },
      { title: "Total líquido", value: 6430.2, percent: 59 },
      { title: "Compras canceladas", value: 5000, percent: -95 },
      { title: "Reembolsos", value: 423, percent: -26 },
    ],
    buyerHistory: [
      {
        id: "#12345",
        date: "02/08/2023",
        name: "Roberto Santos",
        location: "Rio Grande do Sul",
        value: "R$ 15,00",
        isApproved: true,
      },
      {
        id: "#54892",
        date: "02/01/2022",
        name: "Igor Leite",
        location: "Rio Grande do Sul",
        value: "R$ 63,00",
        isApproved: false,
      },
    ],
    isSelected: false,
  },
  {
    value: 2000,
    mes: "Mai",
    history: [
      { date: "Ontem", value: 1000.0 },
      { date: "Quinta-Feira", value: 2500.3 },
      { date: "Segunda-Feira", value: -9000.2 },
    ],
    dataCardList: [
      { title: "Total de vendas", value: 864, percent: 22 },
      { title: "Total líquido", value: 512, percent: 16 },
      { title: "Compras canceladas", value: 10, percent: -1 },
      { title: "Reembolsos", value: 555, percent: -9 },
    ],
    buyerHistory: [
      {
        id: "#12345",
        date: "02/08/2023",
        name: "Roberto Santos",
        location: "Rio Grande do Sul",
        value: "R$ 15,00",
        isApproved: true,
      },
      {
        id: "#54892",
        date: "02/01/2022",
        name: "Igor Leite",
        location: "Rio Grande do Sul",
        value: "R$ 63,00",
        isApproved: false,
      },
    ],
    isSelected: false,
  },
  {
    value: 700,
    mes: "Jun",
    history: [
      { date: "Ontem", value: 10.0 },
      { date: "Quinta-Feira", value: 20.3 },
      { date: "Segunda-Feira", value: -90.2 },
    ],

    dataCardList: [
      { title: "Total de vendas", value: 3000, percent: 15 },
      { title: "Total líquido", value: 1500, percent: 9 },
      { title: "Compras canceladas", value: 400, percent: -32 },
      { title: "Reembolsos", value: 700, percent: -14 },
    ],
    buyerHistory: [
      {
        id: "#12345",
        date: "02/08/2023",
        name: "Roberto Santos",
        location: "Rio Grande do Sul",
        value: "R$ 15,00",
        isApproved: true,
      },
      {
        id: "#54892",
        date: "02/01/2022",
        name: "Igor Leite",
        location: "Rio Grande do Sul",
        value: "R$ 63,00",
        isApproved: false,
      },
    ],
    isSelected: false,
  },
  {
    value: 600,
    mes: "Jul",
    history: [
      { date: "Ontem", value: 500.0 },
      { date: "Quinta-Feira", value: -300.3 },
      { date: "Segunda-Feira", value: 7000.2 },
    ],
    dataCardList: [
      { title: "Total de vendas", value: 20, percent: 3 },
      { title: "Total líquido", value: 7, percent: 1 },
      { title: "Compras canceladas", value: 5000, percent: -50 },
      { title: "Reembolsos", value: 450, percent: -20 },
    ],
    buyerHistory: [
      {
        id: "#12345",
        date: "02/08/2023",
        name: "Roberto Santos",
        location: "Rio Grande do Sul",
        value: "R$ 15,00",
        isApproved: true,
      },
      {
        id: "#54892",
        date: "02/01/2022",
        name: "Igor Leite",
        location: "Rio Grande do Sul",
        value: "R$ 63,00",
        isApproved: false,
      },
    ],
    isSelected: false,
  },
  {
    value: 1000,
    mes: "Ago",
    history: [
      { date: "Ontem", value: 2000 },
      { date: "Quinta-Feira", value: 250.3 },
      { date: "Segunda-Feira", value: 900.2 },
    ],
    dataCardList: [
      { title: "Total de vendas", value: 3568, percent: 10 },
      { title: "Total líquido", value: 1200, percent: 16 },
      { title: "Compras canceladas", value: 600, percent: -5 },
      { title: "Reembolsos", value: 345, percent: -2 },
    ],

    buyerHistory: [
      {
        id: "#12345",
        date: "02/08/2023",
        name: "Roberto Santos",
        location: "Rio Grande do Sul",
        value: "R$ 15,00",
        isApproved: true,
      },
      {
        id: "#54892",
        date: "02/01/2022",
        name: "Igor Leite",
        location: "Rio Grande do Sul",
        value: "R$ 63,00",
        isApproved: false,
      },
    ],
    isSelected: true,
  },
];

export const dataGraphicAtom = atom(dataGraphic);
