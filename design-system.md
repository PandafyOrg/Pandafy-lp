# Pandafy — Design System v1.0

> A calm system for restless teams.
> Maintained by the Pandafy Design Studio · May 2026

---

## Sumário

1. [Identidade](#1--identidade)
2. [Paleta de Cores](#2--paleta-de-cores)
3. [Tipografia](#3--tipografia)
4. [Espaçamento e Grid](#4--espaçamento-e-grid)
5. [Componentes Base](#5--componentes-base)
6. [Iconografia e Ilustrações](#6--iconografia-e-ilustrações)
7. [Motion & Microinterações](#7--motion--microinterações)
8. [CSS Tokens (Output Final)](#8--css-tokens-output-final)

---

## 1 — Identidade

### O produto
**Pandafy** é um **focus & rituals OS para times criativos** (10–100 pessoas). Pomodoro que realmente vinga, hábitos que aparecem no calendário, retros semanais que cabem em um café.

Vivemos no espaço entre ferramentas de produtividade que exigem que você trabalhe mais e apps de bem-estar que fingem que o trabalho não está acontecendo. Acreditamos que **um panda calmo produz mais que um panda frenético** — e construímos pra isso.

### Tom de voz
| ✅ Pandafy é                    | ❌ Pandafy nunca é                          |
| ------------------------------- | -------------------------------------------- |
| Calmo, não chato                | Hustle, urgência manufaturada                |
| Direto, não esperto             | Trocadilhos empilhados sobre pandas           |
| Caloroso, não infantil          | Confete de emoji, exclamações em série        |
| Específico, não abstrato        | "Revolucione seu workflow"                    |

> Uma linha de copy do Pandafy deve soar como um **amigo que é bom no que faz dando um conselho**. Confiante, sem precisar gritar.

### Público-alvo
- **25–45 anos**, knowledge workers e times criativos
- Designers, devs, PMs, estúdios indie de 10 a 100 pessoas
- Já usaram Notion + Linear. Já tentaram todo app de produtividade do mercado
- Async-friendly, fluentes em ferramentas, conscientes sobre burnout
- Querem **um app que respeite a atenção deles e saia da frente**

### Mascote — Bao
O panda **Bao** aparece **só em momentos significativos**: empty states, marcos (milestones), o eventual erro. Nunca decorativo. Nunca fofo só por ser fofo.

### Princípios de design
1. **Calmo por padrão.** Se um elemento precisa de atenção, ele a conquista; não a exige.
2. **Lima é raridade.** O verde-limão (`#7FF20C`) é poder pela escassez. Um por tela.
3. **Off-whites, nunca puro #FFF.** Toda superfície tem aquecimento.
4. **Motion é resposta, não exibição.** O usuário sempre causa o movimento.
5. **Tokens são lei.** Se um valor não está no sistema, é bug.

---

## 2 — Paleta de Cores

### Roles principais

| Role             | Hex       | RGB             | Token CSS          |
|------------------|-----------|-----------------|--------------------|
| **Primary**      | `#1C4259` | `28, 66, 89`    | `--color-water-500` |
| **Secondary**    | `#0D261F` | `13, 38, 31`    | `--color-forest-600` |
| **Accent / CTA** | `#7FF20C` | `127, 242, 12`  | `--color-bamboo-400` |
| **Support**      | `#60BFA4` | `96, 191, 164`  | `--color-mint-400`   |
| **Soft Accent**  | `#C1F277` | `193, 242, 119` | `--color-bamboo-200` |

#### Quando usar / O que evitar

**`#7FF20C` Bamboo 400 — Accent / CTA**
- ✅ CTA primário, *single* highlight por seção, "a única coisa que deve puxar o olho"
- ❌ Em grandes superfícies, em body text, ou em dois CTAs na mesma tela

**`#1C4259` Water 500 — Primary**
- ✅ Cor da marca no produto, links, focus states, data viz principal
- ❌ Para estados destrutivos ou warnings — passa "confiável" demais

**`#0D261F` Forest 600 — Secondary / Ink**
- ✅ Cor padrão de texto, superfícies escuras, footer, pelagem do Bao
- ❌ Substituir por preto puro `#000` — é estranho ao sistema

**`#60BFA4` Mint 400 — Support**
- ✅ Acentos amigáveis em fundos escuros, success states, chips secundários
- ❌ Em CTAs no lugar do bamboo — falta urgência

**`#C1F277` Bamboo 200 — Soft Highlight**
- ✅ Fundos tonalizados, banners, marcos, fundos de cards de marketing
- ❌ Nunca por bamboo-400 em cima de bamboo-200 — falha de contraste

---

### Escalas (Ramps)

#### Bamboo (accent)
| Token | Hex     | Uso |
|-------|---------|-----|
| 50    | `#F2FCDF` | Highlight bg sutil, dica-do-dia |
| 100   | `#E1FAB3` | Banner de sucesso suave |
| 200   | `#C1F277` | Background tonalizado de card |
| 300   | `#A6EB3D` | Hover de chip bamboo |
| **400** ★ | `#7FF20C` | **CTA — única hierarquia primária** |
| 500   | `#6BD606` | Border de CTA, divisor bamboo |
| 600   | `#54AB04` | Texto em bg bamboo claro |
| 700   | `#3F8004` | — |
| 800   | `#2B5604` | — |
| 900   | `#1B3603` | — |

#### Water (primary)
| Token | Hex     | Uso |
|-------|---------|-----|
| 50    | `#ECF3F8` | Bg de chips info |
| 100   | `#CFDEE9` | — |
| 200   | `#9FBED2` | — |
| 300   | `#6E9EBD` | — |
| 400   | `#427FA7` | — |
| **500** ★ | `#1C4259` | **Primary brand** |
| 600   | `#173649` | Hover do primary |
| 700   | `#112A39` | Texto info forte |
| 800   | `#0C1F2A` | — |
| 900   | `#07131B` | — |

#### Forest (secondary / ink)
| Token | Hex     | Uso |
|-------|---------|-----|
| 50    | `#E7EEEB` | — |
| 100   | `#C2D2CC` | — |
| 200   | `#8FAFA4` | — |
| 300   | `#5C8C7C` | — |
| 400   | `#2E6553` | — |
| 500   | `#194237` | Bg de seção dark "feature" |
| **600** ★ | `#0D261F` | **Ink — texto padrão, dark surfaces** |
| 700   | `#0A1E18` | Códigos, blocos `<pre>` |
| 800   | `#061511` | — |
| 900   | `#030A08` | — |

#### Mint (support)
| Token | Hex     | Uso |
|-------|---------|-----|
| 50    | `#ECF8F4` | Bg de success card |
| 100   | `#D1EFE5` | — |
| 200   | `#A5DECC` | — |
| 300   | `#7DCEB4` | — |
| **400** ★ | `#60BFA4` | **Acento sobre dark** |
| 500   | `#44A98C` | Success semântico |
| 600   | `#348771` | Texto success em bg claro |
| 700   | `#266658` | — |
| 800   | `#19463D` | — |

#### Bone (neutros quentes)
| Token | Hex     | Uso |
|-------|---------|-----|
| 0     | `#FFFFFF` | Surface de cards |
| **50** ★ | `#FAFAF7` | **Background padrão da página** |
| 100   | `#F4F4EF` | Surface sunken, head de comp |
| 200   | `#E8E8DF` | Borders padrão |
| 300   | `#D2D2C5` | Borders fortes |
| 400   | `#ADAD9D` | Disabled text |
| 500   | `#7C7C6E` | `--ink-subtle` |
| 600   | `#545448` | `--ink-muted` |
| 700   | `#38382F` | — |
| 800   | `#1F1F18` | — |
| 900   | `#0E0E0A` | — |

---

### Semantic

| Token | Hex (foreground) | Hex (background) | Uso |
|-------|------------------|------------------|-----|
| `success` | `#44A98C` | `#ECF8F4` | Confirmação, sessão concluída |
| `warning` | `#E8A33A` | `#FBEFD7` | Atenção não-bloqueante |
| `error`   | `#D24B4B` | `#FBEAEA` | Erros, validação, ações destrutivas |
| `info`    | `#427FA7` | `#ECF3F8` | Dicas, sistema |

---

### Background

| Token            | Light       | Dark        | Uso                          |
|------------------|-------------|-------------|------------------------------|
| `surface`        | `#FAFAF7`   | `#0D261F`   | Background da página         |
| `surface-card`   | `#FFFFFF`   | `#194237`   | Cards, painéis flutuantes    |
| `surface-sunken` | `#F4F4EF`   | `#0A1E18`   | Cabeçalhos de comp, secund.  |
| `surface-ink`    | `#0D261F`   | `#FAFAF7`   | Footer, painéis destacados   |

---

## 3 — Tipografia

Sistema de **duas famílias** (Google Fonts):

- **Bricolage Grotesque** — display only. Personalidade onde a personalidade precisa estar (h1–h3, marketing).
- **Geist** — body e UI. Sai do caminho.
- **JetBrains Mono** — código, timestamps, labels instrumentais (overline).

### Escala completa

| Token         | Fonte               | Peso | Tamanho | Line height | Letter-spacing | Uso                            |
|---------------|---------------------|------|---------|-------------|----------------|--------------------------------|
| `display-xl`  | Bricolage Grotesque | 700  | 128px (clamp 64–128) | 120 / .94 | -2.5% | Hero headline                  |
| `display-lg`  | Bricolage Grotesque | 700  | 80px (clamp 44–80)   | 76 / .98  | -2.5% | Section titles                 |
| `display-md`  | Bricolage Grotesque | 600  | 48px (clamp 32–48)   | 52 / 1.05 | -2%   | Page titles                    |
| `heading-lg`  | Bricolage Grotesque | 600  | 32px                | 40 / 1.2  | -1%   | Card titles, modal headers     |
| `heading-md`  | Geist               | 600  | 20px                | 28 / 1.35 | -.5%  | Subseções, settings groups     |
| `heading-sm`  | Geist               | 600  | 16px                | 24 / 1.4  | -.25% | Section labels, table headers  |
| `body-lg`     | Geist               | 400  | 18px                | 28 / 1.55 | 0     | Lede / parágrafo principal     |
| `body-md`     | Geist               | 400  | 16px                | 24 / 1.5  | 0     | Parágrafo padrão               |
| `body-sm`     | Geist               | 400  | 14px                | 22 / 1.55 | 0     | Texto secundário, helper       |
| `caption`     | Geist               | 500  | 12px                | 16 / 1.4  | 0     | Metadata, timestamps           |
| `overline`    | JetBrains Mono      | 500  | 11px                | 16 / 1.5  | +14% UPPER | Tags, eyebrows, instrumentação |

### Regras
- Display sempre com `letter-spacing` negativo.
- Italics da Bricolage usados como acento de marca (palavras "destacáveis" no headline).
- Overline **sempre** caixa alta + mono. É a "instrumentação" do sistema.
- Nunca misturar `Bricolage` com `body-*`. Display é display.

```css
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;500;600;700;800&family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
```

---

## 4 — Espaçamento e Grid

### Escala de espaçamento (base 4px)

| Token        | Px   | Uso típico |
|--------------|------|------------|
| `--space-1`  | 4    | Gap entre ícone e label |
| `--space-2`  | 8    | Padding compacto, gap em chips |
| `--space-3`  | 12   | Padding de input vertical |
| `--space-4`  | 16   | Gap base entre elementos relacionados |
| `--space-6`  | 24   | Padding interno de card |
| `--space-8`  | 32   | Gap entre seções de conteúdo |
| `--space-12` | 48   | Espaçamento entre blocos |
| `--space-16` | 64   | Padding vertical de seção (mobile) |
| `--space-24` | 96   | Padding vertical de seção (desktop) |

> Se um valor não está nesta escala, **é bug**. Sem exceções.

### Grid da landing page

| Breakpoint | Largura      | Colunas | Gutter | Margem | Container max |
|------------|--------------|---------|--------|--------|----------------|
| Mobile     | `< 768px`    | 4       | 16px   | 20px   | —              |
| Tablet     | `768–1024px` | 8       | 20px   | 32px   | 960px          |
| Desktop    | `> 1024px`   | 12      | 24px   | 48px   | 1120px         |
| Wide       | `> 1440px`   | 12      | 32px   | auto   | 1280px         |

### Border radius

| Token         | Px     | Uso |
|---------------|--------|-----|
| `--radius-xs` | 4      | Badges quadradas internas, swatches |
| `--radius-sm` | 8      | Inputs pequenos, btn-sm |
| `--radius-md` | 12     | Botões, inputs, ícones-tile |
| `--radius-lg` | 20     | Cards, surfaces de marketing |
| `--radius-xl` | 28     | Hero containers, banners |
| `--radius-full` | 9999 | Pills, badges, nav-bar circular |

### Elevação (Shadow)

| Token         | Valor |
|---------------|-------|
| `--shadow-xs` | `0 1px 1px rgba(13,38,31,.05)` — divisor sutil |
| `--shadow-sm` | `0 2px 4px rgba(13,38,31,.06), 0 1px 1px rgba(13,38,31,.04)` — card default |
| `--shadow-md` | `0 8px 24px -8px rgba(13,38,31,.18), 0 2px 6px rgba(13,38,31,.06)` — hover, dropdown |
| `--shadow-lg` | `0 24px 48px -12px rgba(13,38,31,.22), 0 4px 10px rgba(13,38,31,.06)` — modal, popover destacado |
| `--shadow-glow` | `0 0 0 4px rgba(127,242,12,.30)` — focus ring (sempre bamboo) |

---

## 5 — Componentes Base

### 1. Button

**Variantes:** `primary` · `secondary` · `ghost` · `destructive`
**Tamanhos:** `sm` (8/14, 13px) · `default` (12/20, 15px) · `lg` (16/26, 17px)

**Estados:** `default` · `hover` · `active` · `focus` (ring bamboo 4px) · `disabled`

| Variant | Background        | Text       | Border       | Hover bg          |
|---------|-------------------|------------|--------------|-------------------|
| Primary | `--color-bamboo-400` | `--color-forest-700` | `--color-bamboo-500` | `--color-bamboo-300` + shadow bamboo |
| Secondary | `--color-forest-600` | `--color-bone-0` | `--color-forest-700` | `--color-forest-500` |
| Ghost   | `transparent`     | `--ink`    | `--color-bone-300` | `--color-bone-100`, border `--color-forest-300` |
| Destructive | `--color-error` | `#FFFFFF` | `#B33B3B`    | `#BA3F3F`         |

```html
<button class="btn btn-primary">Start a focus session</button>
<button class="btn btn-secondary">View timeline</button>
<button class="btn btn-ghost">Maybe later</button>
<button class="btn btn-destructive">Delete workspace</button>
```

**Tokens:** padding `12 20`, radius `--radius-md`, font Geist 600 / 15px, transição `--transition-fast`. Focus = `--shadow-glow`.

---

### 2. Input / Form Field

**Estados:** default · hover · focus (border `--color-forest-500` + glow bamboo) · filled · disabled · error

```html
<div class="field">
  <label class="label">Work email</label>
  <input class="input" type="email" placeholder="you@studio.com" />
  <span class="help">We'll send a magic link.</span>
</div>
```

**Tokens:** padding `12 14`, border `1.5px --color-bone-300`, radius `--radius-md`, font Geist 15px.

- **Hover:** border `--color-forest-300`
- **Focus:** border `--color-forest-500` + `--shadow-glow`
- **Error:** border `--color-error`, helper em `--color-error`
- **Disabled:** bg `--color-bone-100`, text `--ink-subtle`, sem hover

---

### 3. Badge / Tag

**Variantes:** `neutral` · `bamboo` · `water` · `mint` · `warn` · `error`

```html
<span class="badge badge-bamboo"><span class="bdot"></span>Active</span>
<span class="badge badge-mint"><span class="bdot"></span>Completed</span>
<span class="badge badge-err">Overdue</span>
```

**Tokens:** padding `4 10`, radius `--radius-full`, font Geist 600 / 12px, opcional `bdot` 6×6 round antes do texto.

---

### 4. Card

**Variantes:** `default` · `hoverable` (eleva no hover) · `featured` (dark, fundo forest-600)

```html
<div class="card hoverable">
  <span class="badge badge-bamboo">Live</span>
  <h5>Deep work, Tuesday</h5>
  <p>Three 50-minute focus blocks. Slack muted automatically.</p>
</div>
```

**Tokens:** bg `--color-bone-0`, border `1px --color-bone-200`, radius `--radius-lg`, padding `22`, `--shadow-sm`. Hover (se hoverable): `translateY(-2px)` + `--shadow-md`. Transição `--transition-base`.

**Anatomia:** opcional badge no topo → título `heading-lg` (Bricolage 600 / 19px) → descrição `body-sm` em `--ink-muted`.

---

### 5. Navigation Bar

```html
<nav class="nav-demo">
  <div class="nav-left">
    <div class="brand"><svg>…</svg> Pandafy</div>
    <div class="nav-links">
      <a class="active">Product</a><a>Habits</a><a>Pricing</a>
    </div>
  </div>
  <div class="nav-right">
    <button class="btn btn-ghost btn-sm">Sign in</button>
    <button class="btn btn-primary btn-sm">Get started</button>
  </div>
</nav>
```

**Tokens:** padding `14 20`, radius `--radius-full`, bg `rgba(255,255,255,.85)` + `backdrop-filter: blur(10px)`, border `1px --color-bone-200`. Fica sticky com `top: 12px` em marketing.

**Estados de link:** muted (`--ink-muted`) → hover ink → active ink + (opcional) dot bamboo abaixo.

---

### 6. Hero Section

**Anatomia:**
1. `eyebrow` (overline + dot bamboo)
2. `display-lg` headline com uma palavra italica em accent (italic Bricolage 500 + sublinhado bamboo skewX(-6deg))
3. `body-lg` lede (max 540px)
4. Linha de CTAs: `btn-primary btn-lg` + `btn-ghost btn-lg`
5. Strip de confiança em overline

**Background:** `radial-gradient` bamboo a 80% 0% + mint a 0% 100% sobre `--surface`.

---

### 7. Feature Block

```html
<div class="feature">
  <div class="icon">/* svg outline */</div>
  <h6>Focus sessions</h6>
  <p>Timeboxed deep work with a forest that grows quietly in your sidebar.</p>
</div>
```

**Tokens:** padding `26`, border `1px --color-bone-200`, radius `--radius-lg`, bg `--color-bone-0`.

**Ícone:** tile 44×44, radius `--radius-md`, com bg tonalizado da família escolhida — `bamboo`, `water` (alt), `mint` (alt2), `forest` (dark).

---

### 8. Testimonial Card

**Variantes:** `dark` (forest-600, padrão de marketing) · `light` (bone-0, alternativa)

```html
<div class="testimonial">
  <span class="mark">"</span>
  <p class="quote">Pandafy is the first productivity tool my team didn't quietly stop using by week three.</p>
  <div class="who">
    <div class="avatar">MK</div>
    <div class="meta"><b>Maya Kowalski</b><span>Head of Design · Forager</span></div>
  </div>
</div>
```

**Tokens:** padding `32`, radius `--radius-lg`, quote em `heading-lg` (display 500). Aspas decorativas opcionais (`mark`) em bamboo a 18% de opacidade. Avatar 44×44 com gradient mint→bamboo.

---

### 9. Pricing Card

**Variantes:** `default` · `featured` (fundo forest-600 + ribbon bamboo)

```html
<div class="price featured">
  <span class="ribbon">Most loved</span>
  <div class="tier">Team</div>
  <h6>Bamboo</h6>
  <div class="amount">$12<sub>/ user / mo</sub></div>
  <p class="desc">For teams of 5–50 finding their rhythm.</p>
  <ul>
    <li>Everything in Sprout</li>
    <li>Shared focus rooms</li>
    <li>Weekly retros, auto-prepped</li>
  </ul>
  <button class="btn btn-primary cta">Start 14-day trial</button>
</div>
```

**Anatomia:**
- `tier` overline (`Solo` / `Team` / `Org`)
- `heading-lg` (nome do plano — sempre uma palavra do bioma: Sprout, Bamboo, Forest)
- `amount` em `display-md` (Bricolage 700) com `sub` body-sm
- 1 linha de descrição
- Lista com bullet bamboo
- CTA grudado no bottom (`margin-top: auto`)

---

### 10. Footer

**Variantes:** `forest` (dark, padrão) · `bone` (light, alternativa)

```html
<footer class="footer-demo">
  <div class="cols">
    <div class="brand-col">
      <div class="brand-line">Pandafy</div>
      <p>A calm system for restless teams.</p>
    </div>
    <div><h6>Product</h6><ul>…</ul></div>
    <div><h6>Company</h6><ul>…</ul></div>
    <div><h6>Resources</h6><ul>…</ul></div>
  </div>
  <div class="bottom">© 2026 Pandafy Inc. · v 1.0</div>
</footer>
```

**Tokens:** padding `40`, radius `--radius-lg` (em marketing), bg `--color-forest-600`, text `--color-bone-100`. Divisor inferior `1px --color-forest-500`. Headings de coluna em **overline** (`--mint-300`).

---

## 6 — Iconografia e Ilustrações

### Ícones

- **Estilo:** outline puro, **stroke 1.75px**, line-caps e joins **round**
- **Grid:** desenhados em viewBox `24×24`
- **Cor:** herdam `currentColor`. Nunca usar gradiente, nunca duotone, nunca filled
- **Tamanhos canônicos:** `14px` · `16px` · `20px` · `24px` (padrão) · `32px`

### Regras
- 1 conceito por ícone. Se precisar de dois, são dois ícones.
- Nunca mixar outline e filled na mesma tela.
- Em CTAs, ícone fica à esquerda do texto, gap `8px`.
- Ícones em ícone-tile (Feature Block) ocupam tile `44×44` com bg tonalizado da família.

### Ilustrações & mascote
- **Bao** (panda) só em **empty states**, **marcos** e **erros raros**. Desenhado a partir de formas geométricas (círculos + elipses + 1 path). Apenas `--color-forest-600`, `--color-bone-50` e `--color-bamboo-400`.
- Cenas maiores: geometria plana, paleta restrita ao sistema, sem isométrico, sem 3D.
- **Sem stock illustrations.**

### Fotografia
- Luz natural, pessoas reais. **Nunca** "alguém rindo de um laptop".
- Color grade levemente quente (cast bone/mint), nunca saturações altas.
- Crop generoso para respiro. Fotos sempre dentro de `--radius-lg`.

---

## 7 — Motion & Microinterações

Motion no Pandafy deve **parecer algo que o usuário fez**, nunca o app se exibindo. Default para curvas curtas e soft-out. Spring é reservado para momentos celebratórios.

### Durações & easings

| Token              | Duração | Easing                          | Uso |
|--------------------|---------|--------------------------------|-----|
| `--transition-fast` | 120ms  | `ease-out`                      | Hover, focus, color shift |
| `--transition-base` | 220ms  | `cubic-bezier(.2,.7,.2,1)`      | Card hover, button state, tooltip enter |
| `--transition-slow` | 420ms  | `cubic-bezier(.34,1.56,.64,1)` (spring) | Modal open, milestone reveal, mascote |
| `page-transition`   | 280ms  | `ease-out`                      | Route change (fade + 8px y) |

### Regras
- **Hover de botão:** só cor + shadow, **nunca scale**.
- **Focus:** sempre o mesmo ring bamboo (`--shadow-glow`). Nunca esconder.
- **Active:** `translateY(1px) scale(.99)` — sutil, 120ms.
- **Modal:** entra com fade 220ms + `translateY(8px)` spring. Sai com fade 120ms linear.
- **Mascote (Bao):** entra com spring 420ms + rotate ±4°. Aparece **uma vez por evento**, nunca em loop.

### Nunca animar
- Carrousels que rodam sozinhos
- Scrolljacking / parallax pesado
- "Wow" animations a cada interação trivial
- Loading spinners decorativos quando o estado real é < 200ms
- Texto que digita sozinho em letras

---

## 8 — CSS Tokens (Output Final)

```css
:root {
  /* ───────── Color: Bamboo (accent / CTA) ───────── */
  --color-bamboo-50:  #F2FCDF;
  --color-bamboo-100: #E1FAB3;
  --color-bamboo-200: #C1F277;
  --color-bamboo-300: #A6EB3D;
  --color-bamboo-400: #7FF20C; /* ★ CTA */
  --color-bamboo-500: #6BD606;
  --color-bamboo-600: #54AB04;
  --color-bamboo-700: #3F8004;
  --color-bamboo-800: #2B5604;
  --color-bamboo-900: #1B3603;

  /* ───────── Color: Water (primary) ───────── */
  --color-water-50:  #ECF3F8;
  --color-water-100: #CFDEE9;
  --color-water-200: #9FBED2;
  --color-water-300: #6E9EBD;
  --color-water-400: #427FA7;
  --color-water-500: #1C4259; /* ★ Primary */
  --color-water-600: #173649;
  --color-water-700: #112A39;
  --color-water-800: #0C1F2A;
  --color-water-900: #07131B;

  /* ───────── Color: Forest (secondary / ink) ───────── */
  --color-forest-50:  #E7EEEB;
  --color-forest-100: #C2D2CC;
  --color-forest-200: #8FAFA4;
  --color-forest-300: #5C8C7C;
  --color-forest-400: #2E6553;
  --color-forest-500: #194237;
  --color-forest-600: #0D261F; /* ★ Ink */
  --color-forest-700: #0A1E18;
  --color-forest-800: #061511;
  --color-forest-900: #030A08;

  /* ───────── Color: Mint (support) ───────── */
  --color-mint-50:  #ECF8F4;
  --color-mint-100: #D1EFE5;
  --color-mint-200: #A5DECC;
  --color-mint-300: #7DCEB4;
  --color-mint-400: #60BFA4; /* ★ */
  --color-mint-500: #44A98C;
  --color-mint-600: #348771;
  --color-mint-700: #266658;
  --color-mint-800: #19463D;

  /* ───────── Color: Bone (warm neutrals) ───────── */
  --color-bone-0:   #FFFFFF;
  --color-bone-50:  #FAFAF7; /* ★ surface */
  --color-bone-100: #F4F4EF;
  --color-bone-200: #E8E8DF;
  --color-bone-300: #D2D2C5;
  --color-bone-400: #ADAD9D;
  --color-bone-500: #7C7C6E;
  --color-bone-600: #545448;
  --color-bone-700: #38382F;
  --color-bone-800: #1F1F18;
  --color-bone-900: #0E0E0A;

  /* ───────── Semantic ───────── */
  --color-success:    #44A98C;
  --color-success-bg: #ECF8F4;
  --color-warning:    #E8A33A;
  --color-warning-bg: #FBEFD7;
  --color-error:      #D24B4B;
  --color-error-bg:   #FBEAEA;
  --color-info:       #427FA7;
  --color-info-bg:    #ECF3F8;

  /* ───────── Surface aliases ───────── */
  --surface:        var(--color-bone-50);
  --surface-card:   var(--color-bone-0);
  --surface-sunken: var(--color-bone-100);
  --surface-ink:    var(--color-forest-600);
  --ink:            var(--color-forest-600);
  --ink-muted:      var(--color-bone-600);
  --ink-subtle:     var(--color-bone-500);
  --border:         var(--color-bone-200);
  --border-strong:  var(--color-bone-300);

  /* ───────── Typography ───────── */
  --font-display: "Bricolage Grotesque", Georgia, serif;
  --font-sans:    "Geist", ui-sans-serif, system-ui, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, monospace;

  --text-display-xl: clamp(64px, 8.4vw, 128px);
  --text-display-lg: clamp(44px, 5.6vw, 80px);
  --text-display-md: clamp(32px, 3.4vw, 48px);
  --text-heading-lg: 2rem;       /* 32 */
  --text-heading-md: 1.25rem;    /* 20 */
  --text-heading-sm: 1rem;       /* 16 */
  --text-body-lg:    1.125rem;   /* 18 */
  --text-body-md:    1rem;       /* 16 */
  --text-body-sm:    0.875rem;   /* 14 */
  --text-caption:    0.75rem;    /* 12 */
  --text-overline:   0.6875rem;  /* 11 */

  /* ───────── Spacing (base 4px) ───────── */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-6:  24px;
  --space-8:  32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;

  /* ───────── Radius ───────── */
  --radius-xs:   4px;
  --radius-sm:   8px;
  --radius-md:   12px;
  --radius-lg:   20px;
  --radius-xl:   28px;
  --radius-full: 9999px;

  /* ───────── Shadow ───────── */
  --shadow-xs:   0 1px 1px rgba(13,38,31,.05);
  --shadow-sm:   0 2px 4px rgba(13,38,31,.06), 0 1px 1px rgba(13,38,31,.04);
  --shadow-md:   0 8px 24px -8px rgba(13,38,31,.18), 0 2px 6px rgba(13,38,31,.06);
  --shadow-lg:   0 24px 48px -12px rgba(13,38,31,.22), 0 4px 10px rgba(13,38,31,.06);
  --shadow-glow: 0 0 0 4px rgba(127,242,12,.30);

  /* ───────── Motion ───────── */
  --ease-out:       cubic-bezier(.2, .7, .2, 1);
  --ease-spring:    cubic-bezier(.34, 1.56, .64, 1);
  --transition-fast: 120ms var(--ease-out);
  --transition-base: 220ms var(--ease-out);
  --transition-slow: 420ms var(--ease-spring);
}
```

---

## Apêndice — Princípios de uso

1. **Um CTA por tela.** Bamboo é poder pela escassez.
2. **Off-whites sempre.** `#FFF` puro é estranho ao sistema; use `--color-bone-0` para cards e `--color-bone-50` para superfícies.
3. **Display ≠ body.** Nunca misture Bricolage Grotesque com tamanhos de body. Display é display.
4. **Tokens são lei.** Nenhum valor "no olho". Se não está no sistema, é bug.
5. **Mascote é raro.** Bao só em momentos significativos. Decoração mata o significado.
6. **Motion responde.** O usuário causa o movimento — sempre.
7. **Focus ring sagrado.** Nunca esconder, nunca trocar. Bamboo glow, 4px, sempre.

---

*Fim do documento · Pandafy Design System v1.0 · May 2026*
*Maintained by the Pandafy Design Studio — internal use.*
