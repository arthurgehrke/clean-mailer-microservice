import validator from 'validator';
import { EmailValidatorAdapter } from './email-validator-adapter';

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true;
  }
}));

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter();
};

describe('EmailValidatorAdapter', () => {
  test('Should not validate if validator returns false', () => {
    const { isValid } = makeSut();
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false);
    const sutResponse = isValid('any_invalid_email@mail.com');

    expect(sutResponse).toBe(false);
  });
});
