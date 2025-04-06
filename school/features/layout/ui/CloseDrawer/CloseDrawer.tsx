import { View, Pressable, PressableProps, StyleSheet } from 'react-native'
import { useState } from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import CloseIcon from '../../../../assets/icons/close'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/commonjs/src/types'

export function CloseDrawer(navigation: DrawerNavigationHelpers) {
    const [clicked, setClicked] = useState(false)
    return (
        <Pressable
            onPress={() => {
                navigation.closeDrawer()
            }}
        >
            <View style={styles.button}>
                <CloseIcon />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 20,
        top: 20,
    },
})
