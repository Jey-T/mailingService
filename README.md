# Mailing Service

A lightweight, production-ready Node.js service for handling email delivery with robust error handling and graceful shutdown capabilities.

## Features

- ✅ **Email delivery** via Nodemailer with Gmail integration
- ✅ **Input validation** using Zod schemas
- ✅ **Centralized error handling** with custom error classes
- ✅ **Environment validation** at startup
- ✅ **Health check endpoint** for monitoring
- ✅ **Graceful shutdown** for zero-downtime deployments
- ✅ **Express 5.1** with automatic async error handling

## Quick Start

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your email credentials
   ```

3. **Start the service**
   ```bash
   pnpm start
   ```


### Development Mode

```bash
# Start with hot reload (recommended for development)
pnpm run dev

# The service runs on http://localhost:4000
```


## Environment Variables

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password
RECEIVER_EMAIL=recipient@example.com
```

> **Note:** Use Gmail App Passwords, not your regular password.

## API Endpoints

### Send Email
```http
POST /send-mail
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello from the contact form!"
}
```

### Health Check
```http
GET /health
```

## Production Features

- **Environment validation** - Service fails fast if configuration is invalid
- **Graceful shutdown** - Handles SIGTERM/SIGINT for clean deployments
- **Error logging** - Centralized error handling with proper HTTP status codes
- **Health monitoring** - Ready for load balancers and container orchestration

## Tech Stack

- **Node.js** with TypeScript
- **Express 5.1** for HTTP server
- **Nodemailer** for email delivery
- **Zod** for validation and type safety

---

**License:** MIT
