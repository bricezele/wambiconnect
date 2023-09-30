import {IContentProvider} from "@/core/domain/providers/IContentProvider";
import {IHttpClient} from "@/core/domain/models/IHttpClient";

/**
 * @Project wambi-connect
 * @File StrapiContentProvider.ts
 * @Path core/domain/providers
 * @Author BRICE ZELE
 * @Date 04/08/2023
 */
export class StrapiContentProvider implements IContentProvider {
    constructor(private httpClient: IHttpClient) {
    }

    getPageHeader(locale: string): Promise<any> {
        return Promise.resolve(undefined);
    }
}
