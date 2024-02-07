import parseArguments from "./utils";

const calculateBmi = (height: number, weight: number) : string => {
  const heightM = height / 100;
  const bmi = weight / heightM ** 2;
  if (bmi > 18.5 && bmi < 24.9){
    return "Normal";
  } else {
    return "Abnormal";
  }
};

try {
  const { height, weight } = parseArguments(process.argv);
  console.log(calculateBmi(height, weight));
} catch (error: unknown){
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}


export default calculateBmi;