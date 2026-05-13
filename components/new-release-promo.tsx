"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos seu processo, suas dores e onde a IA pode gerar mais valor.",
  },
  {
    number: "02",
    title: "Proposta técnica",
    description: "Um plano claro: escopo, tecnologia, prazo e investimento sem surpresa.",
  },
  {
    number: "03",
    title: "Entrega e evolução",
    description: "Implementamos, treinamos seu time e continuamos junto.",
  },
]

export function NewReleasePromo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="como-funciona-section"
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
            Como funciona
          </span>

          <h2
            className={cn(
              "mb-6 text-balance font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--color-forest-600)]",
              "text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]",
              "font-[family-name:var(--font-display)]"
            )}
          >
            Do briefing ao resultado em semanas, não meses.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="flex flex-col gap-5 rounded-[var(--radius-lg)] border border-[var(--color-bone-200)] bg-[var(--color-bone-0)] p-7 shadow-[var(--shadow-sm)]"
            >
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[var(--color-bone-500)] font-[family-name:var(--font-mono)]">
                {step.number}
              </span>
              <h3 className="text-2xl font-semibold leading-snug tracking-[-0.02em] text-[var(--color-forest-600)] font-[family-name:var(--font-display)]">
                {step.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--color-bone-600)] font-[family-name:var(--font-sans)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/comecar"
            className="inline-flex h-13 items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-bamboo-400)] px-7 text-base font-semibold text-[var(--color-forest-600)] shadow-[var(--shadow-sm)] transition-all duration-300 hover:bg-[var(--color-bamboo-300)] hover:shadow-[var(--shadow-md)] focus-visible:shadow-[var(--shadow-glow)] active:scale-[0.98]"
          >
            Quero começar agora
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
