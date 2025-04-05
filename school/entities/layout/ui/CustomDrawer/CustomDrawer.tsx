import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors } from '../../../../shared/tokens'
import { CustomLink } from '../../../../shared/CustomLink/CustomLink'

export function CustomDrawer(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={styles.scrollView}
        >
            <View>
                <Text>TEXT</Text>
            </View>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../../../../assets/logo.png')}
                    resizeMode="contain"
                />
                <CustomLink href="/login" text="Выход" />
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
        width: 220,
    },
})
