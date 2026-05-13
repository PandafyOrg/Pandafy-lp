"use client"

import { motion, useInView } from "framer-motion"
import { Suspense, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Earth from "./ui/globe"
import ScrambleHover from "./ui/scramble"
import {
  Code,
  BarChart2,
  ShieldCheck,
  Headphones,
  MessageSquare,
  DollarSign,
  LifeBuoy,
  Users,
  CreditCard,
  CalendarDays,
} from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Software sob medida",
    description: "Desenvolvemos exatamente o que você precisa — sem feature desnecessária.",
  },
  {
    icon: BarChart2,
    title: "Analytics e dashboards",
    description: "Dados do seu negócio em painéis claros, em tempo real.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e conformidade",
    description: "Soluções que respeitam LGPD e as melhores práticas de segurança.",
  },
  {
    icon: Headphones,
    title: "Suporte contínuo",
    description: "Parceria de longo prazo: evoluímos junto com o seu negócio.",
  },
]

const agentLeft = [
  { label: "Atendimento", icon: MessageSquare },
  { label: "Vendas", icon: DollarSign },
  { label: "Suporte", icon: LifeBuoy },
]

const agentRight = [
  { label: "CRM", icon: Users },
  { label: "Financeiro", icon: CreditCard },
  { label: "Agenda", icon: CalendarDays },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isAgentHovering, setIsAgentHovering] = useState(false)
  const [isFlowHovering, setIsFlowHovering] = useState(false)

  const baseColor: [number, number, number] = [0.376, 0.749, 0.643]
  const glowColor: [number, number, number] = [0.757, 0.949, 0.467]
  const markerColor: [number, number, number] = [0.051, 0.149, 0.122]

  return (
    <section
      id="features-section"
      className="relative bg-[var(--color-bone-50)] py-24 md:py-32 lg:py-40"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-bone-200)] bg-[var(--color-bone-0)] px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--color-bone-600)] font-[family-name:var(--font-mono)]">
            <span className="size-1.5 rounded-full bg-[var(--color-bamboo-400)]" />
            Soluções
          </span>

          <h2
            className={cn(
              "mb-6 text-balance font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--color-forest-600)]",
              "text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]",
              "font-[family-name:var(--font-display)]"
            )}
          >
            O que a Pandafy entrega
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-[var(--color-bone-600)] sm:text-lg sm:leading-8 font-[family-name:var(--font-sans)]">
            Tecnologia construída para o seu processo — não o contrário. Cada solução é definida com você, e nasce para resolver um problema concreto.
          </p>
        </div>

        {/* Bento — destaques visuais */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
          {/* Card 1 — Agentes de IA */}
          <motion.div
            onMouseEnter={() => setIsAgentHovering(true)}
            onMouseLeave={() => setIsAgentHovering(false)}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6 rounded-[var(--radius-lg)] border border-[var(--color-bone-200)] bg-[var(--color-bone-0)] p-7 shadow-[var(--shadow-sm)] transition-all duration-300 hover:shadow-[var(--shadow-md)]"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold leading-snug tracking-[-0.02em] text-[var(--color-forest-600)] font-[family-name:var(--font-display)]">
                Agentes de IA
              </h3>
              <p className="text-sm leading-6 text-[var(--color-bone-600)] font-[family-name:var(--font-sans)]">
                Atendimento, vendas e suporte automáticos
              </p>
            </div>

            <div className="relative h-[360px] w-full overflow-hidden rounded-[var(--radius-md)] bg-gradient-to-br from-[var(--color-mint-400)] via-[var(--color-mint-300)] to-[var(--color-bamboo-200)]">
              {/* Glow central */}
              <motion.div
                className="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-bamboo-400)] opacity-40 blur-[74px]"
                initial={{ scale: 1 }}
                animate={isAgentHovering ? { scale: [1, 1.342, 1, 1.342] } : { scale: 1 }}
                transition={{ duration: 3, ease: "easeInOut", repeat: isAgentHovering ? Infinity : 0 }}
              />

              {/* Linhas conectoras animadas */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={isAgentHovering ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                  <motion.path
                    d="M 60.688 1.59 L 60.688 92.449 M 60.688 92.449 L 119.368 92.449 M 60.688 92.449 L 1.414 92.449"
                    stroke="rgba(255,255,255,0.6)"
                    fill="transparent"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0 }}
                    animate={isAgentHovering ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
                <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                  <motion.path
                    d="M 60.688 92.449 L 60.688 1.59 M 60.688 1.59 L 119.368 1.59 M 60.688 1.59 L 1.414 1.59"
                    stroke="rgba(255,255,255,0.6)"
                    fill="transparent"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0 }}
                    animate={isAgentHovering ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>

              {/* Conteúdo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-3">
                    {agentLeft.map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="flex items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-bone-0)] px-3 py-2 text-sm font-medium text-[var(--color-forest-600)] shadow-[var(--shadow-xs)]"
                        initial={{ opacity: 1, x: 0 }}
                        animate={isAgentHovering ? { x: [-16, 0] } : { x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <item.icon className="h-4 w-4 text-[var(--color-water-500)]" strokeWidth={1.75} />
                        {item.label}
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="flex h-20 w-20 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-forest-600)] shadow-[var(--shadow-md)]"
                    initial={{ scale: 1 }}
                    animate={isAgentHovering ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <img
                      src="/pandafy-logo.png"
                      alt="Pandafy"
                      className="h-14 w-14 object-contain"
                      draggable={false}
                    />
                  </motion.div>

                  <div className="flex flex-col gap-3">
                    {agentRight.map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="flex items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-bone-0)] px-3 py-2 text-sm font-medium text-[var(--color-forest-600)] shadow-[var(--shadow-xs)]"
                        initial={{ opacity: 1, x: 0 }}
                        animate={isAgentHovering ? { x: [16, 0] } : { x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <item.icon className="h-4 w-4 text-[var(--color-water-500)]" strokeWidth={1.75} />
                        {item.label}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Borda circular animada */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={isAgentHovering ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <svg width="350" height="350" viewBox="0 0 350 350" className="opacity-40">
                  <motion.path
                    d="M 175 1.159 C 271.01 1.159 348.841 78.99 348.841 175 C 348.841 271.01 271.01 348.841 175 348.841 C 78.99 348.841 1.159 271.01 1.159 175 C 1.159 78.99 78.99 1.159 175 1.159 Z"
                    stroke="rgba(255, 255, 255, 0.5)"
                    strokeWidth="1.16"
                    fill="transparent"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, rotate: 0 }}
                    animate={isAgentHovering ? { pathLength: 1, rotate: 360 } : { pathLength: 0, rotate: 0 }}
                    transition={{
                      pathLength: { duration: 3, ease: "easeInOut" },
                      rotate: {
                        duration: 20,
                        repeat: isAgentHovering ? Infinity : 0,
                        ease: "linear",
                      },
                    }}
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2 — Automações de processos */}
          <motion.div
            onMouseEnter={() => setIsFlowHovering(true)}
            onMouseLeave={() => setIsFlowHovering(false)}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative flex flex-col gap-6 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-bone-200)] bg-[var(--color-bone-0)] p-7 shadow-[var(--shadow-sm)] transition-all duration-300 hover:shadow-[var(--shadow-md)]"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold leading-snug tracking-[-0.02em] text-[var(--color-forest-600)] font-[family-name:var(--font-display)]">
                Automações de processos
              </h3>
              <p className="text-sm leading-6 text-[var(--color-bone-600)] font-[family-name:var(--font-sans)]">
                Menos tarefas manuais, mais eficiência
              </p>
            </div>

            <div className="relative flex min-h-[360px] grow items-start justify-center">
              <div className="mt-2 inline-block rounded-[var(--radius-md)] border border-[var(--color-bone-200)] bg-[var(--color-bone-0)] px-3 py-1.5">
                <ScrambleHover
                  text="Fluxo ativo"
                  scrambleSpeed={70}
                  maxIterations={20}
                  useOriginalCharsOnly={false}
                  className="cursor-pointer bg-gradient-to-t from-[var(--color-water-500)] to-[var(--color-mint-400)] bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent sm:text-5xl font-[family-name:var(--font-display)]"
                  isHovering={isFlowHovering}
                  setIsHovering={setIsFlowHovering}
                  characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
                />
              </div>

              <div className="absolute top-32 z-10 flex items-center justify-center">
                <div className="h-[400px] w-[400px]">
                  <Suspense
                    fallback={
                      <div className="h-[400px] w-[400px] animate-pulse rounded-full bg-[var(--color-bone-200)]" />
                    }
                  >
                    <Earth baseColor={baseColor} markerColor={markerColor} glowColor={glowColor} dark={0} />
                  </Suspense>
                </div>
              </div>

              <div className="absolute top-1/2 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                <div className="absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-[var(--color-mint-400)]/50 from-10% to-transparent to-60% opacity-20 sm:h-[512px]" />
                <div className="absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-[var(--color-mint-400)]/30 from-10% to-transparent to-60% opacity-20 sm:h-[256px]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grid completo */}
        <div className="mx-auto mt-5 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group flex flex-col gap-5 rounded-[var(--radius-lg)] border border-[var(--color-bone-200)] bg-[var(--color-bone-0)] p-7 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-bamboo-200)]/35 text-[var(--color-forest-600)]">
                <feature.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-semibold leading-snug tracking-[-0.01em] text-[var(--color-forest-600)] font-[family-name:var(--font-display)]">
                {feature.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--color-bone-600)] font-[family-name:var(--font-sans)]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
