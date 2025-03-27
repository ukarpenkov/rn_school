import AsyncStorage from '@react-native-async-storage/async-storage'
import { atom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import { IAuthResponse, ILoginRequest } from './auth.interfaces'
import axios, { AxiosError } from 'axios'
import { API } from '../api/api'

const storage = createJSONStorage<AuthState>(() => AsyncStorage)
export const authAtom = atomWithStorage<AuthState>(
    'auth',
    {
        access_token: null,
        isLoading: false,
        error: null,
    },
    storage
)

export const loginAtom = atom(
    (get) => get(authAtom),
    async (_get, set, { email, password }: ILoginRequest) => {
        set(authAtom, {
            isLoading: true,
            access_token: null,
            error: null,
        })

        try {
            const { data } = await axios.post<IAuthResponse>(API.login, {
                email,
                password,
            })
            set(authAtom, {
                access_token: data.accessToken,
                isLoading: false,
                error: null,
            })
        } catch (error) {
            if (error instanceof AxiosError) {
                set(authAtom, {
                    access_token: null,
                    isLoading: false,
                    error: error.response?.data.message,
                })
            }
        }
    }
)

export interface AuthState {
    access_token: string | null
    isLoading: boolean
    error: string | null
}
