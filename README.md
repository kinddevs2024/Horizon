# Horizon - Corporate Site

Production-ready marketing site for Horizon, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Tech
- Next.js 14 App Router + TypeScript
- Tailwind CSS for layout/spacing
- Framer Motion for subtle reveals
- Telegram route handler for contact submissions

## Routes
- `/` - homepage with hero, products, technology, about, insights teaser, and contact form
- `/products/serviceos` - ServiceOS detail
- `/products/marketos` - MarketOS detail
- `/insights` - simple listing placeholder
- `/contact` - contact/order form (same endpoint as homepage)

## Running locally
1. Install dependencies: `npm install`
2. Add `.env.local` with Telegram configuration (see below).
3. Start dev server: `npm run dev` (opens at http://localhost:3000)
4. Build for production: `npm run build` then `npm start`

## Environment
```
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```
Both variables are required for `/api/telegram`. The handler validates payloads and returns useful errors to the UI.

## Notes
- No external assets are used; placeholders only.
- Design is desktop-first with responsive adjustments.
