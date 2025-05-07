import { ValidationResponse } from '../types';
import dns from 'dns';
import { promisify } from 'util';

const resolveMx = promisify(dns.resolveMx);

export class EmailValidator {
  private static readonly EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  public static async validateEmail(email: string): Promise<ValidationResponse> {
    try {
      // Check email format
      if (!this.EMAIL_REGEX.test(email)) {
        return {
          isValid: false,
          message: 'Invalid email format'
        };
      }

      // Extract domain
      const domain = email.split('@')[1];

      // Check domain MX records
      try {
        const mxRecords = await resolveMx(domain);
        if (mxRecords && mxRecords.length > 0) {
          return {
            isValid: true,
            message: 'Email is valid and domain exists'
          };
        }
      } catch (error) {
        return {
          isValid: false,
          message: 'Domain does not exist or has no MX records'
        };
      }

      return {
        isValid: false,
        message: 'Domain validation failed'
      };
    } catch (error) {
      throw new Error('Email validation failed');
    }
  }
} 