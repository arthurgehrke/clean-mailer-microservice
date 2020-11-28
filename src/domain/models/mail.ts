import { EmailAddress } from './email-address';

export type Mail = {
  sourceAddress: EmailAddress;
  destinationAddress: EmailAddress;
  messageTitle: string;
  messageBody: string;
};
