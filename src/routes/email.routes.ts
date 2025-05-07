import { Router } from 'express';
import { EmailController } from '../controllers/email.controller';
import { validateEmail } from '../validation/email.validation';

const router = Router();
const emailController = new EmailController();

router.post('/validate-email', validateEmail, emailController.validateEmail);

export default router; 