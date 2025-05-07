export interface ValidationResponse {
  isValid: boolean;
  message?: string;
}

export interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
} 