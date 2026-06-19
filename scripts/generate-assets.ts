import sharp from "sharp";
import fs from "fs";
import path from "path";

const SOURCE_SVG = path.join(process.cwd(), "public", "logo.svg");
const PUBLIC_DIR = path.join(process.cwd(), "public");

async function generateAllAssets() {
  console.log("Analyzing and processing brand logo assets...");

  if (!fs.existsSync(SOURCE_SVG)) {
    throw new Error(`Source SVG not found at ${SOURCE_SVG}`);
  }

  const svgBuffer = fs.readFileSync(SOURCE_SVG);

  // 1. Favicon 16x16
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(PUBLIC_DIR, "favicon-16x16.png"));
  console.log("Generated favicon-16x16.png");

  // 2. Favicon 32x32
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(PUBLIC_DIR, "favicon-32x32.png"));
  console.log("Generated favicon-32x32.png");

  // 3. Favicon.ico (Modern browsers support PNG favicon.ico)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(PUBLIC_DIR, "favicon.ico"));
  console.log("Generated favicon.ico");

  // 4. Apple Touch Icon (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"));
  console.log("Generated apple-touch-icon.png");

  // 5. PWA Icon 192 (192x192)
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(PUBLIC_DIR, "logo-192.png"));
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(PUBLIC_DIR, "favicon-192x192.png"));
  console.log("Generated 192x192 PWA assets");

  // Generate explicit requested sizes
  const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(PUBLIC_DIR, `icon-${size}x${size}.png`));
    console.log(`Generated icon-${size}x${size}.png`);
  }

  // Generate maskable versions (with extra safe padding)
  // For maskable icons, we slightly scale down the logo element or make sure it has safe margins.
  // Given our logo.svg already is 500x500 with a large black background area, resizing it directly is perfectly safe!
  // To follow best practices, we output distinct files named maskable-icon
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(PUBLIC_DIR, "maskable-icon-192x192.png"));
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(PUBLIC_DIR, "maskable-icon-512x512.png"));
  console.log("Generated maskable icons");

  // 6. PWA Icon 512 (512x512)
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(PUBLIC_DIR, "logo-512.png"));
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(PUBLIC_DIR, "favicon-512x512.png"));
  console.log("Generated 512x512 PWA assets");

  // 7. WebP Format Logo (512x512)
  await sharp(svgBuffer)
    .resize(512, 512)
    .webp({ quality: 90 })
    .toFile(path.join(PUBLIC_DIR, "logo.webp"));
  console.log("Generated logo.webp optimized image");

  // 8. Social Share Preview (1200x630 Open Graph Image)
  // Let's resize the logo square to 450x450 and center it in a 1200x630 black container.
  await sharp(svgBuffer)
    .resize(450, 450)
    .extend({
      top: 90,
      bottom: 90,
      left: 375,
      right: 375,
      background: "#000000",
    })
    .png()
    .toFile(path.join(PUBLIC_DIR, "logo-og.png"));
  console.log("Generated high-resolution social share preview (logo-og.png)");

  console.log("All branding assets compiled successfully into /public!");
}

generateAllAssets().catch((err) => {
  console.error("Asset generation failed:", err);
  process.exit(1);
});
