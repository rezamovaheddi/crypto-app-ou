'use client'

import { useState, useRef, MouseEvent } from "react"

interface MouseTilts {
    maxRotate?: number;
    scale?: number
}

export const useTilt = <T extends HTMLElement = HTMLElement>(options: MouseTilts = {}) => {
  const { maxRotate = 12, scale = 1.02 } = options;
  const ref = useRef<T>(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
  })
  const onMouseMove = (e: MouseEvent<T>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    const rotateX = -yPct * maxRotate;
    const rotateY = xPct * maxRotate
       setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`,
    });
  };
  const onMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    });
  };
  return {
    ref,
    tiltProps: {
      ref,
      onMouseMove,
      onMouseLeave,
      style,
    },
  };
};