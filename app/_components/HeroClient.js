"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Sparkles, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const phoneAnimation = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroClient() {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#040816] text-white flex items-center"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[#040816]" />

      {/* Simplified glow */}

      <div className="absolute top-[-10%] right-[-5%] w-[320px] h-[320px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Grid */}

      <div className="hero-grid absolute inset-0 opacity-[0.04]" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="text-center lg:text-right flex flex-col items-center lg:items-start"
          >
            {/* Badge */}

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-white/10 bg-white/[0.03]"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />

              <span className="text-sm text-slate-300">
                نصمم تجارب رقمية تصنع الهيمنة
              </span>
            </motion.div>

            {/* Headline */}

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight"
            >
              واجهات ترفع
              <span className="block text-transparent bg-clip-text bg-gradient-to-l from-[#FFE082] via-[#D4AF37] to-[#B8860B] pt-2">
                قيمة علامتك
              </span>
              <span className="text-slate-100">… ومبيعاتك أيضًا.</span>
            </motion.h1>

            {/* Paragraph */}

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base md:text-xl text-slate-400 leading-relaxed max-w-2xl"
            >
              نصمم صفحات هبوط وتجارب رقمية فاخرة تجمع بين الإقناع، السرعة،
              والانبهار البصري لتحويل جمهورك إلى عملاء.
            </motion.p>

            {/* CTA */}

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
            >
              <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-black font-extrabold shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-transform duration-300 hover:scale-[1.02]">
                <Link
                  href="#cta"
                  className="flex items-center justify-center gap-2"
                >
                  ابدأ مشروعك
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-300">
                شاهد الأعمال
              </button>
            </motion.div>

            {/* Features */}

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-6 mt-8 text-slate-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                سرعة فائقة
              </div>

              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                رفع التحويلات
              </div>

              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                تجربة فاخرة
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}

          <motion.div
            variants={phoneAnimation}
            initial="hidden"
            animate="show"
            className="relative flex items-center justify-center"
          >
            {/* Glow */}

            <div className="absolute w-[320px] h-[320px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

            {/* Phone */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                // repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[290px] h-[600px] rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] overflow-hidden shadow-2xl"
            >
              {/* Top */}

              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-400/10 to-transparent" />

              {/* Notch */}

              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-7 rounded-full bg-black/70 border border-white/10" />

              {/* Content */}

              <div className="relative h-full p-6 pt-20 flex flex-col">
                {/* Header */}

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Revenue</p>

                    <h3 className="text-3xl font-black mt-1">$128K</h3>
                  </div>

                  <div className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-400 text-sm">
                    +24%
                  </div>
                </div>

                {/* Static chart */}

                <div className="mt-10 h-48 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-5 flex items-end gap-3 justify-center">
                  {[80, 110, 70, 150, 180].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}px` }}
                      className={`w-5 rounded-full ${
                        i % 2 === 0 ? "bg-[#D4AF37]" : "bg-cyan-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Stats */}

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-slate-400 text-sm">Engagement</p>

                    <h4 className="text-2xl font-bold mt-2">94%</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-slate-400 text-sm">CTR</p>

                    <h4 className="text-2xl font-bold mt-2">12.8%</h4>
                  </div>
                </div>

                {/* Bars */}

                <div className="mt-auto space-y-4">
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>

                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#040816] to-transparent pointer-events-none" />
    </section>
  );
}
