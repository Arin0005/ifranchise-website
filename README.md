# iFranchise – Franchise Development Platform

Welcome to the official web platform for **iFranchise** – a premium consultancy connecting ambitious lifestyle and service brands with qualified franchise investors across India.

## About the Project
This platform serves as our digital headquarters. It is engineered to clearly communicate our suite of services (from legal compliance and brand expansion blueprints to investor acquisition) and to serve as a high-conversion lead generation portal for potential franchise partners. We designed this project to reflect our corporate aesthetic: trustworthy, modern, and highly scalable.

## Technology Stack
To ensure maximum performance, top-tier SEO, and a butter-smooth user experience, this platform is built on a modern, bleeding-edge stack:
* **Framework:** [Next.js 14](https://nextjs.org/) using the latest App Router architecture.
* **Core UI:** [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/) for robust, type-safe functional components.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) mapped to our custom brand color palette (`#2D0C57`, `#4B2E83`).
* **Animations:** [Framer Motion](https://www.framer.com/motion/) for premium scroll-linked transitions, hover interactions, and dynamic layout routing.

## Key Highlights & Features
1. **Dynamic Scroll Interfaces:** A responsive, floating navbar and dynamic hero sections that react intuitively to user scroll depth.
2. **Immersive UI/UX:** Fully custom SVG-based motifs, staggered card fade-ins, and marquee logic for our trusted brand partners.
3. **Application Pipeline:** A structured, multi-input lead generation page (`/apply`) that securely captures high-intent investor profiles.
4. **Performance Optimized:** All static assets are served using `next/image` with explicit width/height heuristics to avoid Layout Shifts, guaranteeing top-percentile Core Web Vitals.
5. **Mobile-First Paradigm:** Rigorously tested at standard mobile and tablet breakpoints to ensure zero layout degradation on smaller devices.

## Local Development

Ensure you have Node.js 18+ installed on your system.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

The server will initialize at `http://localhost:3000`. 

## Deployment Setup
This repository is completely stripped of default boilerplate and is 100% ready for production deployment onto Vercel.

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Vercel will automatically detect the Next.js framework.
4. Click **Deploy**.

The project uses a standard `npm run build` step that outputs a highly optimized static/server chunked build.
