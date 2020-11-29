import { Mail } from '../models/mail';
import { MailService } from '../models/mail-service';

export interface SendMail {
  send: (params: Mail) => Promise<MailService>;
}
