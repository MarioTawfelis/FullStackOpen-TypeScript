import express from 'express';
import diagnosisRouter from './src/routes/diagnoses';
import patientRouter from './src/routes/patients';
import cors from 'cors';

const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  res.send('Pong');
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use('/api/diagnoses', diagnosisRouter);
app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
  console.log(`Backend is listening on port ${PORT}`);
});