import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'
import { useIntl } from 'react-intl'
import HelloWorld from '../core/application/components/home/HelloWorld'
import { HomeViewModel, HomeViewModelState } from '../core/application/viewModels/home/HomeViewModel'
import { useDependencies } from '../core/application/contexts/DependenciesContainerContext'

const Home: NextPage = () => {
  const intl = useIntl()

  const { userProvider } = useDependencies()
  const [homeState, setHomeState] = useState<HomeViewModelState>(HomeViewModel.defaultState)
  const [homeVM] = useState(new HomeViewModel(userProvider, setHomeState))

  useEffect(() => {
    homeVM.getUser('TheoZanchiAppstud')
  }, [])

  const { user, isLoading, error } = homeState

  return (
    <Container>
      <Main>
        <HelloWorld name="AppStud" />
        <h1>{intl.formatMessage({ id: 'HomePage.Title' })}</h1>
        {isLoading && <p>{intl.formatMessage({ id: 'Common.Loading' })}</p>}
        {!isLoading && !!user && <p>{intl.formatMessage({ id: 'HomePage.User' }, { username: user.name })}</p>}
        {!isLoading && !!error && <p>{error.name}</p>}
      </Main>
    </Container>
  )
}

export default Home

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
