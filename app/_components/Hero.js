"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const slideInPhone = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 120,
    rotate: 5,
    scale: 0.85,
    filter: "blur(20px)",
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#040816] text-white flex items-center"
    >
      {/* =========================================
       BACKGROUND
      ========================================== */}

      <div className="absolute inset-0 bg-[#040816]" />

      {/* GOLD GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[#D4AF37]/10 blur-[80px] md:blur-[120px]"
      />

      {/* BLUE GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-blue-500/10 blur-[90px] md:blur-[140px]"
      />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px md:80px 80px",
        }}
      />

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

      {/* =========================================
       CONTENT
      ========================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24 W-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* =========================================
           TEXT SIDE
          ========================================== */}

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="text-center lg:text-right flex flex-col items-center lg:items-start"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl mb-6 md:mb-8 border border-white/5 bg-white/5"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs sm:text-sm text-slate-300">
                نصمم تجارب رقمية تصنع الهيمنة
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.15] lg:leading-[1.05] tracking-tight max-w-xl lg:max-w-none"
            >
              واجهات ترفع
              <motion.span
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block text-transparent bg-clip-text bg-gradient-to-l from-[#FFE082] via-[#D4AF37] to-[#B8860B] pb-2 pt-1"
              >
                قيمة علامتك
              </motion.span>
              <span className="text-slate-100">… ومبيعاتك أيضًا.</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={fadeUp}
              className="mt-6 md:mt-8 text-base md:text-xl text-slate-400 leading-relaxed max-w-xl lg:max-w-2xl"
            >
              نصمم صفحات هبوط وتجارب رقمية فاخرة تجمع بين الإقناع، السرعة،
              والانبهار البصري لتحويل جمهورك إلى عملاء يدفعون بثقة.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 justify-center lg:justify-start w-full sm:w-auto"
            >
              {/* Main CTA */}
              <motion.button
                whileTap={{
                  scale: 0.97,
                }}
                className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-black font-extrabold text-base shadow-[0_0_40px_rgba(212,175,55,0.35)] transition-all duration-300 cursor-pointer w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Link href="#cta">ابدأ مشروعك</Link>
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>

                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2.5,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 text-white cursor-pointer w-full sm:w-auto"
              >
                شاهد الأعمال
              </motion.button>
            </motion.div>

            {/* FEATURES */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 sm:gap-6 mt-8 md:mt-10 justify-center lg:justify-start text-slate-400 text-sm md:text-base"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-center gap-2 bg-white/[0.02] lg:bg-transparent px-3 py-1.5 rounded-xl lg:p-0 border border-white/5 lg:border-none"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                سرعة فائقة
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-center gap-2 bg-white/[0.02] lg:bg-transparent px-3 py-1.5 rounded-xl lg:p-0 border border-white/5 lg:border-none"
              >
                <BarChart3 className="w-5 h-5 text-blue-400" />
                رفع التحويلات
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-center gap-2 bg-white/[0.02] lg:bg-transparent px-3 py-1.5 rounded-xl lg:p-0 border border-white/5 lg:border-none"
              >
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                تجربة فاخرة
              </motion.div>
            </motion.div>
          </motion.div>

          {/* =========================================
           VISUAL SIDE
          ========================================== */}

          <div className="relative flex items-center justify-center mt-12 lg:mt-0 w-full min-h-[500px] md:min-h-[650px]">
            {/* Main Glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
              }}
              className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[#D4AF37]/10 blur-[100px]"
            />

            {/* Floating Card Left */}
            <motion.div
              initial={{
                opacity: 0,
                x: -80,
                rotate: -8,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: 0,
                y: [0, -12, 0],
              }}
              transition={{
                duration: 1.4,
                delay: 0.4,
                ease: "easeInOut",
              }}
              className="hidden md:block absolute left-[-20px] lg:left-0 top-10 w-[160px] lg:w-[180px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 shadow-2xl z-20"
            >
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">ROAS</span>
                <span className="text-emerald-400 text-sm">+4.2x</span>
              </div>

              <div className="mt-5 flex items-end gap-2 h-20 lg:h-24">
                <div className="w-3 h-10 rounded-full bg-blue-400" />
                <div className="w-3 h-16 rounded-full bg-cyan-400" />
                <div className="w-3 h-20 rounded-full bg-[#D4AF37]" />
                <div className="w-3 h-12 rounded-full bg-blue-300" />
                <div className="w-3 h-24 rounded-full bg-cyan-300" />
              </div>

              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                ارتفاع ملحوظ في معدل العائد الإعلاني
              </p>
            </motion.div>

            {/* Floating Card Right */}
            <motion.div
              initial={{
                opacity: 0,
                x: 80,
                rotate: 8,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: 0,
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 0.6,
                ease: "easeInOut",
              }}
              className="hidden md:block absolute right-[-20px] lg:right-0 bottom-10 w-[160px] lg:w-[180px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 shadow-2xl z-20"
            >
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">Conversion</span>
                <span className="text-[#D4AF37] text-sm">+182%</span>
              </div>

              <div className="mt-6">
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "82%" }}
                    transition={{
                      duration: 1.8,
                      delay: 1,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-300"
                  />
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                تحسن واضح في معدلات التحويل والشراء
              </p>
            </motion.div>

            {/* PHONE MOCKUP */}
            <motion.div
              variants={slideInPhone}
              initial="hidden"
              animate="show"
              className="relative z-10 scale-90 sm:scale-100"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-[3rem] bg-blue-500/20 blur-3xl scale-110" />

              {/* FLOATING PHONE */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, -1, 1, 0],
                }}
                transition={{
                  duration: 7,
                  ease: "easeInOut",
                }}
                className="relative w-[280px] sm:w-[300px] h-[580px] sm:h-[620px] rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden"
              >
                {/* TOP GLOW */}
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-cyan-400/10 to-transparent" />

                {/* INNER BORDER */}
                <div className="absolute inset-[1px] rounded-[3rem] border border-white/5 pointer-events-none" />

                {/* NOTCH */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-7 rounded-full bg-black/70 border border-white/10" />

                {/* SCREEN */}
                <div className="relative h-full p-6 pt-20 flex flex-col">
                  {/* HEADER */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-slate-400 text-sm">Revenue</p>
                      <h3 className="text-2xl sm:text-3xl font-black mt-1">
                        $128K
                      </h3>
                    </div>

                    <div className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-400 text-sm">
                      +24%
                    </div>
                  </motion.div>

                  {/* CHART */}
                  <div className="mt-10 h-44 sm:h-48 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-5 flex items-end gap-3 justify-center">
                    {[20, 28, 16, 36, 44].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h * 4}px` }}
                        transition={{
                          duration: 1,
                          delay: 1 + i * 0.12,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`w-4 sm:w-5 rounded-full ${
                          i % 2 === 0 ? "bg-[#D4AF37]" : "bg-cyan-400"
                        }`}
                      />
                    ))}
                  </div>

                  {/* STATS */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 }}
                      className="rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-4"
                    >
                      <p className="text-slate-400 text-xs sm:text-sm">
                        Engagement
                      </p>
                      <h4 className="text-xl sm:text-2xl font-bold mt-2">
                        94%
                      </h4>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 }}
                      className="rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-4"
                    >
                      <p className="text-slate-400 text-xs sm:text-sm">CTR</p>
                      <h4 className="text-xl sm:text-2xl font-bold mt-2">
                        12.8%
                      </h4>
                    </motion.div>
                  </div>

                  {/* BOTTOM BARS */}
                  <div className="mt-auto space-y-3 sm:space-y-4">
                    <div className="h-2.5 sm:h-3 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "82%" }}
                        transition={{
                          duration: 1.8,
                          delay: 1.7,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      />
                    </div>

                    <div className="h-2.5 sm:h-3 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "65%" }}
                        transition={{
                          duration: 1.8,
                          delay: 1.9,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-300"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================
       BOTTOM FADE
      ========================================== */}

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#040816] to-transparent pointer-events-none" />
    </section>
  );
}

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight, BarChart3, Sparkles, ShieldCheck } from "lucide-react";

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//     filter: "blur(10px)",
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// const slideInPhone = {
//   hidden: {
//     opacity: 0,
//     x: 120,
//     y: 120,
//     rotate: 10,
//     scale: 0.85,
//     filter: "blur(20px)",
//   },
//   show: {
//     opacity: 1,
//     x: 0,
//     y: 0,
//     rotate: 0,
//     scale: 1,
//     filter: "blur(0px)",
//     transition: {
//       duration: 1.6,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// export default function Hero() {
//   return (
//     <section
//       dir="rtl"
//       className="relative min-h-screen overflow-hidden bg-[#040816] text-white"
//     >
//       {/* =========================================
//        BACKGROUND
//       ========================================== */}

//       <div className="absolute inset-0 bg-[#040816]" />

//       {/* GOLD GLOW */}
//       <motion.div
//         animate={{
//           scale: [1, 1.08, 1],
//           opacity: [0.12, 0.2, 0.12],
//         }}
//         transition={{
//           duration: 8,
//           //   repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px]"
//       />

//       {/* BLUE GLOW */}
//       <motion.div
//         animate={{
//           scale: [1, 1.1, 1],
//           opacity: [0.1, 0.18, 0.1],
//         }}
//         transition={{
//           duration: 10,
//           //   repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[140px]"
//       />

//       {/* GRID */}
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
//           `,
//           backgroundSize: "80px 80px",
//         }}
//       />

//       {/* NOISE */}
//       <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

//       {/* =========================================
//        CONTENT
//       ========================================== */}

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           {/* =========================================
//            TEXT SIDE
//           ========================================== */}

//           <motion.div
//             initial="hidden"
//             animate="show"
//             variants={{
//               hidden: {},
//               show: {
//                 transition: {
//                   staggerChildren: 0.15,
//                 },
//               },
//             }}
//             className="text-center lg:text-right"
//           >
//             {/* Badge */}
//             <motion.div
//               variants={fadeUp}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full   backdrop-blur-xl mb-8"
//             >
//               <Sparkles className="w-4 h-4 text-[#D4AF37]" />

//               <span className="text-sm text-slate-300">
//                 نصمم تجارب رقمية تصنع الهيمنة
//               </span>
//             </motion.div>

//             {/* Headline */}
//             <motion.h1
//               variants={fadeUp}
//               className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight"
//             >
//               واجهات ترفع
//               <motion.span
//                 initial={{
//                   opacity: 0,
//                   y: 60,
//                   filter: "blur(10px)",
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   filter: "blur(0px)",
//                 }}
//                 transition={{
//                   delay: 0.5,
//                   duration: 1,
//                   ease: [0.16, 1, 0.3, 1],
//                 }}
//                 className="block text-transparent bg-clip-text bg-gradient-to-l from-[#FFE082] via-[#D4AF37] to-[#B8860B] pb-3"
//               >
//                 قيمة علامتك
//               </motion.span>
//               <span className="text-slate-100">… ومبيعاتك أيضًا.</span>
//             </motion.h1>

//             {/* Paragraph */}
//             <motion.p
//               variants={fadeUp}
//               className="mt-8 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
//             >
//               نصمم صفحات هبوط وتجارب رقمية فاخرة تجمع بين الإقناع، السرعة،
//               والانبهار البصري لتحويل جمهورك إلى عملاء يدفعون بثقة.
//             </motion.p>

//             {/* Buttons */}
//             <motion.div
//               variants={fadeUp}
//               className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start"
//             >
//               {/* Main CTA */}
//               <motion.button
//                 whileHover={
//                   {
//                     //   scale: 1.04,
//                     //   y: -4,
//                   }
//                 }
//                 whileTap={{
//                   scale: 0.97,
//                 }}
//                 className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-black font-extrabold text-base shadow-[0_0_40px_rgba(212,175,55,0.35)] transition-all duration-300 cursor-pointer"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   ابدأ مشروعك
//                   <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
//                 </span>

//                 <motion.div
//                   animate={{
//                     x: ["-100%", "200%"],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     // repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
//                 />
//               </motion.button>

//               {/* Secondary CTA */}
//               <motion.button
//                 whileHover={{
//                   //   scale: 1.03,
//                   //   y: -3,
//                   backgroundColor: "rgba(255,255,255,0.08)",
//                 }}
//                 whileTap={{
//                   scale: 0.97,
//                 }}
//                 className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 text-white cursor-pointer"
//               >
//                 شاهد الأعمال
//               </motion.button>
//             </motion.div>

//             {/* FEATURES */}
//             <motion.div
//               variants={fadeUp}
//               className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start text-slate-400"
//             >
//               <motion.div
//                 whileHover={{ y: -4 }}
//                 className="flex items-center gap-2"
//               >
//                 <ShieldCheck className="w-5 h-5 text-emerald-400" />
//                 سرعة فائقة
//               </motion.div>

//               <motion.div
//                 whileHover={{ y: -4 }}
//                 className="flex items-center gap-2"
//               >
//                 <BarChart3 className="w-5 h-5 text-blue-400" />
//                 رفع التحويلات
//               </motion.div>

//               <motion.div
//                 whileHover={{ y: -4 }}
//                 className="flex items-center gap-2"
//               >
//                 <Sparkles className="w-5 h-5 text-[#D4AF37]" />
//                 تجربة فاخرة
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* =========================================
//            VISUAL SIDE
//           ========================================== */}

//           <div className="relative flex items-center justify-center">
//             {/* Main Glow */}
//             <motion.div
//               animate={{
//                 scale: [1, 1.1, 1],
//                 opacity: [0.15, 0.25, 0.15],
//               }}
//               transition={{
//                 duration: 6,
//                 // repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px]"
//             />

//             {/* Floating Card Left */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: -80,
//                 rotate: -8,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//                 rotate: 0,
//                 y: [0, -12, 0],
//               }}
//               transition={{
//                 duration: 1.4,
//                 delay: 0.4,
//                 // repeat: Infinity,
//                 // repeatType: "mirror",
//                 ease: "easeInOut",
//               }}
//               className="hidden md:block absolute left-0 top-10 w-[180px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 shadow-2xl"
//             >
//               <div className="flex items-center justify-between">
//                 <span className="text-slate-400 text-sm">ROAS</span>

//                 <span className="text-emerald-400 text-sm">+4.2x</span>
//               </div>

//               <div className="mt-5 flex items-end gap-2 h-24">
//                 <div className="w-3 h-10 rounded-full bg-blue-400" />
//                 <div className="w-3 h-16 rounded-full bg-cyan-400" />
//                 <div className="w-3 h-20 rounded-full bg-[#D4AF37]" />
//                 <div className="w-3 h-12 rounded-full bg-blue-300" />
//                 <div className="w-3 h-24 rounded-full bg-cyan-300" />
//               </div>

//               <p className="text-xs text-slate-500 mt-4 leading-relaxed">
//                 ارتفاع ملحوظ في معدل العائد الإعلاني
//               </p>
//             </motion.div>

//             {/* Floating Card Right */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: 80,
//                 rotate: 8,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//                 rotate: 0,
//                 y: [0, 12, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 delay: 0.6,
//                 // repeat: Infinity,
//                 // repeatType: "mirror",
//                 ease: "easeInOut",
//               }}
//               className="hidden md:block absolute right-0 bottom-10 w-[180px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 shadow-2xl"
//             >
//               <div className="flex items-center justify-between">
//                 <span className="text-slate-400 text-sm">Conversion</span>

//                 <span className="text-[#D4AF37] text-sm">+182%</span>
//               </div>

//               <div className="mt-6">
//                 <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     animate={{ width: "82%" }}
//                     transition={{
//                       duration: 1.8,
//                       delay: 1,
//                     }}
//                     className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-300"
//                   />
//                 </div>
//               </div>

//               <p className="text-xs text-slate-500 mt-4 leading-relaxed">
//                 تحسن واضح في معدلات التحويل والشراء
//               </p>
//             </motion.div>

//             {/* PHONE MOCKUP */}
//             <motion.div
//               variants={slideInPhone}
//               initial="hidden"
//               animate="show"
//               //   whileHover={{
//               //     rotate: -2,
//               //     scale: 1.02,
//               //   }}
//               className="relative"
//             >
//               {/* Outer Glow */}
//               <div className="absolute inset-0 rounded-[3rem] bg-blue-500/20 blur-3xl scale-110" />

//               {/* FLOATING PHONE */}
//               <motion.div
//                 animate={{
//                   y: [0, -20, 0],
//                   rotate: [0, -1, 1, 0],
//                 }}
//                 transition={{
//                   duration: 7,
//                   //   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="relative w-[300px] h-[620px] rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden"
//               >
//                 {/* TOP GLOW */}
//                 <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-cyan-400/10 to-transparent" />

//                 {/* INNER BORDER */}
//                 <div className="absolute inset-[1px] rounded-[3rem] border border-white/5 pointer-events-none" />

//                 {/* NOTCH */}
//                 <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-7 rounded-full bg-black/70 border border-white/10" />

//                 {/* SCREEN */}
//                 <div className="relative h-full p-6 pt-20 flex flex-col">
//                   {/* HEADER */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1 }}
//                     className="flex items-center justify-between"
//                   >
//                     <div>
//                       <p className="text-slate-400 text-sm">Revenue</p>

//                       <h3 className="text-3xl font-black mt-1">$128K</h3>
//                     </div>

//                     <div className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-400 text-sm">
//                       +24%
//                     </div>
//                   </motion.div>

//                   {/* CHART */}
//                   <div className="mt-10 h-48 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-5 flex items-end gap-3">
//                     {[20, 28, 16, 36, 44].map((h, i) => (
//                       <motion.div
//                         key={i}
//                         initial={{ height: 0 }}
//                         animate={{ height: `${h * 4}px` }}
//                         transition={{
//                           duration: 1,
//                           delay: 1 + i * 0.12,
//                           ease: [0.16, 1, 0.3, 1],
//                         }}
//                         className={`w-5 rounded-full ${
//                           i % 2 === 0 ? "bg-[#D4AF37]" : "bg-cyan-400"
//                         }`}
//                       />
//                     ))}
//                   </div>

//                   {/* STATS */}
//                   <div className="grid grid-cols-2 gap-4 mt-6">
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 1.4 }}
//                       className="rounded-2xl border border-white/10 bg-black/20 p-4"
//                     >
//                       <p className="text-slate-400 text-sm">Engagement</p>

