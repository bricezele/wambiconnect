import { Adapter } from '../../domain/models/Adapter'
import { RequestError } from '../../domain/models/DomainError'
import FieldValidityChecker from './FieldValidityChecker'

export default class DateAdapter implements Adapter<string, any> {
  adapt(raw: any): string {
    FieldValidityChecker.checkType(raw, 'Date', 'string')

    const date = new Date(raw)
    if (date.toISOString() === 'Invalid Date') {
      throw new RequestError.InvalidResponseFormatError('Invalid Date')
    }

    return date.toISOString()
  }
}
