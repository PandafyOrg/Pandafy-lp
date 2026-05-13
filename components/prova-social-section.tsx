"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"

const setores = [
  "Logística",
  "Saúde",
  "Varejo",
  "Financeiro",
  "Educação",
  "Indústria",
]

const stats = [
  { value: "+40", label: "projetos entregues" },
  { value: "+15", label: "setores atendidos" },
  { value: "100%", label: "dos clientes renovaram contrato" },
]

export function ProvaSocialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="prova-social-section"
      className="relative bg-[var(--color-bone-50)] py-24 md:py-32 overflow-hidden"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-bone-200)] bg-[var(--color-bone-0)] px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--color-bone-600)] font-[family-name:var(--font-mono)]">
            <span className="size-1.5 rounded-full bg-[var(--color-mint-400)]" />
            Quem confia
          </span>

          <h2
            className={cn(
              "mb-6 text-balance font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--color-forest-600)]",
              "text-3xl sm:text-4xl md:text-5xl",
              "font-[family-name:var(--font-display)]"
            )}
          >
            Empresas que já escalam com a Pandafy
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-[var(--color-bone-600)] sm:text-lg font-[family-name:var(--font-sans)]">
            Times que pararam de consertar planilhas e voltaram a tomar decisões com dados.
          </p>
        </div>

        <div className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <Marquee pauseOnHover className="[--duration:32s]">
            {setores.concat(setores).map((setor, index) => (
              <div
                key={`${setor}-${index}`}
                className="mx-3 flex h-16 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-bone-200)] bg-[var(--color-bone-0)] px-8 text-[var(--color-forest-600)]"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.18em] font-[family-name:var(--font-mono)]">
                  {setor}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-bone-200)] bg-[var(--color-bone-0)] p-6 text-center"
            >
              <span className="text-4xl font-semibold tracking-[-0.03em] text-[var(--color-forest-600)] font-[family-name:var(--font-display)]">
                {stat.value}
              </span>
              <span className="text-sm text-[var(--color-bone-600)] font-[family-name:var(--font-sans)]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
