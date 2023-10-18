import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_date: yup.date().required(),
  seat_number: yup.number().integer().nullable(),
  booking_status: yup.string().required(),
  flight_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
