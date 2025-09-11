const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// 圧縮対象の画像ファイル
const images = [
  'ABOUT US.jpg',
  'エイチエス.png',
  'コンフォート.JPG',
  'スコーピウス.png',
  'カジュアル.png',
  'エレガント.JPG',
  'スニーカー.png',
  'PHITEN.jpg'
];

async function compressImage(filename) {
  const inputPath = path.join(publicDir, filename);
  const outputPath = path.join(publicDir, `compressed_${filename}`);
  
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    console.log(`圧縮中: ${filename} (${(originalSize / 1024 / 1024).toFixed(2)}MB)`);
    
    // JPG/JPEG用の圧縮
    if (filename.toLowerCase().includes('.jpg') || filename.toLowerCase().includes('.jpeg')) {
      await sharp(inputPath)
        .jpeg({ 
          quality: 85,
          progressive: true,
          mozjpeg: true
        })
        .resize(1200, 1200, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .toFile(outputPath);
    }
    // PNG用の圧縮
    else if (filename.toLowerCase().includes('.png')) {
      await sharp(inputPath)
        .png({ 
          quality: 85,
          compressionLevel: 9,
          progressive: true
        })
        .resize(1200, 1200, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .toFile(outputPath);
    }
    
    const compressedStats = fs.statSync(outputPath);
    const compressedSize = compressedStats.size;
    const reduction = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${filename}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(compressedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% 削減)`);
    
    // 元ファイルをバックアップして、圧縮版に置き換え
    fs.renameSync(inputPath, path.join(publicDir, `original_${filename}`));
    fs.renameSync(outputPath, inputPath);
    
  } catch (error) {
    console.error(`❌ ${filename} の圧縮に失敗:`, error.message);
  }
}

async function compressAllImages() {
  console.log('🖼️  画像圧縮を開始します...\n');
  
  for (const image of images) {
    const imagePath = path.join(publicDir, image);
    if (fs.existsSync(imagePath)) {
      await compressImage(image);
    } else {
      console.log(`⚠️  ${image} が見つかりません`);
    }
  }
  
  console.log('\n🎉 画像圧縮が完了しました！');
  console.log('元ファイルは original_* として保存されています。');
}

compressAllImages().catch(console.error);
