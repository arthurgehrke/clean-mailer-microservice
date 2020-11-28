import { SendEmailController } from './send-email-controller';
import { AddEmailAddress } from '../../../domain/usecases/add-email-address';

class AddEmailAddressSpy implements AddEmailAddress {
  add(email: string): any {
    const providedEmail = email;

    return providedEmail;
  }
}

type SutTypes = {
  sut: SendEmailController;
  addEmailAddressSpy: AddEmailAddressSpy;
};

const makeSut = (): SutTypes => {
  const addEmailAddressSpy = new AddEmailAddressSpy();
  const sut = new SendEmailController(addEmailAddressSpy);

  return {
    sut,
    addEmailAddressSpy
  };
};

describe('SendEmail Controller', () => {
  test('Should return 400 if no email is provided', () => {
    const { sut } = makeSut();
    const bodyParams = {
      email: ''
    };
    const httpResponse = sut.handle(bodyParams);

    expect(httpResponse.statusCode).toBe(400);
  });
});
