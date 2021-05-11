export default class RequestError extends Error {
  readonly status: number

  constructor(statusCode: number, message?: string) {
    super(message);
    this.status = statusCode;
  }
}
