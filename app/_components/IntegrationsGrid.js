"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiTiktok,
  SiMeta,
} from "react-icons/si";
import { FaSnapchatGhost, FaCreditCard } from "react-icons/fa";

const integrations = [
  {
    title: "سناب شات بكسل (Snapchat)",
    desc: "تتبع زوار حملاتك الإعلانية على المنصة الأكثر استخداماً في المملكة وإعادة استهدافهم ذكياً.",
    icon: FaSnapchatGhost,
    color: "text-yellow-300",
    dotColor: "bg-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    glow: "from-yellow-500/10",
  },
  {
    title: "إعلانات تيك توك (TikTok Pixel)",
    desc: "رصد نقرات التواصل والتحويل القادمة من حملات الفيديوهات والمحتوى التفاعلي فوراً.",
    icon: SiTiktok,
    color: "text-cyan-300",
    dotColor: "bg-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    glow: "from-cyan-500/10",
  },
  {
    title: "ميتا بكسل (Meta Pixel)",
    desc: "ربط فوري مع إعلانات إنستغرام لرفع دقة استهداف الجمهور المهتم بخدمات مؤسستك.",
    icon: SiMeta,
    color: "text-blue-300",
    dotColor: "bg-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "from-blue-500/10",
  },
  {
    title: "إحصائيات جوجل (GA4)",
    desc: "قراءة سلوك عملائك بدقة ثانية بثانية، ومعرفة مدة البقاء داخل الصفحة لتحسين المبيعات.",
    icon: SiGoogleanalytics,
    color: "text-orange-300",
    dotColor: "bg-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    glow: "from-orange-500/10",
  },
  {
    title: "بوابات الدفع (مدى / Mada)",
    desc: "تجهيز البنية التحتية لربط واجهات الدفع المحلية بمرونة تامة لتسهيل الشراء المباشر.",
    icon: FaCreditCard,
    color: "text-emerald-300",
    dotColor: "bg-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "from-emerald-500/10",
  },
  {
    title: "إدارة الأكواد (Tag Manager)",
    desc: "إدارة وتفعيل كافة نصوص التتبع والـ Pixels من مكان واحد دون التأثير على سرعة تحميل الموقع.",
    icon: SiGoogletagmanager,
    color: "text-sky-300",
    dotColor: "bg-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    glow: "from-sky-500/10",
  },
];

