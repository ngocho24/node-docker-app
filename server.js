const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Example: Save a message to the database
app.post('/messages', async (req, res) => {
  const { text } = req.body;
  const result = await pool.query(
    'INSERT INTO messages (text) VALUES ($1) RETURNING *',
    [text]
  );
  res.json(result.rows[0]);
});
app.get('/testdb', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/messages', async (req, res) => {
  const result = await pool.query('SELECT * FROM messages');
  res.json(result.rows);
});