//                       <h4 className="text-2xl font-bold mt-2">94%</h4>
//                     </motion.div>

//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 1.6 }}
//                       className="rounded-2xl border border-white/10 bg-black/20 p-4"
//                     >
//                       <p className="text-slate-400 text-sm">CTR</p>

//                       <h4 className="text-2xl font-bold mt-2">12.8%</h4>
//                     </motion.div>
//                   </div>

//                   {/* BOTTOM BARS */}
//                   <div className="mt-auto space-y-4">
//                     <div className="h-3 rounded-full bg-white/10 overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         animate={{ width: "82%" }}
//                         transition={{
//                           duration: 1.8,
//                           delay: 1.7,
//                         }}
//                         className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
//                       />
//                     </div>

//                     <div className="h-3 rounded-full bg-white/10 overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         animate={{ width: "65%" }}
//                         transition={{
//                           duration: 1.8,
//                           delay: 1.9,
//                         }}
//                         className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-300"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* =========================================
//        BOTTOM FADE
//       ========================================== */}

//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#040816] to-transparent" />
//     </section>
//   );
// }

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight, BarChart3, Sparkles, ShieldCheck } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       dir="rtl"
//       className="relative min-h-screen overflow-hidden bg-[#040816] text-white"
//     >
//       {/* =========================================
//        BACKGROUND
//       ========================================== */}

