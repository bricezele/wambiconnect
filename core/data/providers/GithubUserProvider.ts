import { User } from '../../domain/entities/user/User'
import { IHttpClient } from '../../domain/models/IHttpClient'
import { IUserProvider } from '../../domain/providers/IUserProvider'
import { UserAdapter } from '../adapters/user/UserAdapter'
import RequestErrorHandler from '../models/RequestErrorHandler'

export class GithubUserProvider implements IUserProvider {
  private userAdapter = new UserAdapter()

  constructor(private httpClient: IHttpClient) {}

  async getUser(username: string): Promise<User> {
    const endpoint = `/users/${username}`

    let response: any

    try {
      response = await this.httpClient.get(endpoint)
    } catch (e) {
      console.log(e)
      RequestErrorHandler.handleRequestError(e)
    }

    return this.userAdapter.adapt(response)
  }
}
