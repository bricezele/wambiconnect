/**
 * @Project wambi-connect
 * @File IContentProvider.ts
 * @Path core/domain/providers
 * @Author BRICE ZELE
 * @Date 04/08/2023
 */
export interface IContentProvider {
    getPageHeader(locale: string): Promise<any>
}