//       {/* Base */}
//       <div className="absolute inset-0 bg-[#040816]" />

//       {/* Gold Glow */}
//       <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

//       {/* Blue Glow */}
//       <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[140px]" />

//       {/* Grid */}
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
//           `,
//           backgroundSize: "80px 80px",
//         }}
//       />

//       {/* Noise */}
//       <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

//       {/* =========================================
//        CONTENT
//       ========================================== */}

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           {/* =========================================
//            TEXT SIDE
//           ========================================== */}

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-center lg:text-right"
//           >
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
//               <Sparkles className="w-4 h-4 text-[#D4AF37]" />
//               <span className="text-sm text-slate-300">
//                 نصمم تجارب رقمية تصنع الهيمنة
//               </span>
//             </div>

//             {/* Headline */}
//             <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight">
//               واجهات ترفع
//               <span className="block text-transparent bg-clip-text bg-gradient-to-l from-[#FFE082] via-[#D4AF37] to-[#B8860B] pb-3">
//                 قيمة علامتك
//               </span>
//               <span className="text-slate-100">… ومبيعاتك أيضًا.</span>
//             </h1>

//             {/* Paragraph */}
//             <p className="mt-8 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
//               نصمم صفحات هبوط وتجارب رقمية فاخرة تجمع بين الإقناع، السرعة،
//               والانبهار البصري لتحويل جمهورك إلى عملاء يدفعون بثقة.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
//               {/* Main CTA */}
//               <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-black font-extrabold text-base shadow-[0_0_40px_rgba(212,175,55,0.35)] hover:scale-[1.03] transition-all duration-300">
//                 <span className="relative z-10 flex items-center gap-2">
//                   ابدأ مشروعك
//                   <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
//                 </span>

