import * as yup from 'yup';

export const airportValidationSchema = yup.object().shape({
  name: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  airport_code: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
