import { AxiosHttpClient } from '../../core/data/models/AxiosHttpClient'
import * as config from '../../core/config'
import { GithubUserProvider } from '../../core/data/providers/GithubUserProvider'
import { userFixture } from '../../__mocks__/datasets/userFixture'
import { User } from '../../core/domain/entities/user/User'
import userRight from '../../__mocks__/jsons/user/userRight.json'
import userWrong from '../../__mocks__/jsons/user/userWrong.json'

describe('PROVIDERS | GithubUserProvider', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  describe('getUser', () => {
    it('gets and returns an user by username', async () => {
      // GIVEN
      const axiosHttpClient = new AxiosHttpClient(config.API_ENDPOINT)
      const userProvider = new GithubUserProvider(axiosHttpClient)

      const expectedResult: User = userFixture

      // WHEN
      jest.spyOn(axiosHttpClient, 'get').mockResolvedValue(userRight)

      const assertion = await userProvider.getUser('username')

      // THEN
      expect(assertion).toEqual(expectedResult)
    })

    it('throws if the response as bad shape', async () => {
      // GIVEN
      const axiosHttpClient = new AxiosHttpClient(config.API_ENDPOINT)
      const userProvider = new GithubUserProvider(axiosHttpClient)

      // WHEN
      jest.spyOn(axiosHttpClient, 'get').mockResolvedValue(userWrong)

      const promise = userProvider.getUser('username')

      // THEN
      await expect(promise).rejects.toThrow()
    })

    it('throws if the request failed', async () => {
      // GIVEN
      const axiosHttpClient = new AxiosHttpClient(config.API_ENDPOINT)
      const userProvider = new GithubUserProvider(axiosHttpClient)

      // WHEN
      jest.spyOn(axiosHttpClient, 'get').mockImplementation(() => Promise.reject())

      const promise = userProvider.getUser('username')

      // THEN
      await expect(promise).rejects.toThrow()
    })
  })
})
