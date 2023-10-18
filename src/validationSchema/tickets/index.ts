import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  ticket_number: yup.string().required(),
  ticket_price: yup.number().integer().required(),
  ticket_status: yup.string().required(),
  booking_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
