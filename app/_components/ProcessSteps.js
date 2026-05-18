"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "١",
    title: "هندسة الواجهة والتجربة البيعية (UI/UX)",
    color: "text-brand-gold",
    border: "border-brand-gold/20",
    bg: "bg-brand-gold/10",
    glow: "from-brand-gold/20",
    image: "/uiux.png",
    stats: {
      label: "معدل التحويل",
      value: "+38%",
      color: "text-emerald-400",
    },
    bullets: [
      "نبدأ بتحليل دقيق لنشاطك التجاري في السوق السعودي وهيكل منافسيك.",
      "نصمم واجهة حصرية مخصصة بالكامل لتعزيز الثقة وتوجيه عين العميل نحو الاتصال الفوري.",
    ],
  },
  {
    number: "٢",
    title: "التطوير التقني والربط الإعلاني الذكي",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/10",
    glow: "from-cyan-500/20",
    image: "/dashboard.png",
    stats: {
      label: "جاهزية التتبع",
      value: "100%",
      color: "text-cyan-400",
    },
    bullets: [
      "نبرمج الواجهة بأحدث تقنيات الـ Next.js لضمان سرعة تحميل خارقة تقلل خروج الزوار.",
      "نحقن الصفحة بكافة أكواد التتبع والـ Pixels لتجهيزها تماماً لحملات إعادة الاستهداف الناجحة.",
    ],
  },
];

// إعدادات حركات الأنيميشن عند التمرير
const textVariant = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const visualVariant = (reversed) => ({
  hidden: {
    opacity: 0,
    x: reversed ? 50 : -50,
    scale: 0.95,
  },

  show: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.1,
    },
  },
});

