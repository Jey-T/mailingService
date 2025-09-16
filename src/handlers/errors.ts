export class AppError extends Error {
    public readonly statusCode: number;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  export class ValidationError extends AppError {
    constructor(message: string) {
      super(message, 400);
    }
  }

  export class NotFoundError extends AppError {
    constructor(message: string = "Resource not found") {
      super(message, 404);
    }
}