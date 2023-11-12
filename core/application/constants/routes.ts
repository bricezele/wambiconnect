import {Locale} from "@/core/domain/enums/Locale";

/** Available navigation routes */
export enum NavRoute {
    HOME = 'HOME',
    FEATURE = 'FEATURE',
    COUNTER = 'COUNTER',
    FUNCTIONNALITIES = 'FUNCTIONNALITIES',
    TESTIMONIAL = 'TESTIMONIAL',
    DOWNLOAD_APP = 'DOWNLOAD_APP',
    TEAM = 'TEAM',
}

export const Routes: Record<Locale, Record<NavRoute, (...args: string[]) => string>> = {
    [Locale.EN]: {
        HOME: () => '/',
        FEATURE: () => '#feature',
        COUNTER: () => '#about',
        FUNCTIONNALITIES: () => '#services',
        TESTIMONIAL: () => '#testimonials',
        DOWNLOAD_APP: () => '#DOWNLOAD_APP',
        TEAM: () => '#team',
    },
    [Locale.FR]: {
        HOME: () => '/',
        FEATURE: () => '#feature',
        COUNTER: () => '#about',
        FUNCTIONNALITIES: () => '#services',
        TESTIMONIAL: () => '#testimonials',
        DOWNLOAD_APP: () => '#DOWNLOAD_APP',
        TEAM: () => '#team',
    }
}

export interface IRouteConfig {
}

const defaultConfig: IRouteConfig = {}


