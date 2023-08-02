import React from 'react'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'styled-components'
import { DependenciesContainerContext } from '../../core/application/contexts/DependenciesContainerContext'
import { createDependencies } from '../../core/application/dependencies'
import Theme from '../../themes/Theme'
import localesEn from '../../locales/en.json'


export interface ITestWrapperProps {
  children?: React.ReactNode
}

const TestWrapper: React.FC<ITestWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <IntlProvider messages={localesEn} locale={'en'} defaultLocale={'en'}>
        <DependenciesContainerContext.Provider value={createDependencies()}>
          {children}
        </DependenciesContainerContext.Provider>
      </IntlProvider>
    </ThemeProvider>
  )
}

export default TestWrapper
