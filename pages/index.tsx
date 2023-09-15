import React from 'react'
import type {NextPage} from 'next'
import styled from 'styled-components'
import MainSection from "@/core/application/components/main-section/MainSection";
import PageLayout from "@/core/application/components/layout/PageLayout";
import {NavRoute} from "@/core/application/constants/routes";

const Home: NextPage = () => {
    return (
        <PageLayout currentRoute={NavRoute.HOME}>
            <MainSection/>
        </PageLayout>
    )
}

export default Home

