"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface Props {
  value: number;
}
export default function NumberAnimation({ value }: Props) {
  const count = useMotionValue(0);

  const formatAsCurrency = (currentValue: number) => {
    return currentValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  };

  const rounded = useTransform(count, (latest) => formatAsCurrency(latest));

  useEffect(() => {
    const controls = animate(count, value);

    return controls.stop;
  }, [value]);

  return <motion.div>{rounded}</motion.div>;
}
