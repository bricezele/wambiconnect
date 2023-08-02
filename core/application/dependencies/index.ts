import { IHttpClient } from '../../domain/models/IHttpClient'
import { API_ENDPOINT } from '../../config'
import { AxiosHttpClient } from '../../data/models/AxiosHttpClient'
import { IUserProvider } from '../../domain/providers/IUserProvider'
import { GithubUserProvider } from '../../data/providers/GithubUserProvider'

export interface Dependencies {
  httpClient: IHttpClient
  userProvider: IUserProvider
}

export const createDependencies = (): Dependencies => {
  const httpClient = new AxiosHttpClient(API_ENDPOINT)

  const githubHttpClient = new AxiosHttpClient('https://api.github.com')
  const githubUserProvider = new GithubUserProvider(githubHttpClient)

  return {
    httpClient,
    userProvider: githubUserProvider
  }
}
