import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesToOptimize = [
  { input: 'src/assets/v3/wall_desktop.jpg', output: 'src/assets/wall_desktop_optimized.webp' },
];

async function optimizeImages() {
  console.log('🚀 Starting image optimization...\n');
  
  for (const image of imagesToOptimize) {
    try {
      if (fs.existsSync(image.input)) {
        await sharp(image.input)
          .webp({ quality: 85, effort: 6 })
          .toFile(image.output);
        
        const originalSize = fs.statSync(image.input).size;
        const optimizedSize = fs.statSync(image.output).size;
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`✓ ${image.input} → ${image.output} (${savings}% smaller)`);
      } else {
        console.log(`⚠️  ${image.input} not found`);
      }
    } catch (error) {
      console.error(`❌ Error optimizing ${image.input}:`, error.message);
    }
  }
  
  console.log('\n🎉 Image optimization complete!');
}

optimizeImages(); 