import { createDependencies } from '../../core/application/dependencies'
import { HomeViewModel } from '../../core/application/viewModels/home/HomeViewModel'
import { GithubUserProvider } from '../../core/data/providers/GithubUserProvider'
import { RequestError } from '../../core/domain/models/DomainError'
import { userFixture } from '../../__mocks__/datasets/userFixture'

describe('VIEWMODEL | HomeViewModel', () => {
  describe('getDepartments', () => {
    it('fetchs the user and store him in state', async () => {
      // GIVEN
      const mockedSetHomeMapState = jest.fn()

      const { userProvider } = createDependencies()
      const homeVM = new HomeViewModel(userProvider, mockedSetHomeMapState)

      // WHEN
      jest.spyOn(GithubUserProvider.prototype, 'getUser').mockReturnValue(Promise.resolve(userFixture))

      await homeVM.getUser('TheoZanchiAppstud')

      // THEN
      expect(mockedSetHomeMapState).toHaveBeenNthCalledWith(1, {
        user: null,
        isLoading: true,
        error: null
      })
      expect(mockedSetHomeMapState).toHaveBeenNthCalledWith(2, {
        user: userFixture,
        isLoading: false,
        error: null
      })
    })

    it('set error in state if an error occured', async () => {
      // GIVEN
      const mockedSetHomeMapState = jest.fn()

      const { userProvider } = createDependencies()
      const homeVM = new HomeViewModel(userProvider, mockedSetHomeMapState)

      const mockedError = new RequestError.RequestFailedError('')

      // WHEN
      jest.spyOn(GithubUserProvider.prototype, 'getUser').mockImplementation(() => Promise.reject(mockedError))

      await homeVM.getUser('TheoZanchiAppstud')

      // THEN
      expect(mockedSetHomeMapState).toHaveBeenNthCalledWith(1, {
        user: null,
        isLoading: true,
        error: null
      })
      expect(mockedSetHomeMapState).toHaveBeenNthCalledWith(2, {
        user: null,
        isLoading: false,
        error: mockedError
      })
    })
  })
})