// إعدادات الأنيميشن التتابعي الفاخر
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function IntegrationsGrid() {
  return (
    <section
      id="integrations"
      dir="rtl"
      className="relative overflow-hidden bg-[#070816] py-16 sm:py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] -translate-x-1/2 rounded-full bg-brand-gold/10 blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[250px] sm:h-[350px] w-[250px] sm:w-[350px] rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-4xl text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.3] sm:leading-[1.15]"
          >
            صفحة واحدة.
            <br className="sm:hidden" />
            <span className="block mt-2 bg-gradient-to-l from-brand-gold via-yellow-100 to-white bg-clip-text text-transparent">
              تتصل بكل أدواتك التسويقية.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-5 sm:mt-7 text-slate-400 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            نربط موقعك الجديد بكافة منصات التتبع والبكسل العالمية والمحلية
            تلقائياً، لتصبح حملاتك الإعلانية جاهزة وموجهة بدقة 100%.
          </motion.p>
        </motion.div>

        {/* Grid Container */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-7"
        >
          {integrations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-7 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/15"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.glow} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Subtle Gradient Border */}
                <div className="absolute inset-[1px] rounded-[27px] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                {/* Top Row */}
                <div className="relative flex items-center justify-between">
                  {/* Icon */}
                  <div
                    className={`flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-2xl border ${item.border} ${item.bg} backdrop-blur-xl`}
                  >
                    <Icon className={`text-xl sm:text-2xl ${item.color}`} />
                  </div>

                  {/* Small Badge */}
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] sm:text-[11px] text-slate-300 backdrop-blur-xl font-medium">
                    جاهز للربط
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-6 sm:mt-7">
                  <h3 className="text-white text-lg sm:text-xl font-black leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 sm:mt-4 text-slate-400 leading-relaxed text-xs sm:text-sm md:text-[15px]">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Line */}
                <div className="relative mt-6 sm:mt-8 flex items-center gap-2">
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${item.dotColor}`}
                  />
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-white/10 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// import React from "react";
// import {
//   SiGoogleanalytics,
//   SiGoogletagmanager,
//   SiTiktok,
//   SiMeta,
// } from "react-icons/si";

// import { FaSnapchatGhost, FaCreditCard } from "react-icons/fa";

// const integrations = [
//   {
//     title: "سناب شات بكسل (Snapchat)",
//     desc: "تتبع زوار حملاتك الإعلانية على المنصة الأكثر استخداماً في المملكة وإعادة استهدافهم ذكياً.",
//     icon: FaSnapchatGhost,
//     color: "text-yellow-300",
//     bg: "bg-yellow-500/10",
//     border: "border-yellow-500/20",
//     glow: "from-yellow-500/10",
//   },

//   {
//     title: "إعلانات تيك توك (TikTok Pixel)",
//     desc: "رصد نقرات التواصل والتحويل القادمة من حملات الفيديوهات والمحتوى التفاعلي فوراً.",
//     icon: SiTiktok,
//     color: "text-cyan-300",
//     bg: "bg-cyan-500/10",
//     border: "border-cyan-500/20",
//     glow: "from-cyan-500/10",
//   },

//   {
//     title: "ميتا بكسل (Meta Pixel)",
//     desc: "ربط فوري مع إعلانات إنستغرام لرفع دقة استهداف الجمهور المهتم بخدمات مؤسستك.",
//     icon: SiMeta,
//     color: "text-blue-300",
//     bg: "bg-blue-500/10",
//     border: "border-blue-500/20",
//     glow: "from-blue-500/10",
//   },

//   {
//     title: "إحصائيات جوجل (GA4)",
//     desc: "قراءة سلوك عملائك بدقة ثانية بثانية، ومعرفة مدة البقاء داخل الصفحة لتحسين المبيعات.",
//     icon: SiGoogleanalytics,
//     color: "text-orange-300",
//     bg: "bg-orange-500/10",
//     border: "border-orange-500/20",
//     glow: "from-orange-500/10",
//   },

//   {
//     title: "بوابات الدفع (مدى / Mada)",
//     desc: "تجهيز البنية التحتية لربط واجهات الدفع المحلية بمرونة تامة لتسهيل الشراء المباشر.",
//     icon: FaCreditCard,
//     color: "text-emerald-300",
//     bg: "bg-emerald-500/10",
//     border: "border-emerald-500/20",
//     glow: "from-emerald-500/10",
//   },

//   {
//     title: "إدارة الأكواد (Tag Manager)",
//     desc: "إدارة وتفعيل كافة نصوص التتبع والـ Pixels من مكان واحد دون التأثير على سرعة تحميل الموقع.",
//     icon: SiGoogletagmanager,
//     color: "text-sky-300",
//     bg: "bg-sky-500/10",
//     border: "border-sky-500/20",
//     glow: "from-sky-500/10",
//   },
// ];

// export default function IntegrationsGrid() {
//   return (
//     <section
//       id="integrations"
//       dir="rtl"
//       className="relative overflow-hidden bg-[#070816] py-24 lg:py-32"
//     >
//       {/* Background Glow */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-gold/10 blur-[140px]" />

//         <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />
//       </div>

//       <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mx-auto max-w-4xl text-center mb-20 lg:mb-24">
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15]">
//             صفحة واحدة.
//             <br className="sm:hidden" />
//             <span className="block mt-2 bg-gradient-to-l from-brand-gold via-yellow-100 to-white bg-clip-text text-transparent">
//               تتصل بكل أدواتك التسويقية.
//             </span>
//           </h2>

//           <p className="mt-7 text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
//             نربط موقعك الجديد بكافة منصات التتبع والبكسل العالمية والمحلية
//             تلقائياً، لتصبح حملاتك الإعلانية جاهزة وموجهة بدقة 100%.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
//           {integrations.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/15"
//               >
//                 {/* Hover Glow */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${item.glow} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//                 />

//                 {/* Subtle Gradient Border */}
//                 <div className="absolute inset-[1px] rounded-[27px] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

//                 {/* Top Row */}
//                 <div className="relative flex items-start justify-between">
//                   {/* Icon */}
//                   <div
//                     className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${item.border} ${item.bg} backdrop-blur-xl`}
//                   >
//                     <Icon className={`text-2xl ${item.color}`} />
//                   </div>

//                   {/* Small Badge */}
//                   <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-slate-300 backdrop-blur-xl">
//                     جاهز للربط
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="relative mt-7">
//                   <h3 className="text-white text-xl font-black leading-snug">
//                     {item.title}
//                   </h3>

//                   <p className="mt-4 text-slate-400 leading-relaxed text-sm sm:text-[15px]">
//                     {item.desc}
//                   </p>
//                 </div>

//                 {/* Bottom Line */}
//                 <div className="relative mt-8 flex items-center gap-2">
//                   <div
//                     className={`h-1.5 w-1.5 rounded-full ${item.bg.replace(
//                       "/10",
//                       "",
//                     )}`}
//                   />

//                   <div className="h-[1px] flex-1 bg-gradient-to-l from-white/10 to-transparent" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