//                 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
//               </button>

//               {/* Secondary CTA */}
//               <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 text-white">
//                 شاهد الأعمال
//               </button>
//             </div>

//             {/* Bottom Features */}
//             <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start text-slate-400">
//               <div className="flex items-center gap-2">
//                 <ShieldCheck className="w-5 h-5 text-emerald-400" />
//                 سرعة فائقة
//               </div>

//               <div className="flex items-center gap-2">
//                 <BarChart3 className="w-5 h-5 text-blue-400" />
//                 رفع التحويلات
//               </div>

//               <div className="flex items-center gap-2">
//                 <Sparkles className="w-5 h-5 text-[#D4AF37]" />
//                 تجربة فاخرة
//               </div>
//             </div>
//           </motion.div>

//           {/* =========================================
//            VISUAL SIDE
//           ========================================== */}

//           <motion.div
//             initial={{ opacity: 0, scale: 0.92 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.9 }}
//             className="relative flex items-center justify-center"
//           >
//             {/* Main Glow */}
//             <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

//             {/* Floating Card Left */}
//             <motion.div
//               animate={{ y: [0, -12, 0] }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="hidden md:block absolute left-0 top-10 w-[180px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 shadow-2xl"
//             >
//               <div className="flex items-center justify-between">
//                 <span className="text-slate-400 text-sm">ROAS</span>

