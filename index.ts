import calculateBmi from './bmiCalculator';

import express from 'express';
const app = express();

app.use(express.json())

app.get('/ping',  (_req, res) => {
	res.send('pong');
});

app.get('/hello', (_req, res) => {
	res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
	try{
		let height: number = Number(req.query.height);
		let weight: number = Number(req.query.weight);

		if (isNaN(height) || isNaN(weight)) {
      throw Error();
    }
		
		let bmi: string = calculateBmi(height, weight);

		return res.json({
			height: height,
			weight: weight,
			bmi: bmi
		});
	} catch (error: unknown) {
		let errorMessage = 'Something bad happened.';
		if (error instanceof Error) {
			errorMessage += ' Error: ' + error.message;
		}
		console.log(errorMessage)

		return res.status(404).json({
			error: 'malformatted parameters.'
		});
	}
});

const PORT = 3003;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
