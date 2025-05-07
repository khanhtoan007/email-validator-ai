import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { EmailValidator } from './services/emailValidator';
import { validateEmail } from './middleware/validation';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/validate-email', validateEmail, async (req, res, next) => {
  try {
    const { email } = req.body;
    const result = await EmailValidator.validateEmail(email);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// Error handling
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 