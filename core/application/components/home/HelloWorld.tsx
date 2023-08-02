import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { Assets } from '../../constants/assets'
import { testIds } from '../../constants/testIds'

export interface IHelloWordProps {
  name: string
}

const HelloWorld: React.FC<IHelloWordProps> = ({ name }) => {
  const { formatMessage } = useIntl()

  return (
    <Container>
      <Title>{formatMessage({ id: 'HomePage.Greetings' }, { name })}</Title>
      <Image src={Assets.images.logo} data-testid={testIds.components.helloWorld.image} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 2.5rem;
`

const Image = styled.img`
  width: 25rem;
  height: 25rem;
`

export default HelloWorld
