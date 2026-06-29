# Portfolio — Kelvin Lima

## Project
Personal portfolio website for Kelvin Lima (kelvinlima.dev), a software developer from Mindelo, Cabo Verde. Built as a showcase for local Cape Verdean market projects and international opportunities.

## Stack
- Astro 5
- Tailwind CSS v4
- Alpine.js (for interactivity: dark mode toggle, i18n toggle, animations)
- TypeScript (strict)
- Fonts: Fraunces (serif, hero) + Inter (body) + JetBrains Mono (code/tags)

## Design tokens
- Background dark: #080b12
- Background panel: #0d1117
- Background card: #0c0f1a
- Accent primary: #0ea5e9 (ocean blue)
- Accent green: #22c55e (available badge)
- Accent amber: #f59e0b
- Accent purple: #a78bfa
- Border default: #1a1e2e
- Border strong: #1e2538
- Text primary: #e8e6e0
- Text muted: #6b7280
- Text subtle: #4b5563

## Sections (in order)
1. Nav — logo (kelvinlima.dev), links (Sobre/Projects/Educação/Contacto), PT/EN toggle, dark/light toggle
2. Hero — split layout: text left + monitor illustration right with animated tech badges
3. Projects — featured card (O Menu CV) + 2 secondary cards (Reklama, Portal de Vagas CV)
4. Education — alternating MUI-style timeline, Oct 2020 → Jun 2024
5. Tech stack — icon grid cards
6. Contact — email + GitHub + LinkedIn
7. Footer

## Hero monitor
- Panel background: linear-gradient(135deg, #0a1628, #0d1f3c) with radial glow
- Monitor displays: "Work smart, not hard." with blinking cursor
- 6 tech badges animate in on load with staggered delays around the monitor:
  Laravel (#fb923c), Alpine.js (#a78bfa), Tailwind (#60a5fa),
  Pest PHP (#22c55e), Vite (#f59e0b), Git (#f05032)

## Education timeline nodes (all Tabler outline icons)
- Oct 2020: ti-flag (ocean blue) — Início da Licenciatura
- 2021: ti-book (purple) — Fundamentos
- 2022: ti-code (amber) — Desenvolvimento web
- 2023: ti-rocket (green) — Projecto final (lroOnline / Reklama)
- Jun 2024: ti-award (ocean blue) — Licenciatura concluída + diploma badge

## Projects data
### O Menu CV (featured)
- Description: Plataforma de descoberta de restaurantes e pré-encomenda de refeições para Cabo Verde.
- Stats: 107 tests, real-time KPI dashboard, Menu da Semana system
- Stack: Laravel 12, Alpine.js, Tailwind v4, Pest PHP
- Tag: Destaque / Featured

### Reklama
- Description: Portal eletrónico de reclamações de consumidores com dashboards para utilizadores, empresas e reguladores.
- Stack: Laravel, AJAX, MySQL
- Tag: Regulação / Regulation

### Portal de Vagas CV
- Description: Portal de emprego com três perfis (Candidato, Empresa, Admin) e ciclo de moderação de vagas.
- Stack: Laravel 12, Tailwind v4
- Tag: Emprego / Employment

## Tech stack cards
- PHP 8.2 · Laravel — ti-brand-php — Backend principal
- Tailwind CSS v4 — ti-palette — Styling
- Alpine.js — ti-bolt — Interactividade
- Pest PHP — ti-test-pipe — Testes
- MySQL · SQLite — ti-database — Bases de dados
- Git · GitHub — ti-brand-git — Versionamento

## Contact
- Email: hello@kelvinlima.dev
- GitHub: github.com/Kelvinlima91
- LinkedIn: linkedin.com/in/kelvinlima

## i18n keys (PT default, EN toggle)
All visible text must support both languages. Key sections:
- available: "Disponível para projectos" / "Available for projects"
- hero_tagline: "Software developer a construir produtos digitais para Cabo Verde" / "Software developer building digital products for Cabo Verde"
- cta_projects: "Ver projectos" / "View projects"
- cta_cv: "CV"
- nav_about: "Sobre" / "About"
- nav_projects: "Projetos" / "Projects"
- nav_education: "Educação" / "Education"
- nav_contact: "Contacto" / "Contact"
- section_projects: "Projectos seleccionados" / "Selected projects"
- section_education: "Educação" / "Education"
- section_stack: "Stack técnica" / "Tech stack"
- section_contact: "Contacto" / "Contact"
- contact_tagline: "Tens um projecto em mente? Fala comigo." / "Have a project in mind? Let's talk."
- diploma_badge: "Diploma obtido" / "Degree obtained"
- featured_tag: "Destaque" / "Featured"

## Rules
- Dark mode by default, persisted in localStorage
- All icons must be Tabler outline icons — no emojis in UI elements
- Single page, anchor-based navigation with smooth scroll
- Sections fade in on scroll (Intersection Observer)
- Hero badges stagger in on page load (400ms base delay, 300ms per badge)
- No external UI libraries — pure Astro + Tailwind + Alpine
- Mobile responsive
- Deploy target: Netlify (static output)
