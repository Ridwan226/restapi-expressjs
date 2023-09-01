require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const usersRoutes = require('./routes/users');
const MiddlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');
const app = express();

app.use(MiddlewareLogRequest.logRequest);
app.use(express.json());
app.use('/assets', express.static('public'));

// Routes
app.use('/users', usersRoutes);

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('upload', upload);
  res.json({
    message: 'Upload Berhasil',
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log('Redy server Port', PORT);
});
