const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Image dimensions and configurations
const configs = {
  hero: { width: 1200, height: 800, color: '#22c55e' },
  product: { width: 600, height: 600, color: '#eab308' },
  about: { width: 600, height: 400, color: '#16a34a' }
};

// Product images to generate
const productImages = [
  'jasmine-rice-1.jpg', 'jasmine-rice-2.jpg', 'jasmine-rice-3.jpg',
  'kampot-pepper-1.jpg', 'kampot-pepper-2.jpg', 'kampot-pepper-3.jpg',
  'palm-sugar-1.jpg', 'palm-sugar-2.jpg', 'palm-sugar-3.jpg',
  'silk-scarf-1.jpg', 'silk-scarf-2.jpg', 'silk-scarf-3.jpg',
  'dried-fish-1.jpg', 'dried-fish-2.jpg', 'dried-fish-3.jpg',
  'cashew-nuts-1.jpg', 'cashew-nuts-2.jpg', 'cashew-nuts-3.jpg'
];

const heroImages = ['cambodian-village.jpg'];
const aboutImages = ['rice-farmer.jpg', 'silk-weaving.jpg', 'spice-market.jpg', 'village-life.jpg'];

async function generatePlaceholder(filename, config, text, outputDir) {
  const { width, height, color } = config;
  
  try {
    // Create a colored background with text
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${color}"/>
        <text x="50%" y="45%" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="white" opacity="0.8">
          ${text}
        </text>
        <text x="50%" y="55%" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="white" opacity="0.6">
          ${width}x${height}
        </text>
      </svg>
    `;

    await sharp(Buffer.from(svg))
      .jpeg({ quality: 80 })
      .toFile(path.join(outputDir, filename));
      
    console.log(`Generated: ${filename}`);
  } catch (error) {
    console.error(`Error generating ${filename}:`, error);
  }
}

async function generateAllPlaceholders() {
  const imagesDir = path.join(__dirname, 'public', 'images');
  
  // Create directories if they don't exist
  const dirs = ['hero', 'products', 'about'];
  dirs.forEach(dir => {
    const dirPath = path.join(imagesDir, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });

  console.log('Generating placeholder images...');

  // Generate hero images
  for (const filename of heroImages) {
    await generatePlaceholder(
      filename,
      configs.hero,
      'Cambodian Village',
      path.join(imagesDir, 'hero')
    );
  }

  // Generate product images
  for (const filename of productImages) {
    const productName = filename.split('-').slice(0, -1).join(' ').replace(/\b\w/g, l => l.toUpperCase());
    await generatePlaceholder(
      filename,
      configs.product,
      productName,
      path.join(imagesDir, 'products')
    );
  }

  // Generate about images
  for (const filename of aboutImages) {
    const title = filename.replace('.jpg', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    await generatePlaceholder(
      filename,
      configs.about,
      title,
      path.join(imagesDir, 'about')
    );
  }

  console.log('✅ All placeholder images generated successfully!');
  console.log('📝 Replace these with actual photos of your products and village life.');
}

// Run the script
if (require.main === module) {
  generateAllPlaceholders().catch(console.error);
}

module.exports = { generateAllPlaceholders };
