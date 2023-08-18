import { SignatureValidateGuard } from './signature-validate.guard';

describe('SignatureValidateGuard', () => {
  it('should be defined', () => {
    expect(new SignatureValidateGuard()).toBeDefined();
  });
});
