const sharp = require('sharp');
sharp('public/orbin-logo.png')
  .trim() // automatically trims transparent/background pixels
  .toFile('public/orbin-logo-cropped.png')
  .then(info => {
    console.log('Cropped successfully!', info);
    // Replace the original with the cropped one
    const fs = require('fs');
    fs.renameSync('public/orbin-logo-cropped.png', 'public/orbin-logo.png');
    console.log('Original replaced.');
  })
  .catch(err => {
    console.error('Error cropping:', err);
  });
