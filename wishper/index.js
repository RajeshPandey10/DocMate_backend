const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { transcribeAudio } = require('../transcibe');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' });

app.post('/api/transcribe', upload.single('audio'), async (req, res) => {
  try {
    const audioPath = req.file.path;
    const transcription = await transcribeAudio(audioPath);
    fs.unlinkSync(audioPath); // Clean up uploaded file
    res.json({ transcription });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Whisper backend running on port ${PORT}`));