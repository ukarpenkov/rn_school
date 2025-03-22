import { atom } from 'jotai'
import { User } from './user.model'

export const profileAtom = atom<UserState>({
    profile: {
        name: 'John',
        id: 1,
    },
    isLoading: false,
    error: null,
})

export interface UserState {
    profile: User | null
    isLoading: boolean
    error: string | null
}
