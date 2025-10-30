# Tribe Africa Foundation Website

A modern, responsive website for the Tribe Africa Foundation built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, responsive design that works on all devices
- **Content Management**: Easy-to-update content through JSON files
- **Dynamic Projects**: Project showcase with detailed individual project pages
- **Contact Form**: Integrated contact form with serverless API
- **Donation Integration**: Secure payment processing with Paystack
- **Fast Performance**: Built with Next.js for optimal performance and SEO

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Payment**: Paystack
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Paystack account for payment processing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Tribe-Africa-foundation-website.git
   cd Tribe-Africa-foundation-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure Paystack**
   - Sign up for a Paystack account at https://paystack.com
   - Get your API keys from https://dashboard.paystack.com/#/settings/developers
   - Add your public key to `.env.local`:
     ```
     NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_xxxxxxxxxxxxx
     ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form submission endpoint
│   ├── contact/             # Contact page
│   ├── give/                # Donation page
│   ├── projects/            # Projects pages
│   │   └── [slug]/          # Dynamic project detail pages
│   ├── layout.tsx           # Root layout with Header & Footer
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── Header.tsx
│   └── Footer.tsx
├── data/                    # Content management
│   ├── content.json         # Site content
│   └── projects.json        # Project data
├── lib/                     # Utility functions
│   └── data.ts              # Data fetching utilities
├── public/                  # Static assets
│   ├── assets/              # Original template assets
│   └── projects/            # Project images
└── README.md
```

## Content Management

### Updating Site Content

All site content can be updated through JSON files in the `data/` directory:

**`data/content.json`**: Contains all text content for the website including:
- Home page content (hero, sections, etc.)
- About page content (mission, vision, values)
- Contact information
- Footer content

**`data/projects.json`**: Contains project data. Each project has:
- `slug`: URL-friendly identifier
- `title`: Project name
- `short_description`: Brief summary
- `long_description`: Detailed description
- `category`: Project category
- `date`: Project date
- `featured_image`: Main project image path
- `images`: Array of additional image paths
- `videos`: Array of video embed URLs

### Adding a New Project

1. Open `data/projects.json`
2. Add a new project object:
   ```json
   {
     "slug": "your-project-slug",
     "title": "Your Project Title",
     "short_description": "Brief description",
     "long_description": "Detailed description",
     "category": "Category Name",
     "date": "2024-01-01",
     "featured_image": "/projects/your-project-slug/images/main.jpg",
     "images": [
       "/projects/your-project-slug/images/image1.jpg"
     ],
     "videos": []
   }
   ```
3. Add project images to `public/projects/your-project-slug/images/`

## Contact Form Storage

Contact form submissions are stored locally in `data/submissions/contact-submissions.json`.

For production, consider integrating with:
- **Vercel KV**: Serverless Redis database
- **Airtable**: Spreadsheet database
- **Google Sheets API**: Store in Google Sheets
- **Email Service**: SendGrid, Mailgun, etc.

## Paystack Integration

The donation page uses Paystack Inline for payment processing.

### Setup Instructions:

1. **Get API Keys**:
   - Visit https://dashboard.paystack.com/#/settings/developers
   - Copy your Public Key

2. **Configure Environment**:
   - Add to `.env.local`: `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_public_key`

3. **Test Mode**:
   - Use test keys (starting with `pk_test_`) for development
   - Test card: 4084 0840 8408 4081 (any CVV, any future expiry)

4. **Go Live**:
   - Replace test keys with live keys (starting with `pk_live_`)
   - Submit business documents to Paystack for verification

## Deployment

### Deploying to Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Set Environment Variables**:
   - Go to Vercel Dashboard → Project → Settings → Environment Variables
   - Add `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Alternative Deployment Options

- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Deploy via AWS Console
- **Custom Server**: Build and deploy with `npm run build` && `npm run start`

## Building for Production

```bash
npm run build
npm run start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` | Paystack public API key | Yes (for donations) |
| `PAYSTACK_SECRET_KEY` | Paystack secret key (for verification) | Optional |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For support, email tribeafrica93@gmail.com

## License

This project is licensed under the MIT License.

## About Tribe Africa Foundation

Tribe Africa Foundation Ghana was established in March 2015 as a multifaceted non-governmental organization. Our mission is to bring hope to the African landscape by finding solutions to the problems of the indigenous African and helping in the gradual developing process of the African child.

**Contact Information**:
- Email: tribeafrica93@gmail.com
- Phone: +233202558623
- WhatsApp: +233261337152

---

Built with ❤️ by Tribe Africa Foundation
