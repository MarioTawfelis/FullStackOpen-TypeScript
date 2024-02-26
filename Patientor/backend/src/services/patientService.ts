import { v1 as uuid } from 'uuid';
import patients from '../../data/patients';
import { Patient, NewPatientEntry, NonSensitivePatientEntry } from '../../types';

const getPatients = (): Patient[] => {
  return patients;
};

const getNonSensitivePatientData = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = ( entry: NewPatientEntry ): Patient => {
  const newPatient = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    id: uuid(),
    ...entry
  };
  patients.push(newPatient);
  return newPatient;

};

export default {
  getPatients,
  getNonSensitivePatientData,
  addPatient
};