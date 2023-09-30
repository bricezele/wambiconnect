import {DefaultTheme} from 'styled-components'

interface IResponsiveValues {
    mobile: string
    laptop: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            primary: string
            primaryLight: string
            secondary: string
            lightGreen: string
            darkGreen: string
            white: string
            black: string
            text: string
            textGrey: string
            background: string
            lightGrey: string
            lightTagGrey: string
            grey: string
            error: string
            // Reforestaction palette
            chromeGreen: string
            forestGreen: string
            mossGreen: string
            pistachioGreen: string
            gold: string
            goldYellow: string
            taupeBeige: string
            carbonBlue: string
            groundRed: string
            prussianBlue: string
            borderGrey: string
            stepperBackground: string
            secondaryBrownLight: string
            secondaryBlue: string
            secondaryGreenLight: string
            secondaryRed: string
            secondaryGrey: string
            lightGreenGrey: string
        }
        size: {
            xsmall: string
            small: string
            compact: string
            normal: string
            large: string
            xLarge: string
            xxLarge: string
            input: string
            title: string
            pageTitle: string
            articleTitleMobile: string
            articleTitle: string
            sectionTitle: string
            articleBannerTitle: string
            big: string
            bigger: string
            biggest: string
        }
        font: {
            default: string
            title: string
        }
        weight: {
            light: number
            normal: number
            semi: number
            medium: number
            bold: number
        }
        layout: {
            padding: {
                default: {
                    mobile: string
                    laptop: string
                    medium: string
                }
                article: IResponsiveValues
            }
            margin: {
                default: IResponsiveValues
                component: {
                    xsmall: string
                    small: string
                    medium: string
                    big: string
                }
            }
            header: {
                height: IResponsiveValues
                contentMaxWidth: IResponsiveValues
            }
            contentMaxWidth: IResponsiveValues
        }
    }
}

const Theme: DefaultTheme = {
    color: {
        primary: '#053D2B',
        primaryLight: '#2B743A',
        secondary: '#639E40',
        lightGreen: '#EFF5EC',
        darkGreen: '#639e40',
        white: '#ffffff',
        black: '#0A290E',
        text: '#3C3C3B',
        textGrey: '#868686',
        background: '#E5E5E5',
        lightGrey: '#F6F6F6',
        lightTagGrey: '#F1F3F3',
        grey: '#D3D3D3',
        error: '#D84B45',
        // Reforestaction palette
        chromeGreen: '#083E2C',
        forestGreen: '#2A7439',
        mossGreen: '#639F42',
        pistachioGreen: '#B5CD36',
        gold: '#C59A17',
        goldYellow: '#D8A350',
        taupeBeige: '#B2A285',
        carbonBlue: '#0E8089',
        groundRed: '#A04C23',
        prussianBlue: '#3F414D',
        borderGrey: '#E4E4E4',
        stepperBackground: '#EFF1F6',
        secondaryBrownLight: '#B3A284',
        secondaryBlue: '#128089',
        secondaryGreenLight: '#B6CE38',
        secondaryRed: '#BE4F23',
        secondaryGrey: '#F2F2F2',
        lightGreenGrey: '#E6ECEA'
    },
    size: {
        xsmall: '0.875rem',
        small: '1.3rem',
        compact: '1.4rem',
        normal: '1.6rem',
        large: '1.75rem',
        xLarge: '1.8rem',
        xxLarge: '2.6rem',
        input: '2rem',
        title: '2.2rem',
        pageTitle: '4.8rem',
        articleTitleMobile: '2.4rem',
        articleTitle: '2.6rem',
        sectionTitle: '3.2rem',
        articleBannerTitle: '4.8rem',
        big: '3rem',
        bigger: '3.4rem',
        biggest: '5rem'
    },
    font: {
        default: 'Montserrat, sans-serif',
        title: 'Oswald, sans-serif'
    },
    weight: {
        light: 300,
        normal: 400,
        semi: 500,
        medium: 600,
        bold: 700
    },
    layout: {
        padding: {
            default: {
                laptop: '15.2rem',
                mobile: '2.4rem',
                medium: '4.8rem'
            },
            article: {
                laptop: '13.7rem 18rem',
                mobile: '2.4rem 6.2rem'
            }
        },
        margin: {
            default: {
                laptop: '15.2rem',
                mobile: '2.4rem'
            },
            component: {
                xsmall: '1.2rem',
                small: '2.4rem',
                medium: '4.8rem',
                big: '5.6rem'
            }
        },
        header: {
            height: {
                laptop: '11rem',
                mobile: '7.2rem'
            },
            contentMaxWidth: {
                laptop: '121rem',
                mobile: '100%'
            }
        },
        contentMaxWidth: {
            laptop: '113.6rem',
            mobile: '100%'
        }
    }
}

export default Theme
