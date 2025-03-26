import { Text, View } from 'react-native'
import { Colors } from '../../shared/tokens'
import { useAtom } from 'jotai'
import { profileAtom } from '../../entities/user/model/user.state'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { API } from '../../entities/auth/api/api'
import { IAuthResponse } from '../../entities/auth/model/auth.interfaces'

export default function MyCourses() {
    const [profile] = useAtom(profileAtom)

    const login = async () => {
        const { data } = await axios.post<IAuthResponse>(API.login, {
            email: 'vasia@pupkin.ru',
            password: '12345678',
        })
        console.log(data)
    }

    useEffect(() => {
        login()
    }, [])

    return (
        <View>
            <Text>{profile.profile?.name}</Text>
        </View>
    )
}
