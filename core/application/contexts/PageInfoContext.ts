import {NavRoute} from "@/core/application/constants/routes";
import React from "react";
import {Locale} from "@/core/domain/enums/Locale";

/**
 * @Project wambi-connect
 * @File PageInfoContext.ts
 * @Path core/application/contexts
 * @Author BRICE ZELE
 * @Date 15/09/2023
 */
interface IPageInfoContext {
    currentRoute: NavRoute
    locale: Locale
}

export const pageInfoDefault: IPageInfoContext = {
    currentRoute: NavRoute.HOME,
    locale: Locale.EN,
}

export const PageInfoContext = React.createContext<IPageInfoContext>(pageInfoDefault)

export const usePageInfo = (): IPageInfoContext => React.useContext(PageInfoContext)
