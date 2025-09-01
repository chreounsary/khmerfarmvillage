# Khmer Farm Village - Modern Static E-commerce Website

A beautiful, responsive Next.js static e-commerce website showcasing authentic Cambodian products. Built with modern web technologies and optimized for performance, SEO, and user experience.

## ✨ Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Product Showcase**: Beautiful product galleries with images and videos
- **SEO Optimized**: Built-in SEO optimization with Next.js and meta tags
- **Static Site Generation**: Fast loading times with static site generation
- **Responsive**: Mobile-first design that works on all devices
- **TypeScript**: Type-safe development with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Animations**: Framer Motion
- **SEO**: next-seo
- **Image Optimization**: Next.js Image component with Sharp

## 📦 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── products/          # Products listing and detail pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── About.tsx
│   ├── ContactForm.tsx
│   ├── ContactInfo.tsx
│   ├── FeaturedProducts.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Newsletter.tsx
│   ├── ProductCard.tsx
│   ├── ProductFilter.tsx
│   ├── ProductGallery.tsx
│   ├── ProductGrid.tsx
│   ├── ProductVideo.tsx
│   ├── RelatedProducts.tsx
│   └── VideoShowcase.tsx
├── data/                  # Static data
│   └── products.ts        # Product data and types
├── public/                # Static assets
│   └── images/            # Image assets
└── ...                   # Configuration files
```

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd khmerfarmvillage
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Add your images**:
   - Add product images to `public/images/products/`
   - Add hero images to `public/images/hero/`
   - Add about section images to `public/images/about/`

4. **Update product data**:
   - Edit `data/products.ts` to add your actual products
   - Update image paths to match your uploaded images

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

### Deploy to Static Hosting

The built site can be deployed to any static hosting service:

- **Vercel**: Automatic deployment from GitHub
- **Netlify**: Drag and drop the `out/` folder
- **GitHub Pages**: Upload the `out/` folder contents
- **AWS S3**: Upload to S3 bucket with static website hosting

## 🎨 Customization

### Colors & Branding

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Update these colors to match your brand
    50: '#f0fdf4',
    // ... more shades
  },
}
```

### Products

Update your products in `data/products.ts`:

```typescript
export const products: Product[] = [
  {
    id: 'your-product-id',
    name: 'Your Product Name',
    description: 'Product description...',
    price: 29.99,
    category: 'Your Category',
    images: ['/images/products/your-image.jpg'],
    // ... more fields
  },
]
```

### Content

- Update company information in components
- Modify hero section content in `components/Hero.tsx`
- Update about section in `components/About.tsx`
- Customize contact information in `components/ContactInfo.tsx`

## 📱 Pages

- **Homepage** (`/`): Hero section, featured products, about, video showcase
- **Products** (`/products`): Product listing with filtering and sorting
- **Product Details** (`/products/[id]`): Individual product pages with galleries and videos
- **Contact** (`/contact`): Contact form and business information

## 🔧 Configuration

### SEO Configuration

Update metadata in each page component and `app/layout.tsx` for better SEO.

### Analytics

Add your analytics tracking code to `app/layout.tsx` or create a dedicated component.

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 📊 Performance

- **Static Generation**: All pages are pre-generated for fast loading
- **Image Optimization**: Automatic image optimization with Next.js
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **Lazy Loading**: Images and components load only when needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Open an issue on GitHub
- Email: support@khmerfarmvillage.com

---

**Built with ❤️ for authentic Cambodian products**