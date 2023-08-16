import React from 'react'
import type {NextPage} from 'next'
import styled from 'styled-components'
import Header from "@/core/application/components/header/Header";
import MainSection from "@/core/application/components/main-section/MainSection";

const Home: NextPage = () => {
    return (
        <Container>
            <Header/>
            <MainSection/>
        </Container>
    )
}

export default Home

const Container = styled.div`
  width: 100%;
  position: relative;
  float: left;
`
