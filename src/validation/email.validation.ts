import { body } from 'express-validator';
import { validateRequest } from '../middleware/validation.middleware';

export const validateEmail = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  validateRequest
]; 