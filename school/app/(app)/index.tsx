import { Text, View } from 'react-native'
import { useAtom } from 'jotai'
import { profileAtom } from '../../entities/user/model/user.state'
import { loginAtom } from '../../entities/auth/model/auth.state'
import { useEffect } from 'react'

export default function MyCourses() {
    const [auth, login] = useAtom(loginAtom)

    useEffect(() => {
        login({ email: 'vasia@pupkin.ru', password: '12345678' })
    }, [auth.access_token])
    return (
        <View>
            <Text>{auth?.access_token}</Text>
        </View>
    )
}
