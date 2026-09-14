# Dr. Carl Heckmann — Personal Platform (www.oubou68.de)

[![Frontend: React 19](https://img.shields.io/badge/Frontend-React%2019-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![Backend: NestJS 12](https://img.shields.io/badge/Backend-NestJS%2012-e0234e?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tooling: Vite](https://img.shields.io/badge/Tooling-Vite-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![LinkedIn: Dr. Carl Heckmann](https://img.shields.io/badge/LinkedIn-Carl%20Heckmann-0a66c2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carl-heckmann-21273631/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Official personal platform of **Dr. Carl Heckmann** ([oubou68.de](https://www.oubou68.de)). Executive leader, digital strategist, and software architect operating at the convergence of the **Energy Transition (Energiewende)**, **Business Process Optimization (IT Ambidexterity)**, and **Autonomous AI Agents**.

---

## Strategic Pillars

### 1. ⚡ Utilities & NextGen Energy Markets
- **Dynamic Tariffs (§ 41a EnWG)**: 15-minute time-series pricing coupled directly with EPEX Spot Day-Ahead and Intraday exchange spreads.
- **Smart Meter Gateway Ingestion**: High-throughput parsing of BSI TR-03109 compliant iMSys meters (TAF 1 through TAF 14).
- **NextGen Energy Billing Engine (EBE-DE)**: Modular, cloud-native billing and invoicing core replacing legacy monolithic architectures.
- **Market Communication**: Seamless compliance with BNetzA MaKo 2024/2026, AS4, EDIFACT (INVOIC, MSCONS), and electronic invoicing (XRechnung / ZUGFeRD).

### 2. ⚙️ Business Process Optimization & IT Ambidexterity
- **IT Ambidexterity Leadership**: Research-backed methodologies (KIT / University of Mannheim) balancing high-efficiency operational exploitation with high-velocity digital exploration.
- **BPO Modernization**: Automating mission-critical workflows across energy supplier switching, meter-to-cash, and market clearing.
- **Straight-Through Processing (STP)**: Eliminating manual exception backlogs via deterministic rule engines and automated plausibility checks.
- **Industry Standards**: Active leadership within the **BEMD** (Bundesverband der Energiemarktdienstleister e.V.).

### 3. 🤖 Autonomous AI Agents & Multi-Agent Swarms
- **Multi-Agent Collaborative Workflows**: Coordinated specialized agent swarms (Ingestion, Sentinel, Reconciler) executing asynchronous resolution tasks.
- **Autonomous Billing Anomaly Clearing**: Self-healing discrepancy handling in high-frequency 15-minute utility streams.
- **Conversational Energy Systems**: Intelligent conversational agents guiding consumers through consumption feedback and smart demand shifting.
- **Deterministic Financial Guardrails**: Hybrid architectures combining LLM reasoning with strict GoBD and regulatory audit trails.

---

## Interactive Features & UX Innovations

- **Neural Mesh Canvas**: High-performance 60fps HTML5 canvas rendering an interactive constellation mesh representing energy grids and neural networks reacting to mouse movement.
- **Live Multi-Agent Utility Pipeline Simulator**: Real-time simulation demonstrating autonomous agent collaboration during an EPEX Spot volatility spike and smart meter reconciliation with streaming terminal logs.
- **Strategic Bento Grid**: Frosted glass cards with glowing accent borders, interactive category filtering, and micro-animations.
- **Live Backend Telemetry**: Real-time monitor querying the NestJS backend (`/api/health`) for latency, uptime, and memory statistics.
- **Interactive Contact Pipeline**: Validated inquiry form dispatching structured payloads directly to the NestJS API (`/api/contact`).

---

## Repository Architecture

```
www.oubou68.de/
├── client/                     # Frontend Application (React 19 + TypeScript + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── ParticleMesh.tsx      # 60fps HTML5 Canvas constellation mesh
│   │   │   ├── Navbar.tsx            # Navigation, status pill, LinkedIn quick link
│   │   │   ├── Hero.tsx              # Executive mission statement & CTAs
│   │   │   ├── PillarsSection.tsx    # Interactive Bento Grid for Utilities, Process & AI
│   │   │   ├── AgentSimulator.tsx    # Live multi-agent utility pipeline simulator
│   │   │   ├── TechStack.tsx         # Engineering stack badges
│   │   │   ├── TelemetryMonitor.tsx  # Live NestJS health metrics
│   │   │   ├── ContactSection.tsx    # Validated executive inquiry form
│   │   │   └── Footer.tsx            # Platform credits, LinkedIn, GitHub
│   │   ├── App.tsx                   # State orchestration
│   │   ├── index.css                 # Bespoke Vanilla CSS design system
│   │   └── main.tsx
│   ├── index.html                    # SEO metadata, OpenGraph tags, Google Fonts
│   └── vite.config.ts                # Dev server with /api proxy
├── server/                     # Backend REST API (NestJS 12 + TypeScript)
│   ├── src/
│   │   ├── health/                   # HealthController (/api/health)
│   │   ├── project/                  # ProjectController (/api/project - Carl Heckmann metadata)
│   │   ├── contact/                  # ContactController (/api/contact)
│   │   ├── app.module.ts
│   │   └── main.ts                   # Global /api prefix, CORS, Swagger OpenAPI
│   └── tsconfig.json
├── package.json                # Monorepo task orchestration
├── .gitignore
├── LICENSE
└── README.md
```

---

## Quickstart

### Prerequisites
- Node.js v20+ (v24 LTS recommended)
- npm v10+

### Development Mode

Run both the React frontend and NestJS backend concurrently:

```bash
npm run dev
```

- **Frontend Client**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:3000/api](http://localhost:3000/api)
- **Swagger Documentation**: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

### Production Build

```bash
npm run build
```

---

## Professional Links

- **LinkedIn**: [https://www.linkedin.com/in/carl-heckmann-21273631/](https://www.linkedin.com/in/carl-heckmann-21273631/)
- **GitHub**: [https://github.com/oubou68](https://github.com/oubou68)
- **Platform Domain**: [https://www.oubou68.de](https://www.oubou68.de)

---

## License

This project is licensed under the [MIT License](LICENSE).
