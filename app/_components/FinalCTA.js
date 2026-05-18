import React from "react";
import MockupUI from "./MockUp";

export default function FinalCTA() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#070816] py-14 lg:py-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 h-[280px] w-[280px] rounded-full bg-brand-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0C1324] via-[#111827] to-[#070816]">
          {/* subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_35%)]" />

          <div className="grid items-center gap-10 lg:grid-cols-2 px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            {/* Content */}
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] text-white tracking-tight">
                جاهز تطلق
                <span className="block bg-gradient-to-l from-brand-gold to-white bg-clip-text text-transparent">
                  موقع يجيب عملاء؟
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-400">
                صفحة احترافية سريعة ومتوافقة مع كل الأجهزة، جاهزة للإطلاق خلال
                أيام.
              </p>

              <div className="mt-8">
                <button className="group relative overflow-hidden rounded-2xl bg-brand-gold px-7 py-4 text-sm sm:text-base font-black text-brand-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,175,55,0.25)] cursor-pointer">
                  تواصل معنا الآن
                </button>
              </div>
            </div>

            {/* Mockup */}
            <div className="relative flex justify-center lg:justify-end h-[260px] overflow-hidden">
              {/* glow */}
              <div className="absolute top-1/2 left-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[90px]" />

              <div className="relative translate-y-20 rotate-[-10deg]">
                <div className="relative w-[220px] aspect-[9/19] rounded-[40px] border-[7px] border-[#0F172A] bg-black p-2 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
                  {/* notch */}
                  <div className="absolute top-3 left-1/2 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

                  {/* screen */}
                  <div className="h-full w-full overflow-hidden rounded-[30px] border border-white/5 bg-[#07111B]">
                    <MockupUI />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* grid overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>
    </section>
  );
}
