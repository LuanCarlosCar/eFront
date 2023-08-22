"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface Props {
  value: number;
}
export default function PercentAnimation({ value }: Props) {
  const count = useMotionValue(0);

  const formatAsPercentage = (currentValue: number) => {
    return `${currentValue.toFixed(2)}%`;
  };

  const rounded = useTransform(count, (latest) => formatAsPercentage(latest));

  useEffect(() => {
    const controls = animate(count, value);

    return controls.stop;
  }, [value]);

  return <motion.div>{rounded}</motion.div>;
}
