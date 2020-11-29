import faker from 'faker';
import { EmailAddress } from '../models/email-address';

export const mockEmailAddress = (): EmailAddress => ({
  email: faker.internet.email()
});