//                 <span className="text-emerald-400 text-sm">+4.2x</span>
//               </div>

//               <div className="mt-5 flex items-end gap-2 h-24">
//                 <div className="w-3 h-10 rounded-full bg-blue-400" />
//                 <div className="w-3 h-16 rounded-full bg-cyan-400" />
//                 <div className="w-3 h-20 rounded-full bg-[#D4AF37]" />
//                 <div className="w-3 h-12 rounded-full bg-blue-300" />
//                 <div className="w-3 h-24 rounded-full bg-cyan-300" />
//               </div>

//               <p className="text-xs text-slate-500 mt-4 leading-relaxed">
//                 ارتفاع ملحوظ في معدل العائد الإعلاني
//               </p>
//             </motion.div>

//             {/* Floating Card Right */}
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="hidden md:block absolute right-0 bottom-10 w-[180px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 shadow-2xl"
//             >
//               <div className="flex items-center justify-between">
//                 <span className="text-slate-400 text-sm">Conversion</span>

//                 <span className="text-[#D4AF37] text-sm">+182%</span>
//               </div>

//               <div className="mt-6">
//                 <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
//                   <div className="w-[82%] h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-300" />
//                 </div>
//               </div>

//               <p className="text-xs text-slate-500 mt-4 leading-relaxed">
//                 تحسن واضح في معدلات التحويل والشراء
//               </p>
//             </motion.div>

