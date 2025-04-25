import { Image, StyleSheet, Text, View } from 'react-native'

export function Avatar({ image }: { image: string | null }) {
    return (
        <>
            {image ? (
                <Image style={styles.image} source={{ uri: image }} />
            ) : (
                <Image
                    source={require('../../../../assets/images/empty_avatar.png')}
                />
            )}
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
})
