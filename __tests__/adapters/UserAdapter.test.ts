import { userFixture } from '../../__mocks__/datasets/userFixture'
import { User } from '../../core/domain/entities/user/User'
import userRight from '../../__mocks__/jsons/user/userRight.json'
import userWrong from '../../__mocks__/jsons/user/userWrong.json'
import { UserAdapter } from '../../core/data/adapters/user/UserAdapter'

describe('ADAPTER | UserAdapter', () => {
  it('Adapts a response with correct shape', () => {
    // GIVEN
    const userAdapter = new UserAdapter()

    const expectedResult: User = userFixture

    // WHEN
    const assertion = userAdapter.adapt(userRight)

    // THEN
    expect(assertion).toEqual(expectedResult)
  })

  it('Throws an error if the adapted object do not have a correct shape', () => {
    // GIVEN
    const userAdapter = new UserAdapter()

    // WHEN
    const assertion = () => userAdapter.adapt(userWrong)

    // THEN
    expect(assertion).toThrow()
  })
})