//             {/* PHONE MOCKUP */}
//             <motion.div
//               animate={{ y: [0, -15, 0] }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="relative"
//             >
//               {/* Outer Glow */}
//               <div className="absolute inset-0 rounded-[3rem] bg-blue-500/20 blur-3xl scale-110" />

//               {/* Phone */}
//               <div className="relative w-[300px] h-[620px] rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden">
//                 {/* Top Glow */}
//                 <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-cyan-400/10 to-transparent" />

//                 {/* Inner Border */}
//                 <div className="absolute inset-[1px] rounded-[3rem] border border-white/5 pointer-events-none" />

//                 {/* Notch */}
//                 <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-7 rounded-full bg-black/70 border border-white/10" />

//                 {/* Screen Content */}
//                 <div className="relative h-full p-6 pt-20 flex flex-col">
//                   {/* Header */}
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-slate-400 text-sm">Revenue</p>

//                       <h3 className="text-3xl font-black mt-1">$128K</h3>
//                     </div>

//                     <div className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-400 text-sm">
//                       +24%
//                     </div>
//                   </div>

//                   {/* Chart */}
//                   <div className="mt-10 h-48 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-5 flex items-end gap-3">
//                     <div className="w-5 h-20 rounded-full bg-cyan-400" />
//                     <div className="w-5 h-28 rounded-full bg-blue-400" />
//                     <div className="w-5 h-16 rounded-full bg-[#D4AF37]" />
//                     <div className="w-5 h-36 rounded-full bg-cyan-300" />
//                     <div className="w-5 h-44 rounded-full bg-[#D4AF37]" />
//                   </div>

