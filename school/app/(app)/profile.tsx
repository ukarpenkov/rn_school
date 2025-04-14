import { Text, View } from 'react-native'
import { useSetAtom } from 'jotai'
import { logoutAtom } from '../../entities/auth/model/auth.state'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Button } from '../../shared/Button/Button'

export default function Profile() {
    const [image, setImage] = useState(null)

    const pickAvatar = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        })
        console.log(result)
    }
    return (
        <View>
            <Text>PROFILE</Text>
            <Button text="Выбрать изображение" onPress={pickAvatar}></Button>
        </View>
    )
}
