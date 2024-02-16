import express from 'express';
import diagnosisRouter from './src/routes/diagnoses';
import patientRouter from './src/routes/patients';

const app = express();

const PORT = 3003;

app.get('/api/ping', (_req, res) => {
  res.send('Pong');
});

app.use('/api/diagnoses', diagnosisRouter);
app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
  console.log(`Backend is listening on port ${PORT}`);
});