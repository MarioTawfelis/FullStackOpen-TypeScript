import calculateBmi from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/ping',  (_req, res) => {
	res.send('pong');
});

app.get('/hello', (_req, res) => {
	res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
	try{
		const height: number = Number(req.query.height);
		const weight: number = Number(req.query.weight);

		if (isNaN(height) || isNaN(weight)) {
      throw Error();
    }
		
		const bmi: string = calculateBmi(height, weight);

		return res.json({
			height: height,
			weight: weight,
			bmi: bmi
		});
	} catch (error: unknown) {
		return res.status(404).json({
			error: 'malformatted parameters.'
		});
	}
});

app.post('/exercises', (req, res) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { daily_exercises, target } = req.body;

	if (!daily_exercises || !target){
		return res.status(400).send({ error: 'missing parameters' });
	}

	if (!Array.isArray(daily_exercises) || (isNaN(target))) {
		return res.status(400).send({ error: 'malformatted parameters' });
	}

  const result = calculateExercises(daily_exercises as number[], target as number);
  return res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
