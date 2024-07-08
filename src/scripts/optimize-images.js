const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '..', 'assets');
const outputDir = path.join(__dirname, '..', 'assets', 'optimized');

if (!fs.existsSync(outputDir)){
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const inputPath = path.join(inputDir, file);
    const outputName = path.parse(file).name;

    sharp(inputPath)
      .resize(800) // Ajuste conforme necessário
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${outputName}.webp`))
      .then(() => console.log(`Converted ${file} to WebP`));
  }
});
