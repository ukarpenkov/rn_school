import { Text, View } from 'react-native'
import { Colors } from '../../shared/tokens'
import { useAtom } from 'jotai'
import { profileAtom } from '../../entities/user/model/user.state'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function MyCourses() {
    const [profile] = useAtom(profileAtom)

    useEffect(() => {
        AsyncStorage.setItem('demo', 'Test').then(async () => {
            console.log(await AsyncStorage.getAllKeys())
            console.log(await AsyncStorage.getItem('demo'))
            console.log(await AsyncStorage.removeItem('demo'))
            console.log(await AsyncStorage.getItem('demo'))
        })
    }, [profile])
    return (
        <View>
            <Text>{profile.profile?.name}</Text>
        </View>
    )
}
