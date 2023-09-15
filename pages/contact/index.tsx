/**
 * @Project wambi-connect
 * @File index.ts
 * @Path pages/contact
 * @Author BRICE ZELE
 * @Date 07/08/2023
 */
import React from 'react'
import type {NextPage} from 'next'
import styled from 'styled-components'
import Header from "@/core/application/components/header/Header";

const Contact: NextPage = () => {

    return (
        <Container>
            <Header/>
        </Container>
    )
}

export default Contact

const Container = styled.div`
  width: 100%;
`
