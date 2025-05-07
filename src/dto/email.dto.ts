export interface EmailValidationRequest {
  email: string;
}

export interface EmailValidationResponse {
  isValid: boolean;
  message?: string;
}

export interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
} 