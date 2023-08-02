export class DomainError extends Error {
  /** Type of error */
  name: string
  /** Localization key to display error message to user */
  intlKey: string
  /** Underlying cause of the error */
  cause?: any
  constructor(details: string, cause?: any) {
    super(details)
    this.name = this.constructor.name
    this.cause = cause
    this.intlKey = 'Error.Unknown'
  }
}

export namespace NavigationError {
  export class NoPageFound extends DomainError {
    constructor() {
      super('')
      this.intlKey = 'Error.NoPageFound'
    }
  }

  export class NoActualityFound extends DomainError {
    constructor() {
      super('')
      this.intlKey = 'Error.NoActualityFound'
    }
  }
}

export namespace RequestError {
  export class RequestFailedError extends DomainError {
    constructor(details: string, cause?: any) {
      super(details, cause)
      this.intlKey = 'Error.RequestFailed'
    }
  }
  export class UnauthorizedError extends DomainError {
    constructor(details: string, cause?: any) {
      super(details, cause)
      this.intlKey = 'Error.Unauthorized'
    }
  }

  export class InvalidRequestFormatError extends DomainError {
    constructor(details: string, cause?: any) {
      super(details, cause)
      this.intlKey = 'Error.InvalidRequestFormat'
    }
  }
  export class InvalidResponseFormatError extends DomainError {
    constructor(details: string, cause?: any) {
      super(details, cause)
      this.intlKey = 'Error.InvalidResponseFormat'
    }
  }

  export class NoServerResponseError extends DomainError {
    constructor(details: string, cause?: any) {
      super(details, cause)
      this.intlKey = 'Error.NoServerResponseError'
    }
  }

  export class ServerError extends DomainError {
    constructor(details: string, cause?: any) {
      super(details, cause)
      this.intlKey = 'Error.ServerError'
    }
  }
}
