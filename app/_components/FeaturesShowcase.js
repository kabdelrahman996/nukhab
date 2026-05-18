"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaSnapchatGhost,
} from "react-icons/fa";
import { HiBolt } from "react-icons/hi2";
import MockupUI from "./MockUp";

// تحضير تأثيرات الانيميشن الموحدة
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

function FloatingCard({ children, className = "" }) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`relative min-h-[220px] sm:min-h-[250px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30 ${className}`}
    >
      {/* overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function FeaturesShowcase() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-brand-dark py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* main glow */}
        <div className="absolute left-1/2 top-0 h-[300px] sm:h-[450px] w-[300px] sm:w-[450px] -translate-x-1/2 rounded-full bg-brand-gold/10 blur-[100px] sm:blur-[120px]" />

        {/* side glow */}
        <div className="absolute right-0 top-1/3 h-[200px] sm:h-[280px] w-[200px] sm:w-[280px] rounded-full bg-cyan-500/10 blur-[80px] sm:blur-[100px]" />

        {/* dotted pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020617_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* HEADING (With Animation) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto mb-12 sm:mb-16 lg:mb-20 max-w-2xl text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-black leading-[1.3] text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            ليس كباقي المواقع <br />
            <span className="bg-gradient-to-r from-brand-gold to-yellow-200 bg-clip-text text-transparent block mt-2">
              ماكينة بيع متكاملة.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-5 text-sm sm:text-base leading-relaxed text-slate-400 max-w-xl mx-auto"
          >
            كل تفصيلة في واجهتك الرقمية الجديدة مبنية لرفع قيمة علامتك التجارية
            وتحويل الزوار إلى عملاء فعليين.
          </motion.p>
        </motion.div>

        {/* SHOWCASE GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="relative mx-auto grid max-w-[1250px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[260px_1fr_260px] items-center"
        >
          {/* RIGHT SIDE (الظاهرة في الموبايل والـ Desktop) */}
          <div className="flex flex-col gap-6 lg:gap-20 order-2 lg:order-1">
            {/* CARD 1 */}
            <FloatingCard>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-500">معدل التحويل</p>
                  <h3 className="mt-1 text-2xl font-black text-white">+45%</h3>
                </div>

                <div className="rounded-xl bg-green-500/10 p-2.5 text-green-400">
                  <FaWhatsapp className="text-lg" />
                </div>
              </div>

              {/* social icons */}
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
                  <FaInstagram />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 text-white">
                  <FaTiktok />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-300">
                  <FaSnapchatGhost />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                  <FaWhatsapp />
                </div>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-green-400 to-emerald-300" />
              </div>

              <p className="mt-3 text-[12px] leading-relaxed text-slate-400">
                تصميم يوجه العميل مباشرة نحو اتخاذ قرار الشراء والتواصل.
              </p>
            </FloatingCard>

            {/* CARD 2 */}
            <FloatingCard>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-500">الأداء والسرعة</p>
                  <h3 className="mt-1 text-xl font-black text-white">0.8s</h3>
                </div>

                <div className="rounded-xl bg-brand-gold/10 p-2.5 text-brand-gold">
                  <HiBolt className="text-lg" />
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex items-center justify-between text-[10px] text-slate-500">
                    <span>Page Speed</span>
                    <span>98%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[98%] rounded-full bg-brand-gold" />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex items-center justify-between text-[10px] text-slate-500">
                    <span>SEO</span>
                    <span>100%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-full rounded-full bg-cyan-400" />
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>

          {/* CENTER PHONE */}
          <motion.div
            variants={fadeInUp}
            className="relative mx-auto flex justify-center order-1 lg:order-2 col-span-1 md:col-span-2 lg:col-span-1 my-6 lg:my-0"
          >
            {/* glow */}
            <div className="absolute inset-[-10px] sm:inset-[-20px] rounded-[50px] bg-brand-gold/15 blur-[50px] sm:blur-[70px]" />

            {/* phone */}
            <div className="relative aspect-[9/19] w-[230px] sm:w-[280px] xl:w-[340px] rounded-[42px] border-[6px] sm:border-[8px] border-brand-navy bg-[#050816] p-2.5 sm:p-3 shadow-[0_0_80px_rgba(0,0,0,0.7)]">
              {/* island */}
              <div className="absolute left-1/2 top-3 z-30 h-4 sm:h-5 w-20 sm:w-24 -translate-x-1/2 rounded-full bg-black" />

              {/* screen */}
              <div className="relative h-full w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#07111B]">
                <MockupUI />
              </div>
            </div>
          </motion.div>

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 lg:gap-20 order-3">
            {/* CARD 3 */}
            <FloatingCard>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-500">
                    الحملات الإعلانية
                  </p>
                  <h3 className="mt-1 text-xl font-black text-white">
                    ROAS x4.2
                  </h3>
                </div>
                <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-400">
                  📊
                </div>
              </div>

              {/* fake chart */}
              <div className="mt-5 flex h-16 items-end gap-2">
                <div className="h-5 w-3 rounded-full bg-blue-400/30" />
                <div className="h-8 w-3 rounded-full bg-blue-400/40" />
                <div className="h-11 w-3 rounded-full bg-blue-400/60" />
                <div className="h-16 w-3 rounded-full bg-blue-400" />
                <div className="h-12 w-3 rounded-full bg-cyan-400/80" />
                <div className="h-9 w-3 rounded-full bg-cyan-400/40" />
              </div>

              <p className="mt-4 text-[12px] leading-relaxed text-slate-400">
                تتبع كامل لكل عميل قادم من الإعلانات وتحسين النتائج باستمرار.
              </p>
            </FloatingCard>

            {/* CARD 4 */}
            <FloatingCard>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-500">توافق الجوال</p>
                  <h3 className="mt-1 text-xl font-black text-white">100%</h3>
                </div>
                <div className="rounded-xl bg-purple-500/10 p-2.5 text-purple-400">
                  📱
                </div>
              </div>

              {/* devices */}
              <div className="flex items-center justify-center gap-3 py-3">
                <div className="h-12 w-6 rounded-xl border border-white/10 bg-white/5" />
                <div className="h-16 w-8 rounded-2xl border border-brand-gold/30 bg-brand-gold/10" />
                <div className="h-10 w-5 rounded-lg border border-white/10 bg-white/5" />
              </div>

              <p className="mt-2 text-[12px] leading-relaxed text-slate-400">
                تجربة سلسة على جميع الشاشات والأجهزة الحديثة.
              </p>
            </FloatingCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// import React from "react";
