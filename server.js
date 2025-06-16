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