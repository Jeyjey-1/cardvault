"use client";

import { motion } from "framer-motion";
import { CardPortrait } from "./CardPortrait";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function NavLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="relative text-black/60 transition-colors duration-300 hover:text-black"
    >
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-grey-light bg-grain p-3 sm:p-6 md:p-10">
      <motion.div
        initial="hidden"
        animate="show"
        className="relative w-full max-w-[1440px] overflow-hidden rounded-[22px] bg-ecru shadow-[0_50px_100px_-30px_rgba(0,0,0,0.4)] ring-1 ring-black/5 md:rounded-[32px]"
      >
        {/* Nav */}
        <motion.nav
          custom={0}
          variants={fadeUp}
          className="relative z-20 flex items-center justify-between px-6 py-6 text-[11px] tracking-[0.18em] uppercase md:px-12 md:py-7 md:text-xs"
        >
          <div className="flex items-center gap-6 md:gap-10">
            <span className="font-display text-sm font-bold normal-case tracking-tight">
              BIAIS.
            </span>
            <NavLink>Le concept</NavLink>
          </div>
          <div className="flex items-center gap-5 md:gap-8">
            <span className="hidden md:inline">
              <NavLink>Le jeu</NavLink>
            </span>
            <span className="hidden md:inline">
              <NavLink>Comment jouer</NavLink>
            </span>
            <span className="hidden sm:inline">
              <NavLink>Shop</NavLink>
            </span>
            <button
              aria-label="Menu"
              className="flex items-center gap-1 p-2 -m-2"
            >
              <span className="h-1 w-1 rounded-full bg-black/70" />
              <span className="h-1 w-1 rounded-full bg-black/70" />
              <span className="h-1 w-1 rounded-full bg-black/70" />
            </button>
          </div>
        </motion.nav>

        <div className="relative border-t border-black/10">
          <div className="grid grid-cols-1 md:grid-cols-12 md:h-[76vh] md:min-h-[560px]">
            {/* Left column */}
            <div className="relative flex flex-col justify-between gap-10 px-6 pb-10 pt-8 md:col-span-5 md:gap-0 md:px-12 md:pb-12 md:pt-10">
              <motion.div
                custom={0.15}
                variants={fadeUp}
                className="grid max-w-sm grid-cols-2 gap-5 text-[10.5px] leading-relaxed tracking-wide text-black/50 md:text-[11px]"
              >
                <p>
                  POUR COMPRENDRE NOS BIAIS, NOS ERREURS DE JUGEMENT ET NOS
                  CONVICTIONS.
                </p>
                <p>
                  UN JEU DE CARTES CONVERSATIONNEL SUR LA PSYCHOLOGIE DU
                  DÉBAT.
                </p>
              </motion.div>

              <motion.div
                custom={0.3}
                variants={fadeUp}
                className="flex items-end gap-4 md:gap-6"
              >
                <span className="writing-vertical hidden rotate-180 text-[11px] tracking-[0.35em] text-black/35 md:inline-block">
                  001
                </span>
                <h1 className="font-display font-bold leading-[0.82] tracking-tight text-[20vw] sm:text-[15vw] md:text-[6.4vw] lg:text-[6.5rem] xl:text-[7.5rem]">
                  BIAIS.
                </h1>
              </motion.div>

              <motion.div
                custom={0.45}
                variants={fadeUp}
                className="flex items-center gap-4"
              >
                <a
                  href="#"
                  aria-label="Découvrir le jeu"
                  className="group flex h-11 w-11 flex-shrink-0 items-center justify-center border border-black/70 transition-colors duration-300 hover:bg-black hover:text-ecru"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M1 8H15M15 8L9 2M15 8L9 14"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </a>
                <span className="text-[11px] uppercase tracking-widest text-black/50">
                  Découvrir le jeu
                </span>
              </motion.div>
            </div>

            {/* Photo */}
            <motion.div
              custom={0.2}
              variants={fadeUp}
              className="group relative col-span-1 h-[48vh] overflow-hidden sm:h-[56vh] md:col-span-6 md:h-full"
            >
              <CardPortrait className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.1] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </motion.div>

            {/* Right strip */}
            <motion.div
              custom={0.35}
              variants={fadeUp}
              className="relative hidden items-center justify-center border-l border-black/10 py-10 md:col-span-1 md:flex"
            >
              <span className="writing-vertical text-[10px] tracking-[0.3em] text-black/40">
                COGNITIVE BIASES / CONVERSATION GAME / EST. 2026
              </span>
            </motion.div>

            {/* Mobile: same info, repositioned horizontally */}
            <motion.div
              custom={0.4}
              variants={fadeUp}
              className="border-t border-black/10 px-6 py-4 text-center text-[9.5px] tracking-[0.25em] text-black/40 md:hidden"
            >
              COGNITIVE BIASES / CONVERSATION GAME / EST. 2026
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