// import {
//   FaWhatsapp,
//   FaInstagram,
//   FaTiktok,
//   FaSnapchatGhost,
// } from "react-icons/fa";

// import { HiBolt } from "react-icons/hi2";

// import MockupUI from "./MockUp";

// function FloatingCard({ children, className = "" }) {
//   return (
//     <div
//       className={`relative min-h-[250px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30 ${className}`}
//     >
//       {/* overlay */}
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// }

// export default function FeaturesShowcase() {
//   return (
//     <section
//       dir="rtl"
//       className="relative overflow-hidden bg-brand-dark py-20 lg:py-24"
//     >
//       {/* BACKGROUND */}
//       <div className="absolute inset-0">
//         {/* main glow */}
//         <div className="absolute left-1/2 top-0 h-[450px] w-[450px]  -translate-x-1/2 rounded-full bg-brand-gold/10  blur-[120px]" />

//         {/* side glow */}
//         <div className="absolute right-0 top-1/3 h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[100px]" />

//         {/* dotted pattern */}
//         <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />

//         {/* vignette */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020617_100%)]" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1400px]  px-4 sm:px-6 lg:px-8">
//         {/* HEADING */}
//         <div className="mx-auto mb-14 max-w-2xl text-center">
//           {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/5 px-4 py-2 text-xs text-brand-gold">
//             <span className="h-2 w-2 animate-pulse rounded-full bg-brand-gold" />
//             مواقع مصممة للبيع وليس للعرض فقط
//           </div> */}

//           <h2 className="text-3xl font-black leading-[1.5] text-white md:text-6xl">
//             ليس كباقي المواقع <br />
//             <span className="bg-gradient-to-r from-brand-gold to-yellow-200 bg-clip-text text-transparent">
//               ماكينة بيع متكاملة.
//             </span>
//           </h2>

//           <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
//             كل تفصيلة في واجهتك الرقمية الجديدة مبنية لرفع قيمة علامتك التجارية
//             وتحويل الزوار إلى عملاء فعليين.
//           </p>
//         </div>

//         {/* SHOWCASE */}
//         <div className="relative mx-auto grid max-w-[1250px] grid-cols-1 items-center gap-6 lg:grid-cols-[260px_1fr_260px]">
//           {/* RIGHT SIDE */}
//           <div className="hidden lg:flex flex-col gap-20">
//             {/* CARD 1 */}
//             <FloatingCard>
//               <div className="mb-4 flex items-center justify-between">
//                 <div>
//                   <p className="text-[11px] text-slate-500">معدل التحويل</p>

//                   <h3 className="mt-1 text-2xl font-black text-white">+45%</h3>
//                 </div>

//                 <div className="rounded-xl bg-green-500/10 p-2.5 text-green-400">
//                   <FaWhatsapp className="text-lg" />
//                 </div>
//               </div>

//               {/* social icons */}
//               <div className="flex items-center gap-2">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
//                   <FaInstagram />
//                 </div>

//                 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 text-white">
//                   <FaTiktok />
//                 </div>

//                 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-300">
//                   <FaSnapchatGhost />
//                 </div>

//                 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
//                   <FaWhatsapp />
//                 </div>
//               </div>

//               <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
//                 <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-green-400 to-emerald-300" />
//               </div>

//               <p className="mt-3 text-[12px] leading-relaxed text-slate-400">
//                 تصميم يوجه العميل مباشرة نحو اتخاذ قرار الشراء والتواصل.
//               </p>
//             </FloatingCard>

//             {/* CARD 2 */}
//             <FloatingCard>
//               <div className="mb-4 flex items-center justify-between">
//                 <div>
//                   <p className="text-[11px] text-slate-500">الأداء والسرعة</p>

