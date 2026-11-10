import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-[#0e1014] overflow-hidden py-16 lg:py-24">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e293b 1px, transparent 1px),
            linear-gradient(to bottom, #1e293b 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-amber-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <HeroContent />
          </div>

          <div className="lg:col-span-6">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};