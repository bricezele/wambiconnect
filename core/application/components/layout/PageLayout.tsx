/**
 * @Project wambi-connect
 * @File PageLayout.tsx
 * @Path core/application/components/layout
 * @Author BRICE ZELE
 * @Date 15/09/2023
 */
import React, {PropsWithChildren} from 'react'
import styled from 'styled-components'
import {NavRoute} from '../../constants/routes'
import Header from '../header/Header'
import {PageInfoContext, pageInfoDefault} from '../../contexts/PageInfoContext'
import {Locale} from "@/core/domain/enums/Locale"

// Component definition
// --------------------------------------------------------------------------------------

interface Props {
    children?: React.ReactNode
    currentRoute: NavRoute
    locale?: Locale
}

const PageLayout: React.FC<PropsWithChildren<Props>> = ({
                                                            children,
                                                            currentRoute,
                                                            locale
                                                        }) => {

    return (
        <PageLayoutContainer>
            <PageInfoContext.Provider
                value={{
                    currentRoute: currentRoute,
                    locale: locale || pageInfoDefault.locale
                }}
            >
                <Header/>
                <MainContent role="main">
                    {children}
                </MainContent>
            </PageInfoContext.Provider>
        </PageLayoutContainer>
    )
}

export default PageLayout

// Styles
// --------------------------------------------------------------------------------------

const PageLayoutContainer = styled.div`
  width: 100%;
`

const MainContent = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
`
