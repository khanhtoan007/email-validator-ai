import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import emailRoutes from './routes/email.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', emailRoutes);

// Error handling
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 