export default function ProcessSteps() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#070816] py-16 sm:py-24 lg:py-32"
      id="process"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-brand-gold/10 blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            كيف ننتقل بعملك إلى{" "}
            <span className="text-brand-gold">مرحلة النخبة؟</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-slate-400 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            خطوات واضحة ومدروسة تفصلك عن امتلاك واجهة رقمية متكاملة تقتنص
            المبيعات.
          </p>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col gap-20 sm:gap-32 lg:gap-40">
          {steps.map((step, index) => {
            const reversed = index % 2 !== 0;

            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 xl:gap-28 items-center"
              >
                {/* Content Side */}
                <motion.div
                  initial="show"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={textVariant}
                  className={`max-w-xl text-right ${reversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  {/* Number */}
                  <div
                    className={`mb-5 sm:mb-6 flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-2xl border ${step.border} ${step.bg} ${step.color} text-lg sm:text-xl font-black backdrop-blur-xl`}
                  >
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-snug">
                    {step.title}
                  </h3>

                  {/* Bullets */}
                  <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
                    {step.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-400 text-sm sm:text-base leading-relaxed"
                      >
                        <span className={`${step.color} mt-1 text-sm shrink-0`}>
                          ✓
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Visual Side */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={visualVariant(reversed)}
                  className={`relative w-full ${reversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.glow} to-transparent blur-3xl opacity-60 pointer-events-none`}
                  />

                  {/* Card wrapper */}
                  <div className="relative rounded-[24px] sm:rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-4 sm:p-6 lg:p-7 shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-[18px] sm:rounded-[24px] border border-white/10 bg-[#0B1020]">
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          sizes="(max-w-7xl) 100vw, 50vw"
                          className={`object-cover transition-transform duration-700 hover:scale-[1.03] ${
                            index === 0
                              ? "rotate-[-4deg] sm:rotate-[-6deg] scale-90"
                              : "scale-[0.97]"
                          }`}
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-4 sm:-bottom-5 left-4 sm:left-6 rounded-xl sm:rounded-2xl border border-white/10 bg-[#0f172a]/90 backdrop-blur-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-2xl z-20">
                      <div className="text-[10px] sm:text-xs text-slate-400 mb-0.5 sm:mb-1">
                        {step.stats.label}
                      </div>

                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-xl sm:text-2xl font-black text-white">
                          {step.stats.value}
                        </span>
                        <span
                          className={`${step.stats.color} text-xs sm:text-sm`}
                        >
                          ↑
                        </span>
                      </div>
                    </div>

                    {/* Small Floating Accent */}
                    <div className="absolute top-4 sm:top-5 right-4 sm:right-5 rounded-lg sm:rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl px-2.5 sm:px-3 py-1.5 sm:py-2 z-20">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div
                          className={`h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full ${
                            index === 0 ? "bg-brand-gold" : "bg-cyan-400"
                          }`}
                        />
                        <span className="text-[10px] sm:text-xs text-white/80 font-medium">
                          تجربة احترافية
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// import Image from "next/image";
// import React from "react";

// const steps = [
//   {
//     number: "١",
//     title: "هندسة الواجهة والتجربة البيعية (UI/UX)",
//     color: "text-brand-gold",
//     border: "border-brand-gold/20",
//     bg: "bg-brand-gold/10",
//     glow: "from-brand-gold/20",
//     image: "/uiux.png",
//     stats: {
//       label: "معدل التحويل",
//       value: "+38%",
//       color: "text-emerald-400",
//     },
//     bullets: [
//       "نبدأ بتحليل دقيق لنشاطك التجاري في السوق السعودي وهيكل منافسيك.",
//       "نصمم واجهة حصرية مخصصة بالكامل لتعزيز الثقة وتوجيه عين العميل نحو الاتصال الفوري.",
//     ],
//   },

//   {
//     number: "٢",
//     title: "التطوير التقني والربط الإعلاني الذكي",
//     color: "text-cyan-400",
//     border: "border-cyan-500/20",
//     bg: "bg-cyan-500/10",
//     glow: "from-cyan-500/20",
//     image: "/dashboard.png",
//     stats: {
//       label: "جاهزية التتبع",
//       value: "100%",
//       color: "text-cyan-400",
//     },
//     bullets: [
//       "نبرمج الواجهة بأحدث تقنيات الـ Next.js لضمان سرعة تحميل خارقة تقلل خروج الزوار.",
//       "نحقن الصفحة بكافة أكواد التتبع والـ Pixels لتجهيزها تماماً لحملات إعادة الاستهداف الناجحة.",
//     ],
//   },
// ];

// export default function ProcessSteps() {
//   return (
//     <section
//       dir="rtl"
//       className="relative overflow-hidden bg-[#070816] py-24 lg:py-32"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[140px]" />
//         <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
//       </div>

//       <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mx-auto max-w-3xl text-center mb-24 lg:mb-32">
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
//             كيف ننتقل بعملك إلى{" "}
//             <span className="text-brand-gold">مرحلة النخبة؟</span>
//           </h2>

//           <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed">
//             خطوات واضحة ومدروسة تفصلك عن امتلاك واجهة رقمية متكاملة تقتنص
//             المبيعات.
//           </p>
//         </div>

//         {/* Steps */}
//         <div className="flex flex-col gap-32 lg:gap-40">
//           {steps.map((step, index) => {
//             const reversed = index % 2 !== 0;

//             return (
//               <div
//                 key={index}
//                 className={`grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-28 items-center ${
//                   reversed ? "lg:[&>*:first-child]:order-2" : ""
//                 }`}
//               >
//                 {/* Content */}
//                 <div className="max-w-xl">
//                   {/* Number */}
//                   <div
//                     className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border ${step.border} ${step.bg} ${step.color} text-xl font-black backdrop-blur-xl`}
//                   >
//                     {step.number}
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-3xl lg:text-4xl font-black text-white leading-snug">
//                     {step.title}
//                   </h3>

//                   {/* Bullets */}
//                   <ul className="mt-8 space-y-5">
//                     {step.bullets.map((bullet, i) => (
//                       <li
//                         key={i}
//                         className="flex items-start gap-3 text-slate-400 text-base leading-relaxed"
//                       >
//                         <span className={`${step.color} mt-1 text-sm`}>✓</span>

//                         <span>{bullet}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Visual */}
//                 <div className="relative">
//                   {/* Glow */}
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-br ${step.glow} to-transparent blur-3xl opacity-70`}
//                   />

//                   {/* Card */}
//                   <div className="relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-5 lg:p-7 shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
//                     {/* Image Container */}
//                     <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0B1020]">
//                       <div className="relative aspect-[4/3]">
//                         <Image
//                           src={step.image}
//                           alt={step.title}
//                           fill
//                           className={`object-cover transition-transform duration-700 hover:scale-[1.03] ${
//                             index === 0
//                               ? "rotate-[-6deg] scale-90"
//                               : "scale-[0.97]"
//                           }`}
//                         />
//                       </div>

//                       {/* Overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//                     </div>

//                     {/* Floating Stats Card */}
//                     <div className="absolute -bottom-5 left-6 rounded-2xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-2xl px-5 py-4 shadow-2xl">
//                       <div className="text-xs text-slate-400 mb-1">
//                         {step.stats.label}
//                       </div>

//                       <div className="flex items-center gap-2">
//                         <span className="text-2xl font-black text-white">
//                           {step.stats.value}
//                         </span>

//                         <span className={`${step.stats.color} text-sm`}>↑</span>
//                       </div>
//                     </div>

//                     {/* Small Floating Accent */}
//                     <div className="absolute top-5 right-5 rounded-xl border border-white/10 bg-black/30 backdrop-blur-xl px-3 py-2">
//                       <div className="flex items-center gap-2">
//                         <div
//                           className={`h-2 w-2 rounded-full ${
//                             index === 0 ? "bg-brand-gold" : "bg-cyan-400"
//                           }`}
//                         />

//                         <span className="text-xs text-white/80">
//                           تجربة احترافية
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
