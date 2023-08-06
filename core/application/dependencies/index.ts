import {IHttpClient} from '../../domain/models/IHttpClient'
import {API_ENDPOINT, STRAPI_URL} from '../../config'
import {AxiosHttpClient} from '../../data/models/AxiosHttpClient'
import {IContentProvider} from "@/core/domain/providers/IContentProvider";
import {StrapiContentProvider} from "@/core/data/providers/StrapiContentProvider";

export interface Dependencies {
    httpClient: IHttpClient
    contentProvider: IContentProvider
}

export const createDependencies = (): Dependencies => {
    const httpClient = new AxiosHttpClient(API_ENDPOINT)
    const contentHttpClient = new AxiosHttpClient(`${STRAPI_URL}/api`)

    const contentProvider = new StrapiContentProvider(contentHttpClient)

    return {
        httpClient,
        contentProvider
    }
}
