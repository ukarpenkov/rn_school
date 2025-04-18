import { Alert, Text, View } from 'react-native'
import { useSetAtom } from 'jotai'
import { logoutAtom } from '../../entities/auth/model/auth.state'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Button } from '../../shared/Button/Button'

export default function Profile() {
    const [image, setImage] = useState(null)
    const [cameraPermissions, requestCameraPermission] =
        ImagePicker.useCameraPermissions()

    const verifyPermissions = async () => {
        if (
            cameraPermissions?.status ===
            ImagePicker.PermissionStatus.UNDETERMINED
        ) {
            const res = await requestCameraPermission()
            return res.granted
        }
        if (cameraPermissions?.status === ImagePicker.PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient permissions!',
                'You need to grant camera permissions to use this app.'
            )
            return false
        }
        return true
    }

    const pickAvatar = async () => {
        const isPermissionsGranted = await verifyPermissions()
        if (!isPermissionsGranted) {
            return
        }
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
