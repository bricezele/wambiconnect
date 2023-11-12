import {User} from '../../../domain/entities/user/User'
import {Adapter} from '../../../domain/models/Adapter'
import FieldValidityChecker from '../FieldValidityChecker'

export class UserAdapter implements Adapter<User, any> {
    adapt(raw: any): User {
        FieldValidityChecker.checkObjectKeyValidity(raw, 'id', 'number')
        FieldValidityChecker.checkObjectKeyValidity(raw, 'login', 'string')

        return new User(raw.id, raw.login)
    }
}
