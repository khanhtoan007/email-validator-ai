import { EmailValidationResponse } from '../dto/email.dto';
import { validateEmailFormat, validateDomain } from '../utils/dns.utils';

export class EmailService {
  public async validateEmail(email: string): Promise<EmailValidationResponse> {
    try {
      const formatValid = validateEmailFormat(email);
      if (!formatValid) {
        return {
          isValid: false,
          message: 'Invalid email format'
        };
      }

      const domainValid = await validateDomain(email);
      return {
        isValid: domainValid,
        message: domainValid 
          ? 'Email is valid and domain exists'
          : 'Domain does not exist or has no MX records'
      };
    } catch (error) {
      throw new Error('Email validation failed');
    }
  }
} 