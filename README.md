# ORBIN — Industrial Pump Manufacturer Website

> **Experience the Excellence** — India's premier manufacturer of submersible pumps, motors, cables & solar pump systems since 1989.

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | Full-stack React framework with ISR |
| **TypeScript** | Type safety across the codebase |
| **Tailwind CSS v4** | Utility-first styling with `@theme` design tokens |
| **Sanity.io** | Headless CMS for all dynamic content |
| **Framer Motion** | Animations and micro-interactions |
| **Lucide React** | Icon library |
| **Vercel** | Deploy target |

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create `.env.local` with:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=https://orbin.in
```

> **Note:** The site works out-of-the-box with fallback seed data even without a Sanity project configured.

## Project Structure

```
src/
├── app/                          # App Router pages
│   ├── page.tsx                  # Home
│   ├── about/                    # About Us
│   ├── products/                 # Products catalog
│   │   ├── page.tsx              # Category listing
│   │   ├── [category]/           # Dynamic category page
│   │   └── [category]/[slug]/    # Product detail page
│   ├── solar/                    # Solar pump solutions
│   ├── applications/             # Industries & applications
│   ├── dealers/                  # Dealer network
│   ├── blog/                     # Blog listing + [slug] detail
│   ├── contact/                  # Contact page
│   ├── studio/[[...tool]]/       # Sanity Studio (admin CMS)
│   ├── sitemap.ts                # Auto-generated sitemap.xml
│   ├── robots.ts                 # robots.txt config
│   └── not-found.tsx             # Custom 404
├── components/
│   ├── layout/                   # Header, Footer
│   ├── home/                     # Homepage sections
│   ├── ui/                       # Shared UI primitives
│   └── ContactForm.tsx           # Reusable contact form
├── lib/
│   ├── data.ts                   # Data fetching layer (Sanity + fallback)
│   └── fallback-data.ts          # Seed data for demo mode
├── sanity/
│   ├── client.ts                 # Sanity client (nullable for safety)
│   ├── env.ts                    # Environment configuration
│   ├── queries.ts                # GROQ query library
│   ├── studio.ts                 # Sanity Studio config
│   └── schemas/                  # Document schemas
└── types/
    └── sanity.ts                 # TypeScript interfaces
```

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero slider, trust badges, categories, brand story |
| `/about` | Company history, mission/vision, certifications, manufacturing |
| `/products` | Full product category grid (19 categories) |
| `/products/[category]` | Products within a category |
| `/products/[category]/[slug]` | Product detail with specs, features, enquiry |
| `/solar` | Solar pump solutions, PM-KUSUM subsidy info |
| `/applications` | Industries served (agriculture, commercial, fire-fighting, etc.) |
| `/dealers` | Dealer network info + contact form |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog post detail |
| `/contact` | Contact details + enquiry form |
| `/studio` | Sanity CMS admin panel |

## SEO Features

- ✅ Dynamic `<title>` and `<meta>` tags per page
- ✅ JSON-LD structured data (Organization + Product schemas)
- ✅ Auto-generated `sitemap.xml` from all content
- ✅ `robots.txt` blocking studio/api routes
- ✅ OpenGraph + Twitter card meta tags
- ✅ Semantic HTML with proper heading hierarchy

## Sanity CMS Schemas

- **Site Settings** — Global branding, contact info
- **Hero Slides** — Homepage hero slider content
- **Categories** — Product categories with ordering
- **Products** — Full product data with specs tables
- **Certifications** — ISO badges and awards
- **Testimonials** — Customer quotes
- **Blog Posts** — SEO content marketing
- **Pages** — Flexible content pages

## Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel --prod
```

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `orbin-teal` | `#1E9E8E` | Primary brand color |
| `orbin-maroon` | `#8B2E3C` | ORBIN wordmark |
| `orbin-gold` | `#F2B233` | Accent / highlights |
| `orbin-dark` | `#0F1729` | Dark backgrounds |

---

Built with ❤️ for ORBIN Pumps Pvt. Ltd.
