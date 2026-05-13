import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

export const metadata: Metadata = {
  title: "Etz.org | Automação de Processos para Empresas",
  description:
    "Automatize atendimento, vendas e processos com agentes de IA e software sob medida. A Etz.org ajuda empresas a escalar com eficiência.",
  alternates: {
    canonical: "https://www.etzai.com.br/",
  },
  openGraph: {
    title: "Etz.org | Automação de Processos para Empresas",
    description:
      "Agentes de IA, automações e software sob medida para empresas que querem crescer sem tarefas manuais.",
    url: "https://www.etzai.com.br/",
    siteName: "Etz.org",
    locale: "pt_BR",
    type: "website",
  },
  generator: "Codex",
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.etzai.com.br/#organization",
      name: "Etz.org",
      url: "https://www.etzai.com.br/",
      description: "Agentes de IA, automações e software sob medida para empresas no Brasil.",
      serviceType: ["Agentes de IA", "Automação de processos", "Software sob medida"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.etzai.com.br/#website",
      url: "https://www.etzai.com.br/",
      name: "Etz.org",
      publisher: {
        "@id": "https://www.etzai.com.br/#organization",
      },
      inLanguage: "pt-BR",
    },
    {
      "@type": "Service",
      "@id": "https://www.etzai.com.br/#service",
      name: "Automação de processos para empresas",
      provider: {
        "@id": "https://www.etzai.com.br/#organization",
      },
      areaServed: "BR",
      serviceType: "Automação empresarial, agentes de IA e software sob medida",
      description:
        "Criação de agentes de IA, automações de atendimento, IA para vendas e sistemas inteligentes para negócios.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.etzai.com.br/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "O que é um agente de IA e como ele funciona para empresas?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Um agente de IA para empresas atende clientes, qualifica leads, executa tarefas repetitivas e integra informações com CRM, agenda, financeiro e outros sistemas.",
          },
        },
        {
          "@type": "Question",
          name: "Como funciona a automação de processos personalizada para minha empresa?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A Etz.org mapeia gargalos, prioriza tarefas de maior impacto e cria automações sob medida para reduzir trabalho manual em atendimento, vendas e operação.",
          },
        },
        {
          "@type": "Question",
          name: "O sistema de automação da Etz.org integra com CRM, WhatsApp e ERP?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Sim. As soluções podem integrar CRM, WhatsApp, ERP, plataformas de atendimento, automação de marketing, APIs internas e ferramentas já usadas pela empresa.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto tempo leva para implantar um agente de IA na minha empresa?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "O prazo depende da complexidade e das integrações. O projeto começa com diagnóstico rápido, priorização de entregas e um cronograma claro de implantação.",
          },
        },
        {
          "@type": "Question",
          name: "Como é o suporte pós-implementação da automação?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A Etz.org acompanha a implantação, ajusta fluxos, monitora estabilidade e pode seguir com manutenção, evolução contínua e novas automações.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
