import { Text, View } from 'react-native'
import { useSetAtom } from 'jotai'
import { logoutAtom } from '../../entities/auth/model/auth.state'

export default function Profile() {
    const logout = useSetAtom(logoutAtom)
    return (
        <View>
            <Text>PROFILE</Text>
        </View>
    )
}
