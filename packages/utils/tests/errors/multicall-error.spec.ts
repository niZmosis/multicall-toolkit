import { describe, it, expect } from 'vitest'

import { ErrorCodes, MulticallError } from '../../src/errors'

describe('MulticallError', () => {
  const message = 'message_error'
  const code = ErrorCodes.chainIdNotSupported
  const error = new MulticallError(message, code)

  it('should have the correct name on error', () => {
    expect(error.name).toEqual('MulticallError')
  })

  it('should have the correct code on error', () => {
    expect(error.code).toEqual(code)
  })

  it('should have the correct message on error', () => {
    expect(error.message).toEqual(message)
  })
})
