"use client"

import { useState } from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "O que é um agente de IA e como ele funciona para empresas?",
      answer:
        "Um agente de IA para empresas atende clientes, qualifica leads, responde dúvidas, executa tarefas repetitivas e envia informações para CRM, agenda, financeiro ou outros sistemas. Na prática, ele trabalha como uma camada inteligente entre a demanda do cliente e a operação da empresa.",
    },
    {
      question: "Como funciona a automação de processos personalizada para minha empresa?",
      answer:
        "A Etz.org mapeia os gargalos atuais, identifica tarefas manuais de maior impacto e cria fluxos sob medida para atendimento, vendas e operação. A automação de processos é integrada às ferramentas que a empresa já usa sempre que isso acelera o resultado.",
    },
    {
      question: "O sistema de automação da Etz.org integra com CRM, WhatsApp e ERP?",
      answer:
        "Sim. O sistema de automação pode integrar CRM, WhatsApp, ERP, plataformas de atendimento, automação de marketing, APIs internas e outras ferramentas já presentes na rotina da empresa.",
    },
    {
      question: "Quanto tempo leva para implantar um agente de IA na minha empresa?",
      answer:
        "O prazo depende da complexidade, das integrações e da maturidade do processo atual. Em geral, começamos com um diagnóstico rápido, priorizamos a entrega de maior impacto e estruturamos um cronograma claro antes da implantação.",
    },
    {
      question: "Como é o suporte pós-implementação da automação?",
      answer:
        "A Etz.org acompanha a implantação, ajusta fluxos, monitora estabilidade e dá suporte para manter a automação gerando resultado. Dependendo do projeto, também seguimos com evolução contínua, manutenção e novas automações.",
    },
  ]

  return (
    <section id="faq" className="relative overflow-hidden pb-120 pt-24">
      {/* Background blur effects */}
      <div className="bg-primary/20 absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>
      <div className="bg-primary/20 absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>

      <div className="z-10 container mx-auto px-4">

        <motion.h2
          className="mx-auto mt-6 max-w-xl text-center text-4xl font-medium md:text-[54px] md:leading-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Perguntas frequentes sobre{" "}
          <span className="bg-gradient-to-b from-[#0D261F] via-[#1C4259] to-[#60BFA4] bg-clip-text text-transparent">
            automação e agentes de IA
          </span>
        </motion.h2>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="cursor-pointer rounded-2xl border border-[#1C4259]/10 bg-gradient-to-b from-white to-[#f8fcfa] p-6 shadow-[0_12px_32px_rgba(28,66,89,0.06)] transition-all duration-300 hover:border-[#60BFA4]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleItem(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  toggleItem(index)
                }
              }}
              {...(index === faqs.length - 1 && { "data-faq": faq.question })}
            >
              <div className="flex items-start justify-between">
                <h3 className="m-0 font-medium pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className=""
                >
                  {openItems.includes(index) ? (
                    <MinusIcon className="text-primary h-6 w-6 flex-shrink-0 transition duration-300" />
                  ) : (
                    <PlusIcon className="text-primary h-6 w-6 flex-shrink-0 transition duration-300" />
                  )}
                </motion.div>
              </div>
              <motion.div
                className="overflow-hidden text-muted-foreground leading-relaxed"
                initial={false}
                animate={{
                  opacity: openItems.includes(index) ? 1 : 0,
                  height: openItems.includes(index) ? "auto" : 0,
                  marginTop: openItems.includes(index) ? 16 : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  opacity: { duration: 0.2 },
                }}
                aria-hidden={!openItems.includes(index)}
              >
                {faq.answer}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
