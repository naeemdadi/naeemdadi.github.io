export const portfolio = {
  name: "Naeem Dadi",
  role: "Senior Full Stack Engineer",
  tagline:
    "I take products from idea to production: sharp interfaces, solid backends and the infra that keeps them reliable.",
  email: "naeemdadi85@gmail.com",
  resumeUrl: `${process.env.PUBLIC_URL}/resume.pdf`,
  location: "Vadodara, India",
  profiles: [
    {
      network: "GitHub",
      url: "https://github.com/naeemdadi",
    },
    {
      network: "LinkedIn",
      url: "https://www.linkedin.com/in/naeemdadi/",
    },
    {
      network: "X",
      url: "https://x.com/naeem_dadi",
    },
  ],
  about: [
    "I've spent the last five years building SaaS for real customers: FinTech platforms, multi-tenant healthcare products, AI content tools and automated website publishing.",
    "What I care about most is ownership. I like shaping the architecture, shipping the feature and staying with it through performance, deployment and production quirks. Lately that has meant more platform work: Cloudflare, AWS, deployment automation and AI-assisted workflows woven into the product itself.",
  ],
  projects: [
    {
      name: "Impact Analysis",
      summary:
        "AI-powered change intelligence that analyzes pull requests, maps affected application areas, and recommends what to verify before merge.",
      tech: ["TypeScript", "Shell"],
      url: "https://impact-analysis-yiyj.onrender.com/",
      githubUrl: "https://github.com/naeemdadi/impact-analysis",
    },
    {
      name: "Insomanager",
      summary:
        "Insolvency software for attorneys to manage consumer and company insolvency cases, including debtors, creditors, claims, payment plans, and legal document generation.",
      tech: ["Next.js", "TypeScript", "tRPC", "Drizzle", "PostgreSQL"],
      url: "http://insomanager.vercel.app/",
    },
  ],
  experience: [
    {
      company: "Hero Pages",
      location: "Germany (Remote)",
      roles: [
        {
          position: "Senior Software Engineer",
          start: "2026/02",
          end: "2026/07",
          featured: true,
          story:
            "Joined as an early engineer on an AI-powered website publishing SaaS. Worked directly with the CTO to turn hosting, deploys and site generation into a platform instead of a pile of manual steps.",
          wins: [
            {
              title: "Edge hosting",
              detail:
                "Cloudflare Workers, KV, R2 and Wrangler serving customer sites with custom domains and automated DNS.",
            },
            {
              title: "Publish pipeline",
              detail:
                "R2 deploys, KV metadata, preview subdomains and routing that needed almost no hand-holding.",
            },
            {
              title: "Production foundation",
              detail:
                "Coolify on DigitalOcean plus a Turborepo setup for Next.js and Node services.",
            },
            {
              title: "Site generation",
              detail:
                "Backend automation that researched existing websites and generated new ones from templates.",
            },
          ],
          tech: [
            "Next.js",
            "Node.js",
            "TypeScript",
            "Cloudflare",
            "Coolify",
            "Turborepo",
          ],
        },
      ],
    },
    {
      company: "Wednesday Solutions",
      location: "Pune, India",
      roles: [
        {
          position: "Senior Software Engineer",
          start: "2024/04",
          end: "2026/02",
          featured: true,
          story:
            "Moved between two products with very different constraints: an AI content marketing SaaS for financial advisors, and a large enterprise FinTech platform. On both, I owned features from design through production.",
          wins: [
            {
              title: "Content discovery",
              detail:
                "Ingested Instagram, YouTube and TikTok, generated AssemblyAI transcripts, and ranked posts by engagement and breakout score.",
            },
            {
              title: "Multi-profile billing",
              detail:
                "One account, many business profiles, with Stripe charging per paid profile.",
            },
            {
              title: "Referral rewards",
              detail:
                "Configurable credit tiers through Stripe so reward strategy could change without code deploys.",
            },
            {
              title: "AI onboarding",
              detail:
                "Tavily, OpenAI and n8n researched customer websites and pre-filled workspaces automatically.",
            },
            {
              title: "Document intelligence",
              detail:
                "OCR plus OpenAI turned unstructured documents into structured business data.",
            },
            {
              title: "Live AI operations",
              detail:
                "Plan changes, token allocation and realtime notifications for long-running AI jobs.",
            },
            {
              title: "FinTech performance",
              detail:
                "Migrated key pages from CSR to SSG and cleaned up OpenSearch analytics after production search pain.",
            },
          ],
          tech: [
            "React",
            "Next.js",
            "TypeScript",
            "Supabase",
            "Stripe",
            "OpenSearch",
            "n8n",
          ],
        },
        {
          position: "Software Engineer",
          start: "2022/01",
          end: "2024/04",
          featured: false,
          story:
            "Helped grow a veterinary SaaS from one country into a multi-tenant product for clinics and pet owners across Southeast Asia. A lot of the work sat at the messy edges: localization, scheduling, telemedicine and payments.",
          wins: [
            {
              title: "Regional expansion",
              detail:
                "Singapore, Indonesia and Hong Kong via localization, multilingual support and country-specific rules.",
            },
            {
              title: "Digital dispensary",
              detail:
                "Clinic inventory, prescribing from platform or clinic stock, and bulk Excel imports.",
            },
            {
              title: "Consultations that worked",
              detail:
                "Timezone-safe scheduling plus Zoom, Stripe, Midtrans, email and WhatsApp in one flow.",
            },
          ],
          tech: [
            "React",
            "Node.js",
            "GraphQL",
            "PostgreSQL",
            "Stripe",
            "Zoom SDK",
          ],
        },
      ],
    },
    {
      company: "eCare Infoway LLP",
      location: "Vadodara, India",
      roles: [
        {
          position: "Frontend Developer",
          start: "2021/03",
          end: "2021/09",
          featured: false,
          story:
            "Built responsive client sites and custom UI for small business projects, mostly in JavaScript, PHP and WordPress.",
          wins: [],
          tech: ["JavaScript", "PHP", "WordPress"],
        },
      ],
    },
  ],
  writing: [
    {
      title: "Know What to Verify Before Merging",
      summary:
        "Building PR Impact Analysis: a GitHub App that traces PR changes through a JS/TS dependency graph and posts an evidence-backed verification plan before merge.",
      date: "2026/07",
      publication: "Hashnode",
      url: "https://naeemdadi.hashnode.dev/know-what-to-verify-before-merging",
    },
    {
      title: "Node App Integration Tests with Docker, Redis & PostgreSQL",
      summary:
        "How to run Node.js integration tests against real Redis and PostgreSQL with Docker Compose, Jest setup, and GitHub Actions image caching.",
      date: "2025/07",
      publication: "Wednesday Solutions",
      url: "https://www.wednesday.is/writing-tutorials/integration-tests-for-node-applications-with-docker-images-redis-and-postgresql",
    },
  ],
  skills: [
    {
      group: "Languages",
      items: ["TypeScript", "JavaScript", "SQL"],
    },
    {
      group: "Frameworks",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "GraphQL",
        "React Query",
        "Tailwind CSS",
      ],
    },
    {
      group: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "OpenSearch"],
    },
    {
      group: "Cloud & Infrastructure",
      items: [
        "AWS",
        "Cloudflare",
        "Docker",
        "Coolify",
        "GitHub Actions",
        "CI/CD",
      ],
    },
    {
      group: "Tools",
      items: [
        "Prisma",
        "Drizzle",
        "Sequelize",
        "Jest",
        "Playwright",
        "Git",
        "xState",
      ],
    },
    {
      group: "AI & Automation",
      items: [
        "LLM Integrations",
        "OpenAI API",
        "Prompt Engineering",
        "AI Workflow Automation",
        "OCR",
        "n8n",
        "Make",
      ],
    },
  ],
  education: [
    {
      school: "SVMIT, Bharuch - GTU",
      degree: "Bachelors of Engineering in Mechanical",
      years: "2014 – 2017",
    },
  ],
};
