# Frontend Developer Portfolio

A modern, high-converting portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Features a dark theme with glassmorphism effects, smooth animations, and full accessibility support.

## ✨ Features

- **Modern Tech Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- **Feature-Based Architecture**: Modular, scalable code organization
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Dark Theme**: Professional dark design with gradient accents
- **Glassmorphism UI**: Modern backdrop-blur effects and subtle gradients
- **Advanced Animations**: Framer Motion powered scroll animations, micro-interactions, and smooth transitions
- **SEO Optimized**: Proper meta tags and semantic structure

## 🏗️ Project Structure

```
root/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page orchestrator
│   └── globals.css        # Global styles
├── features/              # Feature-based modules
│   ├── hero/             # Hero section with CTA
│   ├── projects/         # Project showcase grid
│   ├── skills/           # Technical skills display
│   └── contact/          # Contact form
├── components/           # Reusable UI components
│   └── ui/
│       ├── Button.tsx
│       └── Container.tsx
├── lib/                  # Utilities and data
│   └── data.ts          # Portfolio content
└── types/               # TypeScript definitions
    └── index.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nunsian-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Update Your Content

Edit `lib/data.ts` to customize:
- Projects showcase
- Skills and technologies
- About me section
- Contact information

### Modify Styling

- **Colors**: Update gradient colors in component files
- **Fonts**: Change fonts in `app/layout.tsx`
- **Theme**: Adjust CSS variables in `app/globals.css`

### Add New Sections

Follow the feature-based architecture:
1. Create a new folder in `features/`
2. Build your components
3. Export via `index.ts`
4. Import in `app/page.tsx`

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or use any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🎯 Best Practices Implemented

- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance**: Image optimization, code splitting, lazy loading
- **SEO**: Meta tags, Open Graph, structured data
- **Type Safety**: Full TypeScript coverage
- **Code Quality**: ESLint configuration, consistent formatting
- **Mobile-First**: Responsive design from smallest to largest screens

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js and Tailwind CSS
