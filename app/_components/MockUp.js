import React from "react";

export default function MockupUI() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#07111B]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* radial glow */}
        <div className="absolute top-[-120px] left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        {/* mesh grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#07111B_100%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full flex-col p-4">
        {/* top nav */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

            <div className="h-2 w-16 rounded-full bg-white/90" />
          </div>

          <div className="flex items-center gap-1.5">
            <div className="h-2 w-6 rounded-full bg-white/10" />
            <div className="h-2 w-6 rounded-full bg-white/10" />
            <div className="h-2 w-6 rounded-full bg-white/10" />
          </div>
        </div>

        {/* hero */}
        <div className="mt-8 flex flex-col items-center text-center">
          <div className="mb-3 h-5 w-28 rounded-full border border-cyan-400/20 bg-cyan-400/5" />

          <div className="h-6 w-44 rounded-full bg-white/95" />

          <div className="mt-2 h-6 w-32 rounded-full bg-cyan-400/80" />

          <div className="mt-4 flex flex-col gap-2">
            <div className="h-2 w-48 rounded-full bg-white/10" />
            <div className="h-2 w-40 rounded-full bg-white/10 self-center" />
          </div>

          <div className="mt-5 flex items-center gap-2">
            <div className="h-8 w-20 rounded-xl bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.35)]" />

            <div className="h-8 w-20 rounded-xl border border-white/10 bg-white/5" />
          </div>
        </div>

        {/* analytics cards */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          {/* card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-8 w-8 rounded-xl bg-cyan-400/15" />

              <div className="h-2 w-10 rounded-full bg-white/10" />
            </div>

            <div className="h-3 w-20 rounded-full bg-white/80" />

            <div className="mt-4 flex items-end gap-1">
              <div className="h-5 w-2 rounded-full bg-cyan-400/40" />
              <div className="h-8 w-2 rounded-full bg-cyan-400/60" />
              <div className="h-4 w-2 rounded-full bg-cyan-400/30" />
              <div className="h-10 w-2 rounded-full bg-cyan-400" />
              <div className="h-6 w-2 rounded-full bg-cyan-400/50" />
            </div>
          </div>

          {/* card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-8 w-8 rounded-xl bg-emerald-400/15" />

              <div className="h-2 w-10 rounded-full bg-white/10" />
            </div>

            <div className="h-3 w-16 rounded-full bg-white/80" />

            <div className="mt-4 flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>

            <div className="mt-4 h-2 w-full rounded-full bg-white/5 overflow-hidden">
              <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
            </div>
          </div>
        </div>

        {/* bottom widget */}
        <div className="mt-auto">
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/10 to-transparent p-4 backdrop-blur-xl">
            <div className="absolute right-0 top-0 h-20 w-20 bg-cyan-400/10 blur-3xl" />

            <div className="relative flex items-center justify-between">
              <div>
                <div className="h-2 w-24 rounded-full bg-white/10" />

                <div className="mt-3 h-5 w-16 rounded-full bg-white/90" />
              </div>

              <div className="h-9 w-20 rounded-xl bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.35)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
