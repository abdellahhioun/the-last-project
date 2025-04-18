const express = require('express');
const router = express.Router();

// Health check route
router.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Hello route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

module.exports = router;
