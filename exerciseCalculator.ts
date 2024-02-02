interface ExerciseReport {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface Requirements {
  exerciseHours: number[];
  target: number;
}

const parseArguments = (args: string[]): Requirements => {
  if (args.length < 4) throw new Error('Not enough arguments');
  let target = Number(args[3])
  let exerciseHours = args.slice(4).map(x => Number(x))
  return {
    target,
    exerciseHours
  }
}

const calculateExercises = (exerciseHours: number[], target: number): ExerciseReport => {
  let periodLength = exerciseHours.length;
  let trainingDays = exerciseHours.filter(x => x > 0).length;
  let hoursPerWeek = exerciseHours.reduce((partialSum, a) => partialSum + a, 0);
  let average = hoursPerWeek / periodLength;
  let success = true
  let rating = 3;
  let ratingDescription = "well done";
  if (average < target) {
    success = false;
    rating = 1;
    ratingDescription = "do better";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  }
}


try {
  const { target, exerciseHours  } = parseArguments(process.argv);
  console.log(calculateExercises(exerciseHours, target));
} catch (error: unknown){
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}