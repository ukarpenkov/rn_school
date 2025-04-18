import { Alert, Image, Text, View } from 'react-native'
import { useSetAtom } from 'jotai'
import { logoutAtom } from '../../entities/auth/model/auth.state'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Button } from '../../shared/Button/Button'

export default function Profile() {
    const [image, setImage] = useState<string | null>(null)
    const [cameraPermissions, requestCameraPermission] =
        ImagePicker.useCameraPermissions()
    const [libraryPermissions, requestLibraryPermission] =
        ImagePicker.useMediaLibraryPermissions()

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
    const verifyMediaPermissions = async () => {
        if (
            libraryPermissions?.status ===
            ImagePicker.PermissionStatus.UNDETERMINED
        ) {
            const res = await requestLibraryPermission()
            return res.granted
        }
        if (cameraPermissions?.status === ImagePicker.PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient permissions!',
                'You need to grant galery permissions to use this app.'
            )
            return false
        }
        return true
    }

    const captureAvatar = async () => {
        const isPermissionsGranted = await verifyPermissions()
        if (!isPermissionsGranted) {
            return
        }
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        })
        if (!result.assets) {
            return
        }
        setImage(result.assets[0].uri)
    }
    const pickAvatar = async () => {
        const isPermissionsGranted = await verifyMediaPermissions()
        if (!isPermissionsGranted) {
            return
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        })
        if (!result.assets) {
            return
        }
        setImage(result.assets[0].uri)
    }
    return (
        <View>
            <Text>PROFILE</Text>
            <Button text="Снять изображение" onPress={captureAvatar}></Button>
            <Button text="Выбрать из галереи" onPress={pickAvatar}></Button>
            {image && (
                <Image
                    source={{
                        uri: image,
                        width: 200,
                        height: 200,
                    }}
                />
            )}
        </View>
    )
}
