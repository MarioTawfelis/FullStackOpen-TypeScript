import express from 'express';
const app = express();
const PORT = 3003;

app.get('/ping',  (_req, res) => {
  res.send('Pong');
});

app.listen(PORT, () => {
  console.log(`Server runnning on port ${PORT}`);
});