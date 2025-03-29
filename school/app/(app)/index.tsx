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

export default function MyCourses() {

    return (
        <View>
            <Text>ind---</Text>
        </View>
    )
}
