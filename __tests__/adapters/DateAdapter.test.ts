import DateAdapter from '../../core/data/adapters/DateAdapter'

describe('ADAPTER | DateAdapter', () => {
  it('Adapts a response with correct shape', () => {
    // GIVEN
    const dateAdapter = new DateAdapter()

    const expectedResult: string = '1998-02-27T10:11:45.965Z'

    // WHEN
    const assertion = dateAdapter.adapt('1998-02-27T10:11:45.965Z')

    // THEN
    expect(assertion).toEqual(expectedResult)
  })

  it('Throws an error if response do not have a correct shape', () => {
    // GIVEN
    const dateAdapter = new DateAdapter()

    // WHEN
    const assertion = () => dateAdapter.adapt('Invalid date')

    // THEN
    expect(assertion).toThrow()
  })
})
