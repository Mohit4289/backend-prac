import moongose from 'mongoose';

const hospitalSchema = new moongose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Hospital = moongose.models('Hospital', hospitalSchema);
