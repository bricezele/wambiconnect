import React from 'react'
import { createDependencies, Dependencies } from '../dependencies'

export const DependenciesContainerContext = React.createContext<Dependencies>(createDependencies())

export const useDependencies = (): Dependencies => React.useContext(DependenciesContainerContext)
