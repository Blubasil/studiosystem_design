import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');

// SVG with fixed colors (light mode - black bg, white text) for PNG export
const svgContent = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect fill="#000000" width="512" height="512" rx="96"/>
  <text 
    x="256" 
    y="380" 
    fill="#ffffff" 
    font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" 
    font-size="380" 
    font-weight="800"
    text-anchor="middle"
  >S</text>
</svg>`;

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateFavicons() {
  const svgBuffer = Buffer.from(svgContent);

  for (const { name, size } of sizes) {
    const outputPath = path.join(publicDir, name);
    
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    
    console.log(`✓ Generated ${name} (${size}x${size})`);
  }

  // Generate favicon.ico (32x32 PNG renamed as .ico for basic support)
  // Note: For true multi-size ICO, you'd need a specialized tool
  const icoPath = path.join(publicDir, 'favicon.ico');
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(icoPath.replace('.ico', '-temp.png'));
  
  // Copy as .ico (browsers handle PNG data in .ico files)
  fs.copyFileSync(icoPath.replace('.ico', '-temp.png'), icoPath);
  fs.unlinkSync(icoPath.replace('.ico', '-temp.png'));
  console.log('✓ Generated favicon.ico (32x32)');

  console.log('\n✅ All favicons generated successfully!');
}

generateFavicons().catch(console.error);
