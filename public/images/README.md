# Khmer Farm Village - Image Assets

This directory contains all the image assets for the Khmer Farm Village website.

## Directory Structure

```
images/
├── hero/
│   └── cambodian-village.jpg     # Main hero image
├── products/
│   ├── jasmine-rice-1.jpg        # Product images
│   ├── jasmine-rice-2.jpg
│   ├── jasmine-rice-3.jpg
│   ├── kampot-pepper-1.jpg
│   ├── kampot-pepper-2.jpg
│   ├── kampot-pepper-3.jpg
│   ├── palm-sugar-1.jpg
│   ├── palm-sugar-2.jpg
│   ├── palm-sugar-3.jpg
│   ├── silk-scarf-1.jpg
│   ├── silk-scarf-2.jpg
│   ├── silk-scarf-3.jpg
│   ├── dried-fish-1.jpg
│   ├── dried-fish-2.jpg
│   ├── dried-fish-3.jpg
│   ├── cashew-nuts-1.jpg
│   ├── cashew-nuts-2.jpg
│   └── cashew-nuts-3.jpg
├── about/
│   ├── rice-farmer.jpg           # About section images
│   ├── silk-weaving.jpg
│   ├── spice-market.jpg
│   └── village-life.jpg
└── patterns/
    └── khmer-pattern.svg         # Background patterns
```

## Image Guidelines

### Product Images
- **Format**: JPEG or WebP
- **Size**: 800x800px minimum (square aspect ratio)
- **Quality**: High resolution for zoom functionality
- **Background**: Clean, preferably white or neutral

### Hero Images
- **Format**: JPEG or WebP
- **Size**: 1920x1080px or larger
- **Aspect Ratio**: 16:9 or wider
- **Subject**: Showcase Cambodian village life, farming, or crafts

### About Images
- **Format**: JPEG or WebP
- **Size**: 600x400px minimum
- **Content**: Authentic photos of farmers, artisans, and village life

## Image Optimization

All images are automatically optimized by Next.js Image component:
- Automatic format selection (WebP when supported)
- Responsive sizing
- Lazy loading
- Blur placeholder generation

## Adding New Images

1. Add images to the appropriate directory
2. Update the product data in `data/products.ts`
3. Use descriptive filenames
4. Maintain consistent aspect ratios within categories

## Stock Photos

For initial setup, you can use stock photos from:
- [Unsplash](https://unsplash.com/) (Free)
- [Pexels](https://pexels.com/) (Free)
- [Shutterstock](https://shutterstock.com/) (Paid)

Search terms: "cambodian food", "rice farming", "silk weaving", "spices", "traditional crafts"

## Image Attribution

Remember to:
- Credit photographers when required
- Check licensing terms
- Use original photos when possible for authenticity
