import FieldValidityChecker from './FieldValidityChecker'
import { Adapter } from '../../domain/models/Adapter'

export default class ArrayAdapter<T> {
  adapt(raw: any, entityAdapter: Adapter<T, any>): T[] {
    FieldValidityChecker.checkIsArray(raw, 'array')

    const array: T[] = []

    raw.forEach((rawItem: any) => {
      array.push(entityAdapter.adapt(rawItem))
    })

    return array
  }
}