//                   {/* Stats */}
//                   <div className="grid grid-cols-2 gap-4 mt-6">
//                     <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
//                       <p className="text-slate-400 text-sm">Engagement</p>

//                       <h4 className="text-2xl font-bold mt-2">94%</h4>
//                     </div>

//                     <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
//                       <p className="text-slate-400 text-sm">CTR</p>

//                       <h4 className="text-2xl font-bold mt-2">12.8%</h4>
//                     </div>
//                   </div>

//                   {/* Bottom Bars */}
//                   <div className="mt-auto space-y-4">
//                     <div className="h-3 rounded-full bg-white/10 overflow-hidden">
//                       <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
//                     </div>

//                     <div className="h-3 rounded-full bg-white/10 overflow-hidden">
//                       <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-300" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* =========================================
//        BOTTOM FADE
//       ========================================== */}

//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#040816] to-transparent" />
//     </section>
//   );
// }

// import React from "react";

// export default function Hero() {
//   return (
//     <section
//       className="relative min-h-[85vh] w-full bg-brand-dark overflow-hidden flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8"
//       style={{ direction: "rtl" }}
//     >
//       {/* تأثير التوهج الشعاعي خلف النص (Ambient Center Glow) باستخدام ميزات v4 */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-radial from-brand-gold-glow via-brand-navy/20 to-transparent blur-3xl pointer-events-none" />

//       {/* الحاوية المركزية للنصوص */}
//       <div className="relative z-10    md:max-w-4xl  mx-auto text-center flex flex-col items-center">
//         {/* 1. البادج العلوي الصغير (Sub-headline / Tagline) */}
//         <p className="text-slate-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 max-w-prose">
//           الخيار الأول للنخبة لتطوير واجهات رقمية تصنع الفارق
//         </p>

