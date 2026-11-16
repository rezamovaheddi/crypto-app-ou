'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useTilt } from '@/shared/hooks/useTilts';

export const HeroVisual = () => {
  const {tiltProps} = useTilt<HTMLAnchorElement>({
    maxRotate:5.5,
    scale:1.03,
  })
  return (
     <div className="relative flex items-center justify-center lg:justify-end z-10">
      <div className="absolute -bottom-10 -right-6 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />
      <Link
      href="/markets/bitcoin"
      {...tiltProps}
       className="group relative block w-full max-w-[560px] overflow-hidden rounded-2xl p-[2px] shadow-2xl transition-transform duration-100 ease-out will-change-transform"
      >
        <div
          className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,#ff0000,#ff7700,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000)] opacity-65"
        />
        <div className="relative overflow-hidden rounded-[14px] bg-[#0B0E14]">
          <Image
            src="/assets/hero_cr.png"
            alt="Bitcoin Live Market Chart Preview"
            width={1120}
            height={760}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </Link>
    </div>
  );
};