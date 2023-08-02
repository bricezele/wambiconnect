import { RequestError } from '../../domain/models/DomainError'

export default class FieldValidityChecker {
  /** Throws error is param is null/undefined */
  static checkExistance(entry: any, name: string) {
    if (!entry) {
      throw new RequestError.InvalidResponseFormatError(name + ' does not exist')
    }
  }

  /** Throws error if param doesn't exist or has incorrect type */
  static checkType(entry: any, name: any, type: any) {
    FieldValidityChecker.checkExistance(entry, name)
    if (typeof entry !== type) {
      throw new RequestError.InvalidResponseFormatError(
        'Invalid type for ' + name + '. Expected: ' + type + ', found ' + typeof entry
      )
    }
  }

  /** Throws error if object's value is missing or of invalid type */
  static checkObjectKeyValidity(object: any, key: string, type: string) {
    FieldValidityChecker.checkType(object, key, 'object')
    if (!!object[key] && type !== 'number' && object[key] === 0) {
      throw new RequestError.InvalidResponseFormatError('Missing key ' + key)
    }
    if (typeof object[key] !== type) {
      throw new RequestError.InvalidResponseFormatError(
        'Invalid type for key ' + key + '. Expected: ' + type + ', found ' + typeof object[key]
      )
    }
  }

  /** Throws error if param does not exist or is not an array */
  static checkIsArray(entry: any, name: string) {
    FieldValidityChecker.checkExistance(entry, name)
    if (!Array.isArray(entry)) {
      throw new RequestError.InvalidResponseFormatError(name + ' is not an array')
    }
  }

  /** Throws error if param has incorrect type but allow optionnal params */
  static checkObjectKeyValidityOptionnal(object: any, key: string, type: string) {
    FieldValidityChecker.checkType(object, key, 'object')
    if (object[key] !== undefined && object[key] !== null && typeof object[key] !== type) {
      throw new RequestError.InvalidResponseFormatError(
        'Invalid type for key ' + key + '. Expected: ' + type + 'or undefined, found ' + typeof object[key]
      )
    }
  }
}
