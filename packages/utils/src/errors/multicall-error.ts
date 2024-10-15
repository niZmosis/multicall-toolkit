import { ErrorCodes } from './error-codes'

export class MulticallError extends Error {
  override name = 'MulticallError'
  public code: ErrorCodes
  override message: string
  constructor(message: string, code: ErrorCodes) {
    super(message)
    this.message = message
    this.code = code
  }
}
