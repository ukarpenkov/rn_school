import {
    launchImageLibraryAsync,
    PermissionStatus,
    useMediaLibraryPermissions,
} from 'expo-image-picker'
import { Alert, Pressable, StyleSheet, View, Text } from 'react-native'
import UploadIcon from '../../assets/icons/uploadIcon'
import { Colors, Fonts, Gaps, Radius } from '../tokens'
import FormData from 'form-data'
import axios, { AxiosError } from 'axios'
import { FILE_API } from '../api'
import { UploadResponse } from './ImageUploader.interface'

type ImageUploaderProps = {
    onUpload: (uri: string) => void
}

export function ImageUploader({ onUpload }: ImageUploaderProps) {
    const [libraryPermissions, requestLibraryPermission] =
        useMediaLibraryPermissions()
    const verifyMediaPermissions = async () => {
        if (libraryPermissions?.status === PermissionStatus.UNDETERMINED) {
            const res = await requestLibraryPermission()
            return res.granted
        }
        if (libraryPermissions?.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient permissions!',
                'You need to grant galery permissions to use this app.'
            )
            return false
        }
        return true
    }

    const pickImage = async () => {
        const isPermissionsGranted = await verifyMediaPermissions()
        if (!isPermissionsGranted) {
            return
        }
        const result = await launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        })
        if (!result.assets) {
            return
        }
        await uploadToServer(
            result.assets[0].uri,
            result.assets[0].fileName || ''
        )
        onUpload(result.assets[0].uri)
    }

    const uploadToServer = async (
        uri: string,
        fileName: string
    ): Promise<null | any> => {
        const formData = new FormData()
        formData.append('file', {
            uri,
            name: fileName,
            type: 'image/jpeg',
        })
        try {
            const { data } = await axios.post<UploadResponse>(
                FILE_API.uploadImage,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )
            onUpload(data.urls.original)
        } catch (error) {
            if (error instanceof AxiosError) {
                console.error('Error uploading image:', error.message)
            }
            return null
        }
    }
    return (
        <Pressable onPress={pickImage}>
            <View style={styles.container}>
                <UploadIcon />
                <Text style={styles.text}>Загрузить изображение</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: Gaps.g8,
        backgroundColor: Colors.violetDark,
        borderRadius: Radius.r10,
        paddingHorizontal: 20,
        paddingVertical: 17,
        alignItems: 'center',
    },
    text: {
        fontSize: Fonts.f14,
        fontFamily: Fonts.regular,
        color: Colors.white,
    },
})
