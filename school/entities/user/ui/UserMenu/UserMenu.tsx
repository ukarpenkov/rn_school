import { Image, StyleSheet, Text, View } from 'react-native'
import { User } from '../../model/user.model'
import { Colors, Fonts, Gaps } from '../../../../shared/tokens'

export function UserMenu({ user }: { user: User | null }) {
    if (!user) {
        return
    }
    return (
        <View style={styles.container}>
            {user.profile.photo ? (
                <Image
                    style={styles.image}
                    source={{ uri: user.profile.photo }}
                />
            ) : (
                <Image
                    source={require('../../../../assets/images/empty_avatar.png')}
                />
            )}
            <Text style={styles.name}>{user.profile.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: Fonts.f16,
        fontFamily: Fonts.regular,
        color: Colors.white,
    },
    container: {
        alignItems: 'center',
        gap: Gaps.g8,
        marginTop: 30,
    },
})
