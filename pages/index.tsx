import React, {useState} from 'react'
import type {NextPage} from 'next'
import styled from 'styled-components'
import {useIntl} from 'react-intl'
import {HomeViewModel, HomeViewModelState} from '../core/application/viewModels/home/HomeViewModel'
import Header from "@/core/application/components/header/Header";

const Home: NextPage = () => {
    const intl = useIntl()

    const [homeState, setHomeState] = useState<HomeViewModelState>(HomeViewModel.defaultState)

    const {user, isLoading, error} = homeState

    return (
        <Container>
            <Header/>
        </Container>
    )
}

export default Home

const Container = styled.div`
  width: 100%;
  position: relative;
  float: left;
`
