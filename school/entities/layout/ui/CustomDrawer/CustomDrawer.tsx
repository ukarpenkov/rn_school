import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors } from '../../../../shared/tokens'
import { CustomLink } from '../../../../shared/CustomLink/CustomLink'
import { CloseDrawer } from '../../../../features/layout/ui/CloseDrawer/CloseDrawer'
import { useAtom, useSetAtom } from 'jotai'
import { logoutAtom } from '../../../auth/model/auth.state'
import { loadProfileAtom } from '../../../user/model/user.state'
import { useEffect } from 'react'

export function CustomDrawer(props: DrawerContentComponentProps) {
    const logout = useSetAtom(logoutAtom)
    const [profile, loadProfile] = useAtom(loadProfileAtom)

    useEffect(() => {
        loadProfile()
    }, [])
    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={styles.scrollView}
        >
            <View style={styles.content}>
                <CloseDrawer {...props.navigation} />
                <Text>{profile.profile?.profile.name}</Text>
            </View>

            <View style={styles.footer}>
                <CustomLink
                    href="/login"
                    text="Выход"
                    onPress={() => logout()}
                />
                <Image
                    style={styles.logo}
                    source={require('../../../../assets/logo.png')}
                    resizeMode="contain"
                />
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    logo: {
        width: 160,
    },
    content: {
        flex: 1,
    },
    footer: {
        gap: 50,
        marginBottom: 40,
        alignItems: 'center',
    },
})
