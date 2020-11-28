import { AddEmailAddress } from '../../../domain/usecases/add-email-address';

export class SendEmailController {
  constructor(private readonly addEmailAddress: AddEmailAddress) {}

  handle(bodyParams: any): any {
    if (!bodyParams.email) {
      return {
        statusCode: 400,
        body: 'Missing required field'
      };
    }
  }
}
