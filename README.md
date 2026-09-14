# www.oubou68.de

[![Frontend: React](https://img.shields.io/badge/Frontend-React%2019-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![Backend: NestJS](https://img.shields.io/badge/Backend-NestJS%2011-e0234e?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tooling: Vite](https://img.shields.io/badge/Tooling-Vite-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, high-performance full-stack web application for **www.oubou68.de**, combining a responsive **React** single-page application built on Vite with a robust **NestJS** TypeScript enterprise backend.

---

## Architecture Overview

```
www.oubou68.de/
├── client/                     # Frontend Application
│   ├── src/
│   │   ├── components/         # Modular UI components (Hero, Features, Live Monitor, Contact)
│   │   ├── index.css           # Modern design system (Dark mode, glassmorphism, glowing gradients)
│   │   ├── App.tsx             # Interactive dashboard and portfolio view
│   │   └── main.tsx
│   ├── index.html              # SEO-optimized HTML with modern Google Fonts
│   └── vite.config.ts
├── server/                     # Backend REST API
│   ├── src/
│   │   ├── health/             # Health metrics (/api/health)
│   │   ├── project/            # Project info & status (/api/project)
│   │   ├── contact/            # Interactive contact endpoint (/api/contact)
│   │   ├── app.module.ts
│   │   └── main.ts             # Global '/api' prefix, CORS, Swagger OpenAPI
│   └── tsconfig.json
├── package.json                # Monorepo task orchestration
└── README.md
```

---

## Features

- **Dynamic Frontend Interface**:
  - Curated dark aesthetic with glowing accents (`indigo`, `cyan`, `fuchsia`).
  - Glassmorphic translucent cards, responsive grid, smooth micro-animations.
  - Live backend health & metrics monitor (real-time ping, uptime, memory, latency).
  - Modern typography powered by *Plus Jakarta Sans* and *JetBrains Mono*.
  - Strict SEO optimization with semantic tags, OpenGraph meta, and responsive accessibility.
  - Interactive contact messaging connected to the NestJS backend.

- **Enterprise NestJS API**:
  - Global `/api` prefix with cross-origin resource sharing (CORS) pre-configured.
  - Swagger / OpenAPI documentation ready at `/api/docs`.
  - Structured modular design:
    - `GET /api/health` - Live system status, uptime, node metrics.
    - `GET /api/project` - Application metadata, stack specs, and release info.
    - `POST /api/contact` - Validated contact inquiries with structured feedback.
  - Automated unit and integration test coverage.

---

## Quickstart

### Prerequisites

- [Node.js](https://nodejs.org/) v20+ (v24 LTS recommended)
- `npm` v10+

### 1. Install Dependencies

Install all root, client, and server dependencies in one step:

```bash
npm run install:all
```

### 2. Development Mode

Run both the React frontend and NestJS backend concurrently:

```bash
npm run dev
```

- **Frontend Client**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:3000/api](http://localhost:3000/api)
- **Swagger Documentation**: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

### 3. Production Build

Build both frontend and backend for production:

```bash
npm run build
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Returns service health, uptime, timestamp, and memory statistics |
| `GET` | `/api/project` | Returns project details, tech stack info, and feature list |
| `POST` | `/api/contact` | Submits an inquiry message with sender details |
| `GET` | `/api/docs` | Interactive Swagger / OpenAPI documentation UI |

---

## License

This project is open source and available under the [MIT License](LICENSE).
