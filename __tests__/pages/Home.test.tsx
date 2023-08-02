import React from 'react'
import { act, render } from '@testing-library/react'
import Home from '../../pages'
import TestWrapper from '../utils/TestWrapper'
import { GithubUserProvider } from '../../core/data/providers/GithubUserProvider'
import { userFixture } from '../../__mocks__/datasets/userFixture'

describe('PAGE | Home', () => {
  it('Should load and display user', async () => {
    // GIVEN
    const tree = (
      <TestWrapper>
        <Home />
      </TestWrapper>
    )

    // WHEN
    jest.spyOn(GithubUserProvider.prototype, 'getUser').mockResolvedValue(userFixture)

    const bot = render(tree)

    // THEN
    expect(GithubUserProvider.prototype.getUser).toHaveBeenCalledWith('TheoZanchiAppstud')

    expect(bot.getByText('Loading'))

    await act(async () => {
      await Promise.resolve() // To run all other promises
    })

    expect(bot.getByText(`User: ${userFixture.name}`))
  })
})
