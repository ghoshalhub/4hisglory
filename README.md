# 4HISGLORY - Faith • Purpose • Impact

A Christ-centered brand on Lainland inspiring people to walk in faith, purpose, and love through jewelry, entertainment, and community outreach.

## About

4HISGLORY is a faith-driven brand created to glorify God through:
- **Jewelry**: Faith-inspired designs that spark conversations about Christ
- **Entertainment**: Uplifting content that motivates people to live with integrity and hope
- **Community Outreach**: Giveaways and acts of generosity that reflect Christ's love

## Tech Stack

- **Framework**: Next.js 16.1.1 with React 19
- **Styling**: Tailwind CSS 4
- **TypeScript**: Type-safe development
- **API**: Serverless functions with AWS Lambda/API Gateway

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Update .env.local with your API credentials
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Environment Variables

Required environment variables (see `.env.example`):

- `NEXT_PUBLIC_BRAND_NAME` - Brand name (4hisglory)
- `NEXT_PUBLIC_CONTACT_API_URL` - Contact form API endpoint
- `NEXT_PUBLIC_SUBSCRIBE_API_URL` - Newsletter subscription API endpoint
- `NEXT_PUBLIC_FROM_EMAIL` - Sender email address
- `NEXT_PUBLIC_SUPPORT_EMAIL` - Support email address

## Features

- ✅ Responsive design optimized for all devices
- ✅ Contact form with backend integration
- ✅ Newsletter subscription
- ✅ Collaboration/idea submission form
- ✅ Faith-focused content and messaging
- ✅ Gold & black premium color scheme
- ✅ Animated UI elements with smooth transitions

## Project Structure

```
4hisglory/
├── src/
│   ├── app/
│   │   ├── api/          # API routes
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   └── lib/             # Utility functions
├── common/              # Shared configuration
│   └── brandConfig.js   # Brand settings
└── public/              # Static assets
```

## Deployment

The site is designed to be deployed on:
- AWS Amplify
- Vercel
- Netlify
- Any platform supporting Next.js

## License

© 2025 4HISGLORY. All rights reserved.

---

**Everything we do is for His glory.** ✝️