//         {/* 2. العنوان الرئيسي الصادم والعريض (Main Headline) */}
//         <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.25]  mb-6">
//           صفحتك الهبوط الحالية <br />
//           <span className="relative inline-block text-brand-gold underline decoration-brand-gold/40 decoration-4 underline-offset-8">
//             تُهدر عملائك.
//           </span>
//           <br />
//           <span className="text-slate-300 font-extrabold leading-[1.15] text-3xl sm:text-5xl md:text-6xl mt-5 block">
//             استبدلها بواجهة أذكى تحقق الثراء.
//           </span>
//         </h1>

//         {/* 3. الوصف التفصيلي (Paragraph) */}
//         <p className="text-base sm:text-lg md:text-xl text-slate-400 font-normal max-w-2xl leading-relaxed mt-4 mb-12">
//           في <span className="text-white font-semibold">نخب الثراء</span>، نحول
//           الروابط التقليدية الجامدة إلى تجربة بصرية فاخرة فائقة السرعة، تلفت
//           أنظار جمهورك المستهدف وتضاعف مبيعاتك بنقرة واحدة.
//         </p>

//         {/* 4. زر الدعوة للإجراء (Main CTA Button) بدون تشتيت */}
//         <div className="w-full sm:w-auto px-4">
//           <button className="w-full sm:w-auto px-10 py-4.5 rounded-xl bg-brand-gold text-brand-dark font-black text-base transition-all duration-300 hover:bg-white hover:shadow-[0_0_35px_rgba(204,164,59,0.35)] cursor-pointer transform hover:-translate-y-0.5">
//             ابدأ رحلة التميز مجاناً
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";

// export default function Hero() {
//   return (
//     <section
//       className="relative min-h-[85vh] w-full bg-brand-dark overflow-hidden flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8"
//       style={{ direction: "rtl" }}
//     >
//       {/* تأثير التوهج الشعاعي خلف النص (Ambient Center Glow) باستخدام ميزات v4 */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-radial from-brand-gold-glow via-brand-navy/20 to-transparent blur-3xl pointer-events-none" />

//       {/* الحاوية المركزية للنصوص */}
//       <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
//         {/* 1. البادج العلوي الصغير (Sub-headline / Tagline) */}
//         <p className="text-slate-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 max-w-prose">
//           الخيار الأول للنخبة لتطوير واجهات رقمية تصنع الفارق
//         </p>

//         {/* 2. العنوان الرئيسي الصادم والعريض (Main Headline) */}
//         <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.25] max-w-3xl mb-6">
//           صفحتك الهبوط الحالية{" "}
//           <span className="relative inline-block text-brand-gold underline decoration-brand-gold/40 decoration-4 underline-offset-8">
//             تُهدر عملائك.
//           </span>
//           <br />
//           <span className="text-slate-300 font-extrabold leading-[1.15] text-3xl sm:text-5xl md:text-6xl mt-4 block">
//             استبدلها بواجهة أذكى تحقق الثراء.
//           </span>
//         </h1>

//         {/* 3. الوصف التفصيلي (Paragraph) */}
//         <p className="text-base sm:text-lg md:text-xl text-slate-400 font-normal max-w-2xl leading-relaxed mt-4 mb-12">
//           في <span className="text-white font-semibold">نخب الثراء</span>، نحول
//           الروابط التقليدية الجامدة إلى تجربة بصرية فاخرة فائقة السرعة، تلفت
//           أنظار جمهورك المستهدف وتضاعف مبيعاتك بنقرة واحدة.
//         </p>

//         {/* 4. زر الدعوة للإجراء (Main CTA Button) بدون تشتيت */}
//         <div className="w-full sm:w-auto px-4">
//           <button className="w-full sm:w-auto px-10 py-4.5 rounded-xl bg-brand-gold text-brand-dark font-black text-base transition-all duration-300 hover:bg-white hover:shadow-[0_0_35px_rgba(204,164,59,0.35)] cursor-pointer transform hover:-translate-y-0.5">
//             ابدأ رحلة التميز مجاناً
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
