export const deviceSizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    tabletL: '992px',
    laptop: '1024px',
    laptopM: '1200px',
    laptopL: '1440px',
    desktop: '1980px',
    wide: '2560px'
}

export const breakpoints = {
    mobileS: `(min-width: ${deviceSizes.mobileS})`,
    mobileM: `(min-width: ${deviceSizes.mobileM})`,
    mobileL: `(min-width: ${deviceSizes.mobileL})`,
    tablet: `(min-width: ${deviceSizes.tablet})`,
    tabletL: `(min-width: ${deviceSizes.tabletL})`,
    laptop: `(min-width: ${deviceSizes.laptop})`,
    laptopM: `(min-width: ${deviceSizes.laptopM})`,
    laptopL: `(min-width: ${deviceSizes.laptopL})`,
    desktop: `(min-width: ${deviceSizes.desktop})`,
    wide: `(min-width: ${deviceSizes.wide})`
}
