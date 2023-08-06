import {User} from '../../../domain/entities/user/User'
import {DomainError} from '../../../domain/models/DomainError'
import {IUserProvider} from '../../../domain/providers/IUserProvider'
import React from "react";

export interface HomeViewModelState {
    user: User | null
    isLoading: boolean
    error: DomainError | null
}

export class HomeViewModel {
    static defaultState: HomeViewModelState = {
        user: null,
        isLoading: false,
        error: null
    }

    constructor(
        private userProvider: IUserProvider,
        private setHomeState: React.Dispatch<React.SetStateAction<HomeViewModelState>>
    ) {
    }

    async getUser(username: string): Promise<void> {
        try {
            // Set loading
            this.setHomeState({
                user: null,
                isLoading: true,
                error: null
            })
            const user = await this.userProvider.getUser(username)
            // Store user in state
            this.setHomeState({
                user: user,
                isLoading: false,
                error: null
            })
        } catch (error) {
            this.setHomeState({
                user: null,
                isLoading: false,
                error: error as DomainError
            })
        }
    }
}
