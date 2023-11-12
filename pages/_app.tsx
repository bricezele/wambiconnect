import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {IntlProvider} from 'react-intl'
import type {AppProps} from 'next/app'
import localesFr from '../locales/fr.json'
import localesEn from '../locales/en.json'
import styled, {ThemeProvider} from 'styled-components'
import {withTranslateRoutes} from 'next-translate-routes'
import '../public/css/animate.css'
import '../public/css/bootstrap.min.css'
import '../public/css/font-awesome.min.css'
import '../public/css/materialdesignicons.min.css'
import '../public/css/responsive.css'
import '../public/css/dark-color.css'
import '../public/css/star-background.css'
import '../public/css/style.css'
import {DEFAULT_LOCALE} from '@/core/constants'
import Theme from '../themes/Theme'
import {createDependencies} from '@/core/application/dependencies'
import {DependenciesContainerContext} from '@/core/application/contexts/DependenciesContainerContext'
import GlobalStyle from "@/core/application/components/layout/GlobalStyle";
import Head from "next/head";

const messages: Record<string, any> = {
    fr: localesFr,
    en: localesEn
}


const App = ({Component, pageProps}: AppProps) => {
    const router = useRouter()
    const [locale, setLocale] = useState<string>(DEFAULT_LOCALE)

    useEffect(() => {
        if (router.locale && router.locale in messages) {
            setLocale(router.locale)
        }
    }, [router.locale])

    return (
        <>
            <Head>
                <title>Wambi</title>
            </Head>
            <ThemeProvider theme={Theme}>
                <DependenciesContainerContext.Provider value={createDependencies()}>
                    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={DEFAULT_LOCALE}>
                        <GlobalStyle/>
                        <Component {...pageProps} />
                    </IntlProvider>
                </DependenciesContainerContext.Provider>
            </ThemeProvider>
        </>
    )
}
export default withTranslateRoutes(App)

interface LocaleProps {
    selected: boolean
}

const Locale = styled.span<LocaleProps>`
  text-decoration: ${({selected}) => (selected ? 'underline' : 'none')};
`

