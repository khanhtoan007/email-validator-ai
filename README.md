# Email Validation API

A robust email validation API built with Express.js and TypeScript that validates both email format and domain existence using DNS lookup.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- DNS (for domain validation)
- Express Validator
- CORS
- Helmet (for security)
- Docker
- Docker Compose

## Architecture

The project follows N-Tier Architecture with the following structure:

```
src/
├── controllers/           # Request handlers
│   └── email.controller.ts
├── services/             # Business logic
│   └── email.service.ts
├── middleware/           # Cross-cutting concerns
│   ├── error.middleware.ts
│   └── validation.middleware.ts
├── routes/              # Route definitions
│   └── email.routes.ts
├── types/               # Type definitions
│   └── index.ts
├── utils/               # Utility functions
│   └── dns.utils.ts
├── validation/          # Validation schemas
│   └── email.validation.ts
├── dto/                 # Data Transfer Objects
│   └── email.dto.ts
└── index.ts            # Application entry point
```

### Layer Responsibilities

1. **Controllers Layer**
   - Handles HTTP requests and responses
   - Input validation
   - Response formatting
   - Error handling

2. **Services Layer**
   - Contains business logic
   - Email validation rules
   - Domain validation
   - Data processing

3. **Middleware Layer**
   - Error handling
   - Request validation
   - Security middleware
   - Cross-cutting concerns

4. **Routes Layer**
   - Route definitions
   - Route grouping
   - Middleware application

5. **DTOs Layer**
   - Data transfer objects
   - Request/Response interfaces
   - Type definitions

6. **Utils Layer**
   - Utility functions
   - DNS validation
   - Helper methods

7. **Validation Layer**
   - Input validation schemas
   - Validation rules
   - Custom validators

## Features

- Email format validation using regex
- Domain existence validation using DNS MX records
- Input validation middleware
- Centralized error handling
- Security best practices (CORS, Helmet)
- TypeScript for type safety
- RESTful API design
- Docker support for development and production
- Hot-reload in development
- N-Tier Architecture

## Installation

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd email-validator
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Start the server:
```bash
npm start
```

For development with hot-reload:
```bash
npm run dev
```

### Docker Development

1. Build and start the development environment:
```bash
docker compose up
```

2. Stop the development environment:
```bash
docker compose down
```

## API Usage

### Validate Email

**Endpoint:** `POST /api/validate-email`

**Request Body:**
```json
{
  "email": "example@domain.com"
}
```

**Curl Command:**
```bash
# Test with a valid email
curl -X POST http://localhost:3000/api/validate-email \
  -H "Content-Type: application/json" \
  -d '{"email": "example@gmail.com"}'

# Test with an invalid email format
curl -X POST http://localhost:3000/api/validate-email \
  -H "Content-Type: application/json" \
  -d '{"email": "invalid-email"}'

# Test with non-existent domain
curl -X POST http://localhost:3000/api/validate-email \
  -H "Content-Type: application/json" \
  -d '{"email": "test@nonexistentdomain123456.com"}'
```

**Response:**
```json
{
  "isValid": true,
  "message": "Email is valid and domain exists"
}
```

**Error Response:**
```json
{
  "isValid": false,
  "message": "Invalid email format"
}
```

## Error Handling

The API includes centralized error handling that returns appropriate HTTP status codes and error messages:

- 400: Bad Request (Invalid input)
- 500: Internal Server Error

## Development

### Local Development
- `npm run dev`: Start development server with hot-reload
- `npm run build`: Build the TypeScript project
- `npm start`: Start the production server
- `npm test`: Run tests

### Docker Development
- `docker compose up`: Start development environment with hot-reload
- `docker compose down`: Stop development environment

## Security

- CORS enabled for cross-origin requests
- Helmet middleware for security headers
- Input validation and sanitization
- Error handling to prevent information leakage

## Docker Configuration

The project includes two Docker configurations:

1. Development (`Dockerfile.dev`):
   - Uses Node.js 20 slim image
   - Includes all development dependencies
   - Supports hot-reload
   - Mounts source code as volume

2. Production (`Dockerfile`):
   - Multi-stage build
   - Optimized for production
   - Minimal image size
   - Production dependencies only

## Testing

Tests can be run either locally or in Docker:

```bash
# Local testing
npm test

# Docker testing
docker compose run test
``` 