//                   <h3 className="mt-1 text-xl font-black text-white">0.8s</h3>
//                 </div>

//                 <div className="rounded-xl bg-brand-gold/10 p-2.5 text-brand-gold">
//                   <HiBolt className="text-lg" />
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 <div>
//                   <div className="mb-1 flex items-center justify-between text-[10px] text-slate-500">
//                     <span>Page Speed</span>
//                     <span>98%</span>
//                   </div>

//                   <div className="h-2 overflow-hidden rounded-full bg-white/5">
//                     <div className="h-full w-[98%] rounded-full bg-brand-gold" />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-1 flex items-center justify-between text-[10px] text-slate-500">
//                     <span>SEO</span>
//                     <span>100%</span>
//                   </div>

//                   <div className="h-2 overflow-hidden rounded-full bg-white/5">
//                     <div className="h-full w-full rounded-full bg-cyan-400" />
//                   </div>
//                 </div>
//               </div>
//             </FloatingCard>
//           </div>

//           {/* CENTER PHONE */}
//           <div className="relative mx-auto flex justify-center">
//             {/* glow */}
//             <div className="absolute inset-[-20px] rounded-[50px] bg-brand-gold/20 blur-[70px]" />

//             {/* phone */}
//             <div className="relative aspect-[9/19] w-[250px] sm:w-[290px] xl:w-[340px] rounded-[42px] border-[8px] border-brand-navy bg-[#050816] p-3 shadow-[0_0_80px_rgba(0,0,0,0.7)] transition-all duration-700 ">
//               {/* island */}
//               <div className="absolute left-1/2 top-3 z-30 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

//               {/* screen */}
//               <div className="relative h-full w-full overflow-hidden rounded-[30px] border border-white/10 bg-[#07111B]">
//                 <MockupUI />
//               </div>
//             </div>
//           </div>

//           {/* LEFT SIDE */}
//           <div className="hidden lg:flex flex-col gap-20">
//             {/* CARD 1 */}
//             <FloatingCard>
//               <div className="mb-4 flex items-center justify-between">
//                 <div>
//                   <p className="text-[11px] text-slate-500">
//                     الحملات الإعلانية
//                   </p>

//                   <h3 className="mt-1 text-xl font-black text-white">
//                     ROAS x4.2
//                   </h3>
//                 </div>

//                 <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-400">
//                   📊
//                 </div>
//               </div>

//               {/* fake chart */}
//               <div className="mt-5 flex h-16 items-end gap-2">
//                 <div className="h-5 w-3 rounded-full bg-blue-400/30" />
//                 <div className="h-8 w-3 rounded-full bg-blue-400/40" />
//                 <div className="h-11 w-3 rounded-full bg-blue-400/60" />
//                 <div className="h-16 w-3 rounded-full bg-blue-400" />
//                 <div className="h-12 w-3 rounded-full bg-cyan-400/80" />
//                 <div className="h-9 w-3 rounded-full bg-cyan-400/40" />
//               </div>

//               <p className="mt-4 text-[12px] leading-relaxed text-slate-400">
//                 تتبع كامل لكل عميل قادم من الإعلانات وتحسين النتائج باستمرار.
//               </p>
//             </FloatingCard>

//             {/* CARD 2 */}
//             <FloatingCard>
//               <div className="mb-4 flex items-center justify-between">
//                 <div>
//                   <p className="text-[11px] text-slate-500">توافق الجوال</p>

//                   <h3 className="mt-1 text-xl font-black text-white">100%</h3>
//                 </div>

//                 <div className="rounded-xl bg-purple-500/10 p-2.5 text-purple-400">
//                   📱
//                 </div>
//               </div>

//               {/* devices */}
//               <div className="flex items-center justify-center gap-3 py-3">
//                 <div className="h-12 w-6 rounded-xl border border-white/10 bg-white/5" />

//                 <div className="h-16 w-8 rounded-2xl border border-brand-gold/30 bg-brand-gold/10" />

//                 <div className="h-10 w-5 rounded-lg border border-white/10 bg-white/5" />
//               </div>

//               <p className="mt-2 text-[12px] leading-relaxed text-slate-400">
//                 تجربة سلسة على جميع الشاشات والأجهزة الحديثة.
//               </p>
//             </FloatingCard>
//           </div>
//         </div>

//         {/* MOBILE CARDS */}
//         <div className="mt-10 grid gap-4 lg:hidden">
//           <FloatingCard>
//             <h3 className="text-base font-bold text-white">
//               تحويل الزوار إلى عملاء
//             </h3>

//             <p className="mt-2 text-sm leading-relaxed text-slate-400">
//               تصميم استراتيجي يرفع نسبة التحويل ويزيد فرص التواصل.
//             </p>
//           </FloatingCard>

//           <FloatingCard>
//             <h3 className="text-base font-bold text-white">سرعة تحميل فائقة</h3>

//             <p className="mt-2 text-sm leading-relaxed text-slate-400">
//               أداء عالي وتجربة استخدام سريعة بدون أي تأخير.
//             </p>
//           </FloatingCard>
//         </div>
//       </div>
//     </section>
//   );
// }
