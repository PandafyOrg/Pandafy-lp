"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Bot, Zap, BarChart3, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

const trustStack = [
  "OpenAI",
  "Anthropic",
  "Gemini",
  "Next.js",
  "Python",
  "Node",
  "n8n",
  "Make",
]

const floatingCards = [
  {
    icon: Bot,
    label: "Agente Vendas",
    status: "Ativo",
    delay: 0,
    className:
      "top-[8%] left-[2%] sm:left-[4%] md:top-[14%] md:left-[6%] lg:top-[18%] lg:left-[8%]",
    accent: "bamboo",
  },
  {
    icon: Zap,
    label: "Fluxo de onboarding",
    status: "Executando",
    delay: 0.15,
    className:
      "top-[6%] right-[2%] sm:right-[6%] md:top-[10%] md:right-[8%] lg:top-[16%] lg:right-[10%]",
    accent: "mint",
  },
  {
    icon: BarChart3,
    label: "+38% leads/sem",
    status: "Hoje",
    delay: 0.25,
    className:
      "bottom-[10%] left-[3%] sm:left-[8%] md:bottom-[12%] md:left-[10%] lg:bottom-[16%] lg:left-[12%]",
    accent: "water",
  },
  {
    icon: ShieldCheck,
    label: "LGPD",
    status: "Compliant",
    delay: 0.35,
    className:
      "bottom-[8%] right-[3%] sm:right-[8%] md:bottom-[14%] md:right-[10%] lg:bottom-[18%] lg:right-[14%]",
    accent: "forest",
  },
] as const

const accentMap = {
  bamboo: {
    dot: "bg-[var(--color-bamboo-400)]",
    iconBg: "bg-[var(--color-bamboo-200)]/40",
    iconText: "text-[var(--color-forest-600)]",
  },
  mint: {
    dot: "bg-[var(--color-mint-400)]",
    iconBg: "bg-[var(--color-mint-200)]/50",
    iconText: "text-[var(--color-forest-600)]",
  },
  water: {
    dot: "bg-[var(--color-water-500)]",
    iconBg: "bg-[var(--color-water-50)]",
    iconText: "text-[var(--color-water-500)]",
  },
  forest: {
    dot: "bg-[var(--color-forest-600)]",
    iconBg: "bg-[var(--color-forest-600)]",
    iconText: "text-[var(--color-bamboo-400)]",
  },
} as const

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    const headerOffset = 120
    const position = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({ top: position - headerOffset, behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden bg-[var(--color-bone-50)] px-4 pt-24 pb-20 sm:px-6 lg:px-8"
    >
      {/* Background — radial gradients (design-system hero spec) */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 0%, rgba(127,242,12,0.18), transparent 38%), radial-gradient(circle at 0% 100%, rgba(96,191,164,0.22), transparent 42%), radial-gradient(circle at 50% 50%, rgba(250,250,247,1), rgba(250,250,247,1))",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 50%, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 50%, black 40%, transparent 80%)",
          backgroundImage:
            "linear-gradient(to right, rgba(13,38,31,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,38,31,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Floating cards — visual richness, no stock illustrations */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block" aria-hidden>
        {floatingCards.map((card, i) => {
          const accent = accentMap[card.accent]
          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + card.delay, ease: [0.32, 0.72, 0, 1] }}
              className={cn("absolute", card.className)}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6 + i,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-bone-200)] bg-[rgba(255,255,255,0.78)] px-3.5 py-2.5 shadow-[var(--shadow-md)] backdrop-blur-md"
              >
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)]",
                    accent.iconBg
                  )}
                >
                  <card.icon className={cn("h-4 w-4", accent.iconText)} strokeWidth={1.75} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.8125rem] font-semibold leading-tight text-[var(--color-forest-600)] font-[family-name:var(--font-sans)]">
                    {card.label}
                  </span>
                  <span className="flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--color-bone-500)] font-[family-name:var(--font-mono)]">
                    <span className={cn("h-1.5 w-1.5 rounded-full", accent.dot)} />
                    {card.status}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Conteúdo central */}
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className={cn(
            "max-w-[20ch] text-balance font-semibold leading-[0.98] tracking-[-0.045em] text-[var(--color-forest-600)]",
            "text-[clamp(2.75rem,8.4vw,5.5rem)] sm:text-[clamp(3.5rem,7.5vw,6rem)] lg:text-[clamp(4rem,6.4vw,6.5rem)]",
            "font-[family-name:var(--font-display)]"
          )}
        >
          Escale sua empresa com IA que realmente{" "}
          <span className="relative inline-block whitespace-nowrap italic font-medium text-[var(--color-forest-600)]">
            funciona
            <svg
              aria-hidden
              className="absolute -bottom-[0.12em] left-0 h-[0.22em] w-full text-[var(--color-bamboo-400)]"
              viewBox="0 0 220 14"
              preserveAspectRatio="none"
              fill="none"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, delay: 0.9, ease: [0.32, 0.72, 0, 1] }}
                d="M2 8 C 60 2, 160 2, 218 8"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="mt-8 max-w-[540px] text-balance text-base leading-[1.6] text-[var(--color-bone-600)] sm:text-lg sm:leading-[1.65] font-[family-name:var(--font-sans)]"
        >
          Da estratégia ao código: automações, agentes e software personalizado para empresas que não têm tempo a perder.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.32, 0.72, 0, 1] }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <button
            onClick={() => scrollToSection("como-funciona")}
            className="group inline-flex h-13 items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-bamboo-400)] px-7 text-base font-semibold text-[var(--color-forest-600)] shadow-[var(--shadow-sm)] transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:bg-[var(--color-bamboo-300)] hover:shadow-[var(--shadow-md)] focus-visible:shadow-[var(--shadow-glow)] focus-visible:outline-none active:scale-[0.99]"
          >
            Falar com um especialista
            <ArrowRight
              className="h-4 w-4 transition-transform duration-[220ms] group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </button>
          <button
            onClick={() => scrollToSection("solucoes")}
            className="inline-flex h-13 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-bone-300)] bg-transparent px-7 text-base font-semibold text-[var(--color-forest-600)] transition-all duration-[220ms] hover:border-[var(--color-forest-300)] hover:bg-[var(--color-bone-100)] active:scale-[0.99]"
          >
            Ver casos de uso
          </button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 flex w-full flex-col items-center gap-5"
        >
          <span className="flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-bone-500)] font-[family-name:var(--font-mono)]">
            <span className="h-px w-8 bg-[var(--color-bone-300)]" />
            Stack que orquestramos
            <span className="h-px w-8 bg-[var(--color-bone-300)]" />
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {trustStack.map((item, index) => (
              <span
                key={item}
                className="flex items-center gap-5 text-sm font-medium text-[var(--color-bone-600)] font-[family-name:var(--font-mono)]"
              >
                {item}
                {index < trustStack.length - 1 && (
                  <span
                    aria-hidden
                    className="size-1 rounded-full bg-[var(--color-bone-300)]"
                  />
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
