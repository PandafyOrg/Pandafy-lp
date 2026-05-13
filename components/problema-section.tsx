"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { AlertTriangle, Clock, LifeBuoy } from "lucide-react"

const problemas = [
  {
    icon: AlertTriangle,
    title: "Ferramentas prontas que não se encaixam no seu processo",
    description:
      "Você adapta o time à ferramenta — e não o contrário. Resultado: workarounds, planilhas paralelas e adoção pela metade.",
  },
  {
    icon: Clock,
    title: "Projetos longos, orçamentos estourados e sem resultado visível",
    description:
      "Cronogramas que escorregam, escopo que cresce no escuro e a sensação de estar pagando para esperar.",
  },
  {
    icon: LifeBuoy,
    title: "Times sem tempo para aprender — e sem suporte quando precisam",
    description:
      "A tecnologia exige curva de aprendizado e ninguém atende quando o sistema engasga. O custo real é o time travado.",
  },
]

export function ProblemaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="problema-section"
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
            <span className="size-1.5 rounded-full bg-[var(--color-mint-400)]" />
            O problema
          </span>

          <h2
            className={cn(
              "mb-6 text-balance font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--color-forest-600)]",
              "text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]",
              "font-[family-name:var(--font-display)]"
            )}
          >
            Tecnologia cara, genérica e que nunca entrega o que prometeu.
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-[var(--color-bone-600)] sm:text-lg sm:leading-8 font-[family-name:var(--font-sans)]">
            A maioria das empresas convive com sistemas que prometem produtividade e entregam atrito. Você reconhece estes padrões?
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {problemas.map((problema, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-bone-200)] bg-[var(--color-bone-0)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:shadow-[var(--shadow-md)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-bone-100)] text-[var(--color-water-500)]">
                <problema.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em] text-[var(--color-forest-600)] font-[family-name:var(--font-display)]">
                {problema.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--color-bone-600)] font-[family-name:var(--font-sans)]">
                {problema.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 text-center text-xl font-medium text-[var(--color-forest-600)] sm:text-2xl font-[family-name:var(--font-display)]"
        >
          A Pandafy existe para mudar isso.
        </motion.p>
      </motion.div>
    </section>
  )
}
