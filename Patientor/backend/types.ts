export type Diagnosis = {
  code: string,
  name: string,
  latin?: string,
};

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

export type Patient = {
  id: string,
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: Gender,
  occupation: string
};

export type NewPatientEntry = Omit<Patient, 'id'>;
export type NonSensitivePatientEntry = Omit<Patient, 'ssn'>;