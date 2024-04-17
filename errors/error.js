class CustomAPIError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  class NotFoundError extends CustomAPIError {
    constructor(message = 'Not found') {
      super(message, 404);
    }
  }
  
  class UnauthorizedError extends CustomAPIError {
    constructor(message = 'Unauthorized') {
      super(message, 401);
    }
  }
  
  class BadRequestError extends CustomAPIError {
    constructor(message = 'Bad request') {
      super(message, 400);
    }
  }
  
  module.exports = {
    CustomAPIError,
    NotFoundError,
    UnauthorizedError,
    BadRequestError,
  };
  