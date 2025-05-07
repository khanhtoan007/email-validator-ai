import { Request, Response, NextFunction } from 'express';
import { EmailService } from '../services/email.service';
import { EmailValidationRequest, EmailValidationResponse } from '../dto/email.dto';

export class EmailController {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  public validateEmail = async (
    req: Request<{}, {}, EmailValidationRequest>,
    res: Response<EmailValidationResponse>,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { email } = req.body;
      const result = await this.emailService.validateEmail(email);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };
} 