const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    service: 'DevOps Project',
    status: 'ok',
    version: require('../package.json').version,
    message: 'Version-controlled DevOps project with Git and CI/CD pipeline.'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`DevOps app listening on port ${port}`);
  });
}

module.exports = { app };
