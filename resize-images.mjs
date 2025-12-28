import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, basename } from 'path';

const sourceDir = 'C:/Users/USER/Desktop/김재원 대표님';
const outputDir = 'C:/Users/USER/Desktop/김재원 대표님/k-ground/temp_images';

async function resizeImages() {
  try {
    await mkdir(outputDir, { recursive: true });

    const files = await readdir(sourceDir);
    const imageFiles = files.filter(f =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(f)
    );

    console.log(`Found ${imageFiles.length} image files`);

    for (const file of imageFiles) {
      const inputPath = join(sourceDir, file);
      const outputPath = join(outputDir, basename(file, '.jpg') + '_resized.jpg').replace('.png_resized.jpg', '_resized.jpg');

      try {
        await sharp(inputPath)
          .resize(800, 600, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 70 })
          .toFile(outputPath.replace('.png_resized', '_resized').replace('.jpg_resized', '_resized') + '.jpg');

        console.log(`Resized: ${file}`);
      } catch (err) {
        console.log(`Failed to resize ${file}: ${err.message}`);
      }
    }

    console.log('Done!');
  } catch (err) {
    console.error('Error:', err);
  }
}

resizeImages();
