"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "Em três meses, automatizamos 80% do nosso processo de onboarding. O time ganhou tempo para o que realmente importa.",
    name: "Carla M.",
    role: "Head de Operações",
    company: "HealthTech SP",
    initials: "CM",
  },
  {
    quote:
      "A Pandafy entregou em 6 semanas o que outra empresa estimou em 6 meses.",
    name: "Felipe R.",
    role: "CTO",
    company: "Rede de Varejo",
    initials: "FR",
  },
  {
    quote:
      "Finalmente um parceiro técnico que fala a língua do negócio, não só de tecnologia.",
    name: "Ana L.",
    role: "Diretora Comercial",
    company: "Logística Nacional",
    initials: "AL",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="depoimentos-section"
      className="relative bg-[var(--color-forest-600)] py-24 md:py-32 lg:py-40"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-forest-500)] bg-[var(--color-forest-500)] px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--color-mint-300)] font-[family-name:var(--font-mono)]">
            <span className="size-1.5 rounded-full bg-[var(--color-bamboo-400)]" />
            Depoimentos
          </span>

          <h2
            className={cn(
              "mb-6 text-balance font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--color-bone-50)]",
              "text-3xl sm:text-4xl md:text-5xl",
              "font-[family-name:var(--font-display)]"
            )}
          >
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="flex flex-col gap-6 rounded-[var(--radius-lg)] border border-[var(--color-forest-500)] bg-[var(--color-forest-500)] p-7"
            >
              <p className="text-lg leading-[1.5] tracking-[-0.01em] text-[var(--color-bone-50)] font-[family-name:var(--font-display)]">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-3 border-t border-[var(--color-forest-600)] pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-mint-400)] to-[var(--color-bamboo-400)] text-sm font-semibold text-[var(--color-forest-600)] font-[family-name:var(--font-display)]">
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[var(--color-bone-50)] font-[family-name:var(--font-sans)]">
                    {t.name}
                  </span>
                  <span className="text-xs text-[var(--color-bone-300)] font-[family-name:var(--font-sans)]">
                    {t.role} · {t.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
