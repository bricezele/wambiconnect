import { DefaultTheme } from 'styled-components'
import { Colors } from './colors'

interface ResponsiveValues {
  mobile: string
  laptop: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    text: {
      color: {
        white: string
        black: string
      }
      size: {
        text: string
      }
      weight: {
        light: number
        normal: number
        medium: number
        semi: number
        bold: number
      }
      family: {}
    }
    layout: {
      background: {
        white: string
        black: string
      }
      padding: {
        default: ResponsiveValues
      }
    }
  }
}

const Theme: DefaultTheme = {
  text: {
    color: {
      white: Colors.white,
      black: Colors.black
    },
    size: {
      text: '2.3rem'
    },
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      semi: 700,
      bold: 700
    },
    family: {}
  },
  layout: {
    background: {
      white: Colors.white,
      black: Colors.black
    },
    padding: {
      default: {
        laptop: '15.2rem',
        mobile: '1.6rem'
      }
    }
  }
}

export default Theme
