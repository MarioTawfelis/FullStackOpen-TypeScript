import express from 'express';
import diagnosisRouter from './src/routes/diagnoses';

const app = express();

const PORT = 3003;

app.get('/api/ping', (_req, res) => {
  res.send('Pong');
});

app.use('/api/diagnoses', diagnosisRouter);

app.listen(PORT, () => {
  console.log(`Backend is listening on port ${PORT}`);
});