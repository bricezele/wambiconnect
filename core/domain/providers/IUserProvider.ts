import { User } from '../entities/user/User'

export interface IUserProvider {
  getUser(username: string): Promise<User>
}
