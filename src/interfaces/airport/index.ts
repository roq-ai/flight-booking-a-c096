import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AirportInterface {
  id?: string;
  name: string;
  city: string;
  country: string;
  airport_code: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AirportGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  city?: string;
  country?: string;
  airport_code?: string;
  user_id?: string;
}
