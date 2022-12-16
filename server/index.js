require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 8080;
router.use(cors());

const clientDirPath = path.join(__dirname, '/../client/dist');
const clientIndexHtml = path.join(clientDirPath, 'index.html');

app.get('/*.js', (req, res, next) => {
  const pathToGzipFile = `${req.url}.gz`;
  try {
    if (fs.existsSync(path.join(clientDirPath, pathToGzipFile))) {
      req.url += '.gz';
      res.set('Content-Encoding', 'gzip');
      res.set('Content-Type', 'text/javascript');
    }
  } catch (err) {
    console.error(err);
  }
  next();
});

app.use(express.static(clientDirPath));

app.get('/*', (req, res) => {
  res.sendFile(clientIndexHtml);
});

app.use(morgan('dev'));

app.listen(PORT, console.log(`Now listening on http://localhost:${PORT}`));