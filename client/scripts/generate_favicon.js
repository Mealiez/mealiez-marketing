const sharp = require('sharp');
const path = require('path');

async function generateFavicon() {
  try {
    const inputPath = path.resolve(__dirname, '..', 'src', 'logo.png');
    const outputPath = path.resolve(__dirname, '..', 'src', 'app', 'icon.png');
    
    // We want a 512x512 icon
    const size = 512;
    // Padding, e.g., logo takes up 75% of the icon
    const logoSize = Math.floor(size * 0.75);
    
    // 1. Resize the logo
    const resizedLogo = await sharp(inputPath)
      .resize(logoSize, logoSize, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background for resize
      })
      .toBuffer();

    // 2. Create a white background and composite the resized logo on it
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 } // White background
      }
    })
    .composite([
      {
        input: resizedLogo,
        gravity: 'center'
      }
    ])
    .png()
    .toFile(outputPath);

    console.log('Successfully created icon.png');
  } catch (err) {
    console.error('Error generating favicon:', err);
  }
}

generateFavicon();
