import moongose from 'mongoose';

const medcialRecordSchema = new moongose.Schema({}, { timestamps: true });

export const MedicalRecord = moongose.models(
  'MedicalRecord',
  medcialRecordSchema
);
