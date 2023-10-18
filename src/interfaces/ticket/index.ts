import { BookingInterface } from 'interfaces/booking';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TicketInterface {
  id?: string;
  ticket_number: string;
  booking_id: string;
  user_id: string;
  ticket_price: number;
  ticket_status: string;
  created_at?: any;
  updated_at?: any;

  booking?: BookingInterface;
  user?: UserInterface;
  _count?: {};
}

export interface TicketGetQueryInterface extends GetQueryInterface {
  id?: string;
  ticket_number?: string;
  booking_id?: string;
  user_id?: string;
  ticket_status?: string;
}
