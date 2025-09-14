# Olanrewaju Omoniyi — Portfolio (Vite + React + Tailwind)

This project includes:
- Dark/Light Mode Toggle
- Framer Motion animations
- Floating programming logos background animation
- EmailJS contact form integration (frontend)
- Ready for Vercel deployment

## Quick start

1. Install dependencies
```bash
npm install
```

2. Run development server
```bash
npm run dev
```

3. Build for production
```bash
npm run build
```

## EmailJS setup

1. Sign up at https://www.emailjs.com and create a service and template.
2. Replace the placeholders in `src/components/Contact.jsx`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`
3. The template should include fields: `name`, `email`, `message` (these names are used in the form inputs).

## Deploy to Vercel

- Push to GitHub and import the repo in Vercel, or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```
