const express = require('express');
const pool = require('../model/database'); // Corrected path
const router = express.Router();

router.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;