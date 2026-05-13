"use client"

import { useState } from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "A Pandafy atende empresas de qual tamanho?",
    answer:
      "Times de 10 a 500 pessoas em qualquer segmento que dependa de processos repetitivos ou decisões baseadas em dados.",
  },
  {
    question: "Quanto tempo leva um projeto?",
    answer:
      "Depende do escopo. Automações simples saem em 2–3 semanas. Sistemas completos, 2–4 meses.",
  },
  {
    question: "Preciso ter equipe técnica interna?",
    answer:
      "Não. Somos seu time técnico. Se já tiver um, trabalhamos em conjunto.",
  },
  {
    question: "Vocês usam quais tecnologias?",
    answer:
      "Escolhemos a stack certa para cada problema: Python, Node, Next.js, APIs de IA (OpenAI, Anthropic, Gemini) e plataformas de automação como n8n e Make.",
  },
  {
    question: "Como funciona o suporte após a entrega?",
    answer:
      "Oferecemos planos de suporte contínuo com SLA definido. Nada fica sem dono.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section
      id="faq-section"
      className="relative bg-[var(--color-bone-50)] py-24 md:py-32 lg:py-40"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-bone-200)] bg-[var(--color-bone-0)] px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--color-bone-600)] font-[family-name:var(--font-mono)]">
            <span className="size-1.5 rounded-full bg-[var(--color-mint-400)]" />
            FAQ
          </span>

          <motion.h2
            className={cn(
              "mb-6 text-balance font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--color-forest-600)]",
              "text-3xl sm:text-4xl md:text-5xl",
              "font-[family-name:var(--font-display)]"
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Perguntas frequentes
          </motion.h2>
        </div>

        <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-4">
          {faqs.map((faq, index) => {
            const open = openItems.includes(index)
            return (
              <motion.div
                key={faq.question}
                className="cursor-pointer rounded-[var(--radius-lg)] border border-[var(--color-bone-200)] bg-[var(--color-bone-0)] p-6 shadow-[var(--shadow-sm)] transition-colors duration-300 hover:border-[var(--color-bone-300)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                onClick={() => toggleItem(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    toggleItem(index)
                  }
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold leading-snug text-[var(--color-forest-600)] font-[family-name:var(--font-display)] sm:text-lg">
                    {faq.question}
                  </h3>
                  <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {open ? (
                      <MinusIcon className="h-5 w-5 flex-shrink-0 text-[var(--color-water-500)]" />
                    ) : (
                      <PlusIcon className="h-5 w-5 flex-shrink-0 text-[var(--color-water-500)]" />
                    )}
                  </motion.div>
                </div>
                <motion.div
                  className="overflow-hidden text-[var(--color-bone-600)] font-[family-name:var(--font-sans)] text-sm leading-6"
                  initial={false}
                  animate={{
                    opacity: open ? 1 : 0,
                    height: open ? "auto" : 0,
                    marginTop: open ? 16 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut", opacity: { duration: 0.2 } }}
                  aria-hidden={!open}
                >
                  {faq.answer}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
