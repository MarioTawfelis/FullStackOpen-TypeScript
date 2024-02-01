interface BodyCharacteristics {
  height: number;
  weight: number;
}

const parseArguments = (args: string[]): BodyCharacteristics => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

const calculateBmi = (height: number, weight: number) : string => {
  let heightM = height / 100;
  let bmi = weight / heightM ** 2;
  if (bmi > 18.5 && bmi < 24.9){
    return "Normal";
  } else {
    return "Abnormal";
  }
}

try {
  const { height, weight } = parseArguments(process.argv);
  console.log(calculateBmi(height, weight));
} catch (error: unknown){
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
