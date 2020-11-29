import { EmailAddress } from '../models/email-address';

export interface AddEmailAddress {
  add: (email: EmailAddress) => EmailAddress;
}
