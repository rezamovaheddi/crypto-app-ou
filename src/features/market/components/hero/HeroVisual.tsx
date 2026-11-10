import Image from 'next/image';
import Link from 'next/link';

export const HeroVisual = () =>{
    return (
<div className="relative flex items-center justify-center lg:justify-end z-10">
      <div className="absolute -bottom-10 -right-6 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />

      <Link
        href="/markets/bitcoin"
        className="group relative w-full max-w-[560px] rounded-2xl p-[1px] bg-gradient-to-b from-amber-400/60 via-amber-500/20 to-slate-800/40 shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
      >
        <div className="relative overflow-hidden rounded-2xl bg-[#0B0E14]">
          <Image
            src="/hero_cr.png"
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