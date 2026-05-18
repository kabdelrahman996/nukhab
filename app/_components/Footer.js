"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// إعدادات حركات الأنيميشن الفاخرة للفوتر
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-brand-dark border-t border-white/5 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      dir="rtl"
    >
      {/* لمسة بصرية متوهجة هادئة في زاوية الفوتر لتعزيز الـ Visual Depth */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-radial from-brand-navy/30 to-transparent blur-3xl pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={footerVariants}
        className="max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 border-b border-white/5 pb-12 relative z-10 items-start"
      >
        {/* العمود الأول: الشعار العريض الفخم (logoLarg.png) وأيقونات التواصل */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-right gap-6"
        >
          <div className="relative w-full max-w-[260px] sm:max-w-[300px] aspect-[3/1] transition-transform duration-300">
            <Image
              src="/logoLarg.png"
              alt="مؤسسة نخب الثراء للتسويق الإلكتروني"
              fill
              sizes="(max-w-7xl) 100vw, 30vw"
              className="object-contain object-center md:object-right"
              priority
            />
          </div>

          {/* أيقونات السوشيال ميديا الفاخرة أسفل الشعار العريض مباشرة */}
          <div className="flex items-center gap-3 mt-1">
            <a
              href="#"
              aria-label="Twitter"
              className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaTwitter size={15} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaInstagram size={15} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaLinkedinIn size={15} />
            </a>
          </div>
        </motion.div>

        {/* العمود الثاني: روابط سريعة للملاحة */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-right gap-4 md:mt-2"
        >
          <h4 className="text-white font-bold text-base tracking-tight border-b-2 md:border-b-0 md:border-r-2 border-brand-gold pb-1 md:pb-0 md:pr-2">
            خريطة الموقع
          </h4>
          <ul className="flex flex-col gap-3 text-sm mt-1">
            <li>
              <Link
                href="#"
                className="text-slate-400 hover:text-brand-gold transition-colors duration-300"
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                className="text-slate-400 hover:text-brand-gold transition-colors duration-300"
              >
                ميزات النظام
              </Link>
            </li>
            <li>
              <Link
                href="#integrations"
                className="text-slate-400 hover:text-brand-gold transition-colors duration-300"
              >
                أدوات التتبع الرقمي
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* العمود الثالث: بيانات التواصل المباشر */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-right gap-4 md:mt-2"
        >
          <h4 className="text-white font-bold text-base tracking-tight border-b-2 md:border-b-0 md:border-r-2 border-brand-gold pb-1 md:pb-0 md:pr-2">
            تواصل مباشر
          </h4>
          <ul className="flex flex-col gap-4 text-sm mt-1 font-sans text-slate-400 items-center md:items-start">
            <li className="flex items-center gap-2.5">
              <span className="text-brand-gold">📍</span>
              <span className="font-sans">المملكة العربية السعودية</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-emerald-400 text-base">💬</span>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 font-medium transition-colors duration-300 ltr-text"
              >
                +966 50 000 0000
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-brand-gold">✉️</span>
              <a
                href="mailto:info@nukhab.com"
                className="hover:text-brand-gold transition-colors duration-300"
              >
                info@nukhab.com
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* الجزء السفلي (الحقوق والروابط القانونية) */}
      <div className="max-w-[1150px] mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 relative z-10 font-sans text-center md:text-right">
        <p>
          &copy; {currentYear} مؤسسة نخب الثراء للتسويق الإلكتروني. جميع الحقوق
          محفوظة.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="hover:text-brand-gold transition-colors duration-300"
          >
            سياسة الخصوصية
          </Link>
          <Link
            href="#"
            className="hover:text-brand-gold transition-colors duration-300"
          >
            شروط الاستخدام
          </Link>
        </div>
      </div>
    </footer>
  );
}

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer
//       className="w-full bg-brand-dark border-t border-white/5 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
//       dir="rtl"
//     >
//       {/* لمسة بصرية متوهجة هادئة في زاوية الفوتر لتعزيز الـ Visual Depth */}
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-radial from-brand-navy/30 to-transparent blur-3xl pointer-events-none" />

//       <div className="max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-12 relative z-10 items-start">
//         {/* العمود الأول: الشعار العريض الفخم (logoLarg.png) بدون أي نصوص إضافية - يأخذ 5 أعمدة */}
//         <div className="md:col-span-5 flex flex-col items-start gap-6">
//           <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/1] transition-transform duration-300">
//             <Image
//               src="/logoLarg.png"
//               alt="مؤسسة نخب الثراء للتسويق الإلكتروني"
//               fill
//               className="object-contain object-right"
//               priority
//             />
//           </div>

//           {/* أيقونات السوشيال ميديا الفاخرة أسفل الشعار العريض مباشرة */}
//           <div className="flex items-center gap-3 mt-2">
//             <a
//               href="#"
//               className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-300"
//             >
//               <FaTwitter size={14} />
//             </a>
//             <a
//               href="#"
//               className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-300"
//             >
//               <FaInstagram size={14} />
//             </a>
//             <a
//               href="#"
//               className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-300"
//             >
//               <FaLinkedinIn size={14} />
//             </a>
//           </div>
//         </div>

//         {/* العمود الثاني: روابط سريعة للملاحة (يأخذ 3 أعمدة) */}
//         <div className="md:col-span-3 flex flex-col gap-4 md:mt-2">
//           <h4 className="text-white font-bold text-base tracking-tight border-r-2 border-brand-gold pr-2">
//             خريطة الموقع
//           </h4>
//           <ul className="flex flex-col gap-2.5 text-sm mt-2">
//             <li>
//               <Link
//                 href="#"
//                 className="text-slate-400 hover:text-brand-gold transition-colors duration-300"
//               >
//                 الرئيسية
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#features"
//                 className="text-slate-400 hover:text-brand-gold transition-colors duration-300"
//               >
//                 ميزات النظام
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#integrations"
//                 className="text-slate-400 hover:text-brand-gold transition-colors duration-300"
//               >
//                 أدوات التتبع الرقمي
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* العمود الثالث: بيانات التواصل المباشر بناءً على طلب العميل (يأخذ 4 أعمدة) */}
//         <div className="md:col-span-4 flex flex-col gap-4 md:mt-2">
//           <h4 className="text-white font-bold text-base tracking-tight border-r-2 border-brand-gold pr-2">
//             تواصل مباشر
//           </h4>
//           <ul className="flex flex-col gap-3.5 text-sm mt-2 font-sans text-slate-400">
//             <li className="flex items-center gap-2.5">
//               <span className="text-brand-gold">📍</span>
//               <span className="font-sans">المملكة العربية السعودية</span>
//             </li>
//             <li className="flex items-center gap-2.5">
//               <span className="text-emerald-400 text-base">💬</span>
//               <a
//                 href="#"
//                 className="hover:text-emerald-400 font-medium transition-colors duration-300 dir-ltr"
//               >
//                 +966 50 000 0000
//               </a>
//             </li>
//             <li className="flex items-center gap-2.5">
//               <span className="text-brand-gold">✉️</span>
//               <a
//                 href="mailto:info@nukhab.com"
//                 className="hover:text-brand-gold transition-colors duration-300"
//               >
//                 info@nukhab.com
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* الجزء السفلي المقابل للصورة تماماً (الحقوق والروابط القانونية) */}
//       <div className="max-w-[1150px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 relative z-10 font-sans">
//         <p>
//           &copy; {currentYear} مؤسسة نخب الثراء للتسويق الإلكتروني. جميع الحقوق
//           محفوظة.
//         </p>
//         <div className="flex items-center gap-6">
//           <Link
//             href="#"
//             className="hover:text-brand-gold transition-colors duration-300"
//           >
//             سياسة الخصوصية
//           </Link>
//           <Link
//             href="#"
//             className="hover:text-brand-gold transition-colors duration-300"
//           >
//             شروط الاستخدام
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }
