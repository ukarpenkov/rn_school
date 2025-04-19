import { Image, StyleSheet, View } from 'react-native'
import { useState } from 'react'
import { Gaps } from '../../shared/tokens'
import { ImageUploader } from '../../shared/ImageUploader/ImageUploader'

export default function Profile() {
    const [image, setImage] = useState<string | null>(null)
    // const [cameraPermissions, requestCameraPermission] =
    //     ImagePicker.useCameraPermissions()

    // const verifyPermissions = async () => {
    //     if (
    //         cameraPermissions?.status ===
    //         ImagePicker.PermissionStatus.UNDETERMINED
    //     ) {
    //         const res = await requestCameraPermission()
    //         return res.granted
    //     }
    //     if (cameraPermissions?.status === ImagePicker.PermissionStatus.DENIED) {
    //         Alert.alert(
    //             'Insufficient permissions!',
    //             'You need to grant camera permissions to use this app.'
    //         )
    //         return false
    //     }
    //     return true
    // }

    // const captureAvatar = async () => {
    //     const isPermissionsGranted = await verifyPermissions()
    //     if (!isPermissionsGranted) {
    //         return
    //     }
    //     const result = await ImagePicker.launchCameraAsync({
    //         mediaTypes: ['images', 'videos'],
    //         allowsEditing: true,
    //         aspect: [1, 1],
    //         quality: 0.5,
    //     })
    //     if (!result.assets) {
    //         return
    //     }
    //     setImage(result.assets[0].uri)
    // }

    return (
        <View style={styles.container}>
            {image ? (
                <Image
                    source={{
                        uri: image,
                        width: 200,
                        height: 200,
                    }}
                />
            ) : (
                <Image
                    source={require('../../assets/images/empty_avatar.png')}
                />
            )}
            <ImageUploader onUpload={setImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    container: {
        flexDirection: 'row',
        gap: Gaps.g20,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
})
