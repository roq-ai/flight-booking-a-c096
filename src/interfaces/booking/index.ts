import { TicketInterface } from 'interfaces/ticket';
import { FlightInterface } from 'interfaces/flight';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  booking_date: any;
  flight_id: string;
  user_id: string;
  seat_number?: number;
  booking_status: string;
  created_at?: any;
  updated_at?: any;
  ticket?: TicketInterface[];
  flight?: FlightInterface;
  user?: UserInterface;
  _count?: {
    ticket?: number;
  };
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  flight_id?: string;
  user_id?: string;
  booking_status?: string;
}
