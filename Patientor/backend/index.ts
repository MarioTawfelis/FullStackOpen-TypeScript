import express from 'express';
const app = express();

const PORT = 3003

app.get('/api/ping', (_req, res) => {
  res.send('Pong');
});

app.listen(PORT, () => {
  console.log(`Backend is listening on port ${PORT}`);
})