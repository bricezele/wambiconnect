/**
 * @Project wambi-connect
 * @File ThemeSelector.tsx
 * @Path core/application/components
 * @Author BRICE ZELE
 * @Date 15/09/2023
 */
import React, {LazyExoticComponent, PropsWithChildren} from "react";
import dynamic from "next/dynamic"
import {ColorScheme} from "@/core/domain/enums/ColorScheme";
import useLocalStorage from "@/core/application/hooks/useLocalStorage";


// @ts-ignore
const LightTheme = dynamic(() => import('../../../public/css/light-color.css'), {suspense: true});
// @ts-ignore
const DarkTheme = dynamic(() => import('../../../public/css/dark-color.css'), {suspense: true});
const ThemeSelector: React.FC<PropsWithChildren> = ({children}) => {
    const [colorScheme, setColorScheme] = useLocalStorage('COLOR_SCHEME', ColorScheme.DARK)
    const COLOR_SCHEME = (ColorScheme[colorScheme as keyof typeof ColorScheme] ?? ColorScheme.DARK)
    return (
        <>
            <React.Suspense fallback={<></>}>
                {(COLOR_SCHEME === ColorScheme.LIGHT) && <LightTheme/>}
                {(COLOR_SCHEME === ColorScheme.DARK) && <DarkTheme/>}
            </React.Suspense>
            {children}
        </>
    )
}

export default ThemeSelector
