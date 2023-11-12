import {RequestError} from '../../domain/models/DomainError'

export default class RequestErrorHandler {
    static handleRequestError(error: any) {
        if (error.response) {
            // Request was made, server responded status code
            const status = error.response.status

            if (status === 401 || status === 403) {
                // Unauthorized
                throw new RequestError.UnauthorizedError('Request failed with status code ', status)
            }

            if (status === 400) {
                // Bad request
                throw new RequestError.InvalidRequestFormatError('Bad request, Unknown validation error')
            }

            if (status >= 500) {
                throw new RequestError.ServerError('Server returned status code ', status)
            }
        } else if (error.request) {
            // Request was made, no response was received
            throw new RequestError.NoServerResponseError('No server response was received')
        }
        // Failed before sending the request or unknown error
        throw new RequestError.RequestFailedError('Request failed with unknown error')
    }
}
