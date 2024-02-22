import express from "express";
import patientService from '../services/patientService';
import toNewPatientEntry from "../utils";

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensitivePatientData());
});

router.post('/', (req, res) => {
  try {
    const newEntry = toNewPatientEntry(req.body);

    const addEntry = patientService.addPatient(newEntry);
    res.json(addEntry);
  } catch ( error: unknown ) {
    let errorMessage = 'Something bad happened. ';
    if (error instanceof Error) {
      errorMessage += 'Error! ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;