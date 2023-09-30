import {ICategory} from "@/core/domain/valueObjects/header/ICategory";

/**
 * @Project wambi-connect
 * @File IHeaderInfo.ts
 * @Path core/domain/valueObjects/header
 * @Author BRICE ZELE
 * @Date 04/08/2023
 */
export enum HeaderCategory {
    HOME = 'HOME',
    PAGE = 'PAGE',
    CONTACT = 'CONTACT',
}

export type IHeaderInfo = Record<HeaderCategory, ICategory>
