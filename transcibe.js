const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

async function transcribeAudio(filePath) {
  return new Promise((resolve, reject) => {
    exec(`whisper "${filePath}" --model base --output_format txt`, (error, stdout, stderr) => {
      if (error) return reject(error);
      const txtPath = filePath.replace(/\.[^/.]+$/, ".txt");
      fs.readFile(txtPath, 'utf8', (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  });
}

module.exports = { transcribeAudio };