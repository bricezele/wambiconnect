import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import localesFr from '../locales/fr.json'
import localesEn from '../locales/en.json'
import { ThemeProvider } from 'styled-components'
import styled, { createGlobalStyle } from 'styled-components'
import '../public/css/minireset.css'
import { DEFAULT_LOCALE } from '../core/constants'
import Theme from '../themes/Theme'
import { createDependencies } from '../core/application/dependencies'
import { DependenciesContainerContext } from '../core/application/contexts/DependenciesContainerContext'

const messages: Record<string, any> = {
  fr: localesFr,
  en: localesEn
}

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const [locale, setLocale] = useState<string>(DEFAULT_LOCALE)

  useEffect(() => {
    if (router.locale && router.locale in messages) {
      setLocale(router.locale)
    }
  }, [router.locale])

  return (
    <ThemeProvider theme={Theme}>
      <DependenciesContainerContext.Provider value={createDependencies()}>
        <GlobalStyle />
        <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={DEFAULT_LOCALE}>
          <Component {...pageProps} />
          <Link legacyBehavior href="/" locale={locale === 'fr' ? 'en' : 'fr'}>
            <a>
              <Locale selected={locale === 'en'}>EN</Locale>&nbsp;/&nbsp;<Locale selected={locale === 'fr'}>FR</Locale>
            </a>
          </Link>
        </IntlProvider>
      </DependenciesContainerContext.Provider>
    </ThemeProvider>
  )
}
export default App

interface LocaleProps {
  selected: boolean
}

const Locale = styled.span<LocaleProps>`
  text-decoration: ${({ selected }) => (selected ? 'underline' : 'none')};
`

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    height: 100vh;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    color: ${({ theme }) => theme.text.color.black};
    background: #FFF;
    border: 1px 
  }

  #root {
    min-height: 100%;
  }

  button {
    background-color: transparent;
    border: none;
  }

  input[type=number] {
    -moz-appearance: textfield; /* Firefox */
  }

  input, textarea {
    /* Remove ios safari input inner shadow */
    appearance: none;
    font-family: 'Roboto', sans-serif;
    outline: none;
  }

  b, strong {
    font-weight: ${({ theme }) => theme.text.weight.bold};
  }
`
