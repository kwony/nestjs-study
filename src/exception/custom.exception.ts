export class CustomException extends Error {
  readonly code: string;

  constructor(errorCode: string) {
    super('Hello');
    this.code = errorCode;
  }
}
