# Casa Don Jesús Website

A bilingual (English/Spanish) website for a vacation rental property built with Astro.

## Features

- Bilingual content (English and Spanish)
- Responsive design using Tailwind CSS
- Contact form with booking request capabilities
- Photo gallery
- Property features display
- Location map (placeholder)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- yarn

### Installation

1. Clone this repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
yarn install
```

### Development

Run the development server:

```bash
yarn astro dev
```

Visit http://localhost:3000 to see the site in action.

### Building for Production

To build the site for production:

```bash
yarn astro build
```

This will generate static files in the `dist` directory that can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

## Project Structure

- `src/pages/` - All page templates (English and Spanish versions)
- `src/components/` - Reusable UI components
- `src/layouts/` - Page layouts
- `src/i18n/` - Translation files
- `src/utils/` - Utility functions for i18n and other purposes
- `src/styles/` - Global CSS styles

## Customization

### Adding Your Content

1. Replace placeholder text in the `en.json` and `es.json` files
2. Replace the placeholder images with actual property photos
3. Update property features, descriptions, and other content
4. Add your actual location for the map

### Styling

The site uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the `tailwind.config.js` file
2. Adding custom styles in `src/styles/global.css`
3. Adjusting the components' class names

## Deployment

After building the site, you can deploy the contents of the `dist` directory to any static hosting service. Popular options include:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

Most of these services offer automatic deployment from Git repositories.