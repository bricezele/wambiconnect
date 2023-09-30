import {Locale} from "@/core/domain/enums/Locale";

/** Available navigation routes */
export enum NavRoute {
    HOME = 'HOME'
}

export const Routes: Record<Locale, Record<NavRoute, (...args: string[]) => string>> = {
    [Locale.EN]: {
        HOME: () => '/'
    },
    [Locale.FR]: {
        HOME: () => '/'
    }
}

export interface IRouteConfig {
}

const defaultConfig: IRouteConfig = {}

export const RoutesConfig: Record<NavRoute, IRouteConfig> = {
    HOME: {...defaultConfig},
}

