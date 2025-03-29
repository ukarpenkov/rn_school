import { Text, View } from 'react-native'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { profileAtom } from '../../entities/user/model/user.state'
import {
    authAtom,
    loginAtom,
    logoutAtom,
} from '../../entities/auth/model/auth.state'
import { useEffect } from 'react'
import { router, useRootNavigationState } from 'expo-router'
import { Button } from '../../shared/Button/Button'

export default function MyCourses() {
    const logout = useSetAtom(logoutAtom)
    return (
        <View>
            <Text>ind---</Text>
            <Button text="Выход" onPress={logout} />
        </View>
    )
}
