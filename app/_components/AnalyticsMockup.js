"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaChartLine, FaGoogle, FaWhatsapp } from "react-icons/fa";

// إعدادات الأنيميشن الفاخرة للسكشن والكروت
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUp = {
  hidden: {
    scale: 0.96,
    opacity: 0,
    y: 50,
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function PremiumCard({
  children,
  glow = "from-brand-gold/10",
  className = "",
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_10px_50px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/20 ${className}`}
    >
      {/* glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${glow} via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}

function AnalyticsMockup() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0B1120] p-4 sm:p-5 shadow-[0_20px_80px_rgba(0,0,0,0.5)] w-full">
      {/* glow */}
      <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-gold/10 blur-[90px]" />

      <div className="relative z-10">
        {/* top */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500">Revenue Analytics</p>
            <h4 className="mt-2 text-2xl sm:text-3xl font-black text-white">
              +47%
            </h4>
          </div>

          <div className="rounded-2xl bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-400">
            LIVE
          </div>
        </div>

        {/* stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-3 sm:p-4">
            <p className="text-[11px] sm:text-xs text-slate-500">
              WhatsApp Leads
            </p>
            <h5 className="mt-2 text-xl sm:text-2xl font-black text-white">
              1,420
            </h5>
            <span className="text-xs text-emerald-400">+24%</span>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-3 sm:p-4">
            <p className="text-[11px] sm:text-xs text-slate-500">
              Conversion Rate
            </p>
            <h5 className="mt-2 text-xl sm:text-2xl font-black text-white">
              18%
            </h5>
            <span className="text-xs text-cyan-400">Optimized</span>
          </div>
        </div>

        {/* chart */}
        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
            <span>Campaign Performance</span>
            <span className="text-white text-[11px] sm:text-xs">ROAS 4.2x</span>
          </div>

          <div className="flex h-24 sm:h-28 items-end gap-1.5 sm:gap-2">
            <div className="h-10 w-full rounded-t-full bg-brand-gold/20" />
            <div className="h-16 w-full rounded-t-full bg-brand-gold/40" />
            <div className="h-20 w-full rounded-t-full bg-brand-gold/60" />
            <div className="h-14 w-full rounded-t-full bg-cyan-400/40" />
            <div className="h-24 sm:h-28 w-full rounded-t-full bg-brand-gold" />
            <div className="h-20 w-full rounded-t-full bg-cyan-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PremiumBentoSection() {
  return (
    <section
      id="features"
      dir="rtl"
      className="relative overflow-hidden bg-[#020617] py-16 sm:py-24"
    >
      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] -translate-x-1/2 rounded-full bg-brand-gold/10 blur-[100px] sm:blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[250px] sm:h-[350px] w-[250px] sm:w-[350px] rounded-full bg-violet-500/10 blur-[100px] sm:blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-[200px] sm:h-[300px] w-[200px] sm:w-[300px] rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          initial="show"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto mb-14 sm:mb-20 max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.3] text-white"
          >
            نصنع مواقع تبدو <br />
            <span className="bg-gradient-to-l from-brand-gold to-yellow-100 bg-clip-text text-transparent block mt-2">
              فاخرة قبل أن تُباع.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-400"
          >
            واجهات احترافية وتجربة استخدام مدروسة تساعدك على بناء الثقة، رفع
            قيمة البراند، وتحويل الزوار إلى عملاء فعليين.
          </motion.p>
        </motion.div>

        {/* grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 lg:gap-10 md:grid-cols-2"
        >
          {/* card 1 */}
          <PremiumCard
            glow="from-violet-500/20"
            className="min-h-[400px] sm:min-h-[420px]"
          >
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
                ✨ Custom UI/UX
              </div>

              <h3 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                تصميم يرفع قيمة <br />
                البراند بصريًا.
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400 max-w-md">
                واجهات مخصصة بالكامل تعكس الفخامة والثقة وتزيد معدل التحويل بشكل
                فعلي.
              </p>
            </div>

            {/* visual */}
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120] p-4 sm:p-5">
              {/* browser top */}
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[1fr_120px] gap-4">
                <div className="space-y-3">
                  <div className="h-4 w-32 rounded-full bg-white/10" />
                  <div className="h-3 w-full rounded-full bg-white/5" />
                  <div className="h-3 w-4/5 rounded-full bg-white/5" />

                  <div className="mt-4 flex gap-2.5">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-violet-500/20" />
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-cyan-400/20" />
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-pink-400/20" />
                  </div>
                </div>

                <div className="hidden sm:block rounded-3xl bg-gradient-to-b from-violet-500/40 to-transparent" />
              </div>
            </div>
          </PremiumCard>

          {/* card 2 */}
          <PremiumCard
            glow="from-cyan-500/20"
            className="min-h-[400px] sm:min-h-[420px]"
          >
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                <FaGoogle />
                Google Optimized
              </div>

              <h3 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                بنية تقنية جاهزة <br />
                لتصدر نتائج البحث.
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400 max-w-md">
                كود نظيف وسريع ومهيأ بالكامل لمحركات البحث لزيادة الظهور العضوي
                وتقليل تكلفة الإعلانات.
              </p>
            </div>

            {/* visual */}
            <div className="mt-8 rounded-3xl border border-cyan-500/10 bg-[#07111B] p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="text-xs text-slate-500">
                    Google Ranking System
                  </span>
                </div>
                <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-[10px] text-cyan-300">
                  TOP #1
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="mb-1.5 flex items-center justify-between text-xs text-slate-500">
                    <span>Core Web Vitals</span>
                    <span className="text-cyan-400">99%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[99%] rounded-full bg-cyan-400" />
                  </div>
                </div>

                <div>
                  <div className="mb-1.5 flex items-center justify-between text-xs text-slate-500">
                    <span>SEO Structure</span>
                    <span className="text-brand-gold">100%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-full rounded-full bg-brand-gold" />
                  </div>
                </div>

                <div>
                  <div className="mb-1.5 flex items-center justify-between text-xs text-slate-500">
                    <span>Page Performance</span>
                    <span className="text-emerald-400">98%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[98%] rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </PremiumCard>

          {/* big card */}
          <PremiumCard glow="from-brand-gold/20" className="md:col-span-2">
            <div className="grid grid-cols-1 items-center gap-8 lg:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              {/* text */}
              <div className="text-right flex flex-col items-start">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/10 px-3 py-1 text-xs text-brand-gold">
                  <FaChartLine />
                  Smart Analytics
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-white">
                  تتبع ما يصنع <br />
                  لك الأرباح الحقيقية.
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-relaxed sm:leading-loose text-slate-400 max-w-2xl">
                  نربط موقعك بأدوات التحليل والتتبع المتقدمة لمعرفة سلوك
                  العملاء، مصادر الزيارات، وأكثر الحملات الإعلانية تحقيقًا
                  للعائد.
                </p>

                {/* stats */}
                <div className="mt-6 flex flex-wrap gap-4 w-full sm:w-auto">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 sm:px-5 py-3 sm:py-4 flex-1 sm:flex-none text-center sm:text-right">
                    <p className="text-xs text-slate-500">معدل التحويل</p>
                    <h4 className="mt-1 text-xl sm:text-2xl font-black text-white">
                      +32%
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 sm:px-5 py-3 sm:py-4 flex-1 sm:flex-none text-center sm:text-right">
                    <p className="text-xs text-slate-500">WhatsApp Leads</p>
                    <h4 className="mt-1 flex items-center justify-center sm:justify-start gap-2 text-xl sm:text-2xl font-black text-white">
                      <FaWhatsapp className="text-green-400" />
                      1.4K
                    </h4>
                  </div>
                </div>

                <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-brand-gold px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.03] cursor-pointer w-full sm:w-auto justify-center">
                  اكتشف قوة التحليلات
                  <FaArrowLeft className="text-xs" />
                </button>
              </div>

              {/* mockup */}
              <div className="mx-auto w-full max-w-[420px] mt-6 lg:mt-0">
                <AnalyticsMockup />
              </div>
            </div>
          </PremiumCard>
        </motion.div>
      </div>
    </section>
  );
}

// import React from "react";
// import { FaArrowLeft, FaChartLine, FaGoogle, FaWhatsapp } from "react-icons/fa";

// function PremiumCard({
//   children,
//   glow = "from-brand-gold/10",
//   className = "",
// }) {
//   return (
//     <div
//       //   className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl p-8 shadow-[0_10px_50px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30 hover:shadow-[0_0_50px_rgba(212,175,55,0.12)] ${className}`}
//       className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl p-8 shadow-[0_10px_50px_rgba(0,0,0,0.45)] transition-all duration-500  ${className}`}
//     >
//       {/* glow */}
//       <div
//         // className={`absolute inset-0 bg-gradient-to-br ${glow} via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
//         className={`absolute inset-0 bg-gradient-to-br ${glow} via-transparent to-transparent opacity-0 transition-opacity duration-500 `}
//       />

//       <div className="relative z-10 h-full">{children}</div>
//     </div>
//   );
// }

// function AnalyticsMockup() {
//   return (
//     <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0B1120] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
//       {/* glow */}
//       <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-gold/10 blur-[90px]" />

//       <div className="relative z-10">
//         {/* top */}
//         <div className="mb-6 flex items-center justify-between">
//           <div>
//             <p className="text-xs text-slate-500">Revenue Analytics</p>

//             <h4 className="mt-2 text-3xl font-black text-white">+47%</h4>
//           </div>

//           <div className="rounded-2xl bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-400">
//             LIVE
//           </div>
//         </div>

//         {/* stats */}
//         <div className="grid grid-cols-2 gap-3">
//           <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
//             <p className="text-xs text-slate-500">WhatsApp Leads</p>

//             <h5 className="mt-2 text-2xl font-black text-white">1,420</h5>

//             <span className="text-xs text-emerald-400">+24%</span>
//           </div>

//           <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
//             <p className="text-xs text-slate-500">Conversion Rate</p>

//             <h5 className="mt-2 text-2xl font-black text-white">18%</h5>

//             <span className="text-xs text-cyan-400">Optimized</span>
//           </div>
//         </div>

//         {/* chart */}
//         <div className="mt-6">
//           <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
//             <span>Campaign Performance</span>
//             <span className="text-white">ROAS 4.2x</span>
//           </div>

//           <div className="flex h-28 items-end gap-2">
//             <div className="h-10 w-full rounded-t-full bg-brand-gold/20" />
//             <div className="h-16 w-full rounded-t-full bg-brand-gold/40" />
//             <div className="h-20 w-full rounded-t-full bg-brand-gold/60" />
//             <div className="h-14 w-full rounded-t-full bg-cyan-400/40" />
//             <div className="h-28 w-full rounded-t-full bg-brand-gold" />
//             <div className="h-20 w-full rounded-t-full bg-cyan-400" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function PremiumBentoSection() {
//   return (
//     <section dir="rtl" className="relative overflow-hidden bg-[#020617] py-24">
//       {/* background */}
//       <div className="absolute inset-0">
//         <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-gold/10 blur-[140px]" />

//         <div className="absolute right-0 top-1/3 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[120px]" />

//         <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

//         <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
//         {/* heading */}
//         <div className="mx-auto mb-20 max-w-3xl text-center">
//           {/* <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/10 px-4 py-2 text-xs text-brand-gold">
//             ✨ تجربة رقمية بمستوى عالمي
//           </div> */}

//           <h2 className="text-4xl font-black leading-[1.5] text-white md:text-6xl">
//             نصنع مواقع تبدو <br />
//             <span className="bg-gradient-to-l from-brand-gold to-yellow-100 bg-clip-text text-transparent">
//               فاخرة قبل أن تُباع.
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
//             واجهات احترافية وتجربة استخدام مدروسة تساعدك على بناء الثقة، رفع
//             قيمة البراند، وتحويل الزوار إلى عملاء فعليين.
//           </p>
//         </div>

//         {/* grid */}
//         <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
//           {/* card 1 */}
//           <PremiumCard glow="from-violet-500/20" className="min-h-[420px]">
//             <div className="flex h-full flex-col justify-between">
//               <div>
//                 <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
//                   ✨ Custom UI/UX
//                 </div>

//                 <h3 className="text-3xl font-black leading-tight text-white">
//                   تصميم يرفع قيمة <br />
//                   البراند بصريًا.
//                 </h3>

//                 <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
//                   واجهات مخصصة بالكامل تعكس الفخامة والثقة وتزيد معدل التحويل
//                   بشكل فعلي.
//                 </p>
//               </div>

//               {/* visual */}
//               <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120] p-5">
//                 {/* browser top */}
//                 <div className="mb-5 flex items-center gap-2">
//                   <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
//                   <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
//                   <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
//                 </div>

//                 <div className="grid grid-cols-[1fr_120px] gap-4">
//                   <div className="space-y-3">
//                     <div className="h-4 w-32 rounded-full bg-white/10" />
//                     <div className="h-3 w-full rounded-full bg-white/5" />
//                     <div className="h-3 w-4/5 rounded-full bg-white/5" />

//                     <div className="mt-6 flex gap-3">
//                       <div className="h-12 w-12 rounded-2xl bg-violet-500/20" />
//                       <div className="h-12 w-12 rounded-2xl bg-cyan-400/20" />
//                       <div className="h-12 w-12 rounded-2xl bg-pink-400/20" />
//                     </div>
//                   </div>

//                   <div className="rounded-3xl bg-gradient-to-b from-violet-500/40 to-transparent" />
//                 </div>
//               </div>
//             </div>
//           </PremiumCard>

//           {/* card 2 */}
//           <PremiumCard glow="from-cyan-500/20" className="min-h-[420px]">
//             <div className="flex h-full flex-col justify-between">
//               <div>
//                 <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
//                   <FaGoogle />
//                   Google Optimized
//                 </div>

//                 <h3 className="text-3xl font-black leading-tight text-white">
//                   بنية تقنية جاهزة <br />
//                   لتصدر نتائج البحث.
//                 </h3>

//                 <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
//                   كود نظيف وسريع ومهيأ بالكامل لمحركات البحث لزيادة الظهور
//                   العضوي وتقليل تكلفة الإعلانات.
//                 </p>
//               </div>

//               {/* visual */}
//               <div className="mt-10 rounded-3xl border border-cyan-500/10 bg-[#07111B] p-5">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="h-3 w-3 rounded-full bg-emerald-400" />

//                     <span className="text-xs text-slate-500">
//                       Google Ranking System
//                     </span>
//                   </div>

//                   <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-[10px] text-cyan-300">
//                     TOP #1
//                   </span>
//                 </div>

//                 <div className="mt-7 space-y-5">
//                   <div>
//                     <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
//                       <span>Core Web Vitals</span>
//                       <span className="text-cyan-400">99%</span>
//                     </div>

//                     <div className="h-2 overflow-hidden rounded-full bg-white/5">
//                       <div className="h-full w-[99%] rounded-full bg-cyan-400" />
//                     </div>
//                   </div>

//                   <div>
//                     <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
//                       <span>SEO Structure</span>
//                       <span className="text-brand-gold">100%</span>
//                     </div>

//                     <div className="h-2 overflow-hidden rounded-full bg-white/5">
//                       <div className="h-full w-full rounded-full bg-brand-gold" />
//                     </div>
//                   </div>

//                   <div>
//                     <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
//                       <span>Page Performance</span>
//                       <span className="text-emerald-400">98%</span>
//                     </div>

//                     <div className="h-2 overflow-hidden rounded-full bg-white/5">
//                       <div className="h-full w-[98%] rounded-full bg-emerald-400" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </PremiumCard>

//           {/* big card */}
//           <PremiumCard glow="from-brand-gold/20" className="md:col-span-2">
//             <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
//               {/* text */}
//               <div>
//                 <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/10 px-3 py-1 text-xs text-brand-gold">
//                   <FaChartLine />
//                   Smart Analytics
//                 </div>

//                 <h3 className="text-4xl font-black leading-tight text-white">
//                   تتبع ما يصنع <br />
//                   لك الأرباح الحقيقية.
//                 </h3>

//                 <p className="mt-6 max-w-2xl text-base leading-loose text-slate-400">
//                   نربط موقعك بأدوات التحليل والتتبع المتقدمة لمعرفة سلوك
//                   العملاء، مصادر الزيارات، وأكثر الحملات الإعلانية تحقيقًا
//                   للعائد.
//                 </p>

//                 {/* stats */}
//                 <div className="mt-8 flex flex-wrap gap-4">
//                   <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
//                     <p className="text-xs text-slate-500">معدل التحويل</p>

//                     <h4 className="mt-1 text-2xl font-black text-white">
//                       +32%
//                     </h4>
//                   </div>

//                   <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
//                     <p className="text-xs text-slate-500">WhatsApp Leads</p>

//                     <h4 className="mt-1 flex items-center gap-2 text-2xl font-black text-white">
//                       <FaWhatsapp className="text-green-400" />
//                       1.4K
//                     </h4>
//                   </div>
//                 </div>

//                 <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-brand-gold px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.03]">
//                   اكتشف قوة التحليلات
//                   <FaArrowLeft />
//                 </button>
//               </div>

//               {/* mockup */}
//               <div className="mx-auto w-full max-w-[420px]">
//                 <AnalyticsMockup />
//               </div>
//             </div>
//           </PremiumCard>
//         </div>
//       </div>
//     </section>
//   );
// }
