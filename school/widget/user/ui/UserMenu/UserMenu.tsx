import { Image, StyleSheet, Text, View } from 'react-native'
import { User } from '../../../../entities/user/model/user.model'
import { Colors, Fonts, Gaps } from '../../../../shared/tokens'
import { Avatar } from '../../../../entities/user/ui/Avatar/Avatar'

export function UserMenu({ user }: { user: User | null }) {
    if (!user) {
        return
    }
    return (
        <View style={styles.container}>
            <Avatar image={user.profile.photo ?? null} />
            <Text style={styles.name}>{user.profile.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: Fonts.f16,
        fontFamily: Fonts.regular,
        color: Colors.white,
    },
    container: {
        alignItems: 'center',
        gap: Gaps.g8,
        marginTop: 30,
        marginBottom: 40,
    },
})
