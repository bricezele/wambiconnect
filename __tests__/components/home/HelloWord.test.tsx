import { render, screen } from '@testing-library/react'
import { Chance } from 'chance'

import HelloWorld from '../../../core/application/components/home/HelloWorld'
import { testIds } from '../../../core/application/constants/testIds'
import TestWrapper from '../../utils/TestWrapper'

const chance = new Chance()

describe('HelloWord', () => {
  it('Should render The HelloWord with the correct prop', () => {
    const name = chance.name()
    render(
      <TestWrapper>
        <HelloWorld name={name} />
      </TestWrapper>
    )

    expect(screen.getByText(`Hello ${name}`))
    expect(screen.getByTestId(testIds.components.helloWorld.image)).not.toBeNull()
  })
})
