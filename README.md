# Influencer Monetization Landing Page

A high-converting, performance-optimized landing page for influencer monetization services. Built with Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎯 **Conversion-Focused Design**: Built for maximum performance and lead generation
- 🚀 **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- ✨ **Energetic Animations**: Smooth transitions powered by Framer Motion
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance Optimized**: Fast loading times and SEO-friendly
- 📄 **Legal Pages**: Privacy Policy, Terms of Service, and Disclosure pages with TGN Media LLC info
- 🔗 **Auto-Redirect**: 404 pages automatically redirect to homepage

## Sections

1. **Hero Section**: Compelling headline, offer, and guarantee with animated CTA
2. **Video Embed**: YouTube video integration for demonstration
3. **Calendar Booking**: Google Calendar embed for strategy call bookings
4. **Social Proof**: Stats, logos, and trust indicators
5. **About**: Founder bio and credibility indicators
6. **Testimonials**: Real testimonials with revenue results and before/after scenarios
7. **Final CTA**: Conversion-focused call-to-action with urgency
8. **Footer**: Legal links and company information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Update Video Embed

Replace the YouTube embed URL in `components/VideoEmbed.tsx`:
```tsx
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

### Update Calendar Booking

Replace the Google Calendar embed URL in `components/CalendarEmbed.tsx`:
```tsx
src="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID"
```

To get your Google Calendar embed URL:
1. Go to Google Calendar
2. Create an appointment schedule or set your calendar to public
3. Copy the embed URL

### Update Company Information

Company information is automatically populated throughout the site using TGN Media LLC details. If you need to change it, search and replace:
- Address: `1309 Coffeen Avenue STE 1200, Sheridan Wyoming 82801`
- Email: `info@tgn-media.com`

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:
```typescript
colors: {
  primary: '#3B82F6',    // Main brand color
  accent: '#F59E0B',     // Accent color
  success: '#10B981',    // Success/positive color
}
```

### Content

- **Headlines**: Edit `components/Hero.tsx`
- **Guarantee**: Update guarantee text in `components/Hero.tsx` and `components/CTASection.tsx`
- **Stats**: Modify social proof stats in `components/Hero.tsx` and `components/SocialProof.tsx`
- **Testimonials**: Update testimonial data in `components/Testimonials.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Other Platforms

Build the static files and deploy the `out` directory:
```bash
npm run build
```

## Legal Pages

All legal pages include:
- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)
- Disclosure (`/disclosure`)

All pages include TGN Media LLC information and are GDPR/CCPA compliant.

## Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for below-fold content
- Code splitting and automatic optimization
- SEO meta tags and Open Graph tags
- Font optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 TGN Media LLC. All rights reserved.

## Contact

TGN Media LLC  
1309 Coffeen Avenue STE 1200  
Sheridan Wyoming 82801  
United States of America  
Email: info@tgn-media.com
