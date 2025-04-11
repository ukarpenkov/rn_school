import {
    DrawerContentComponentProps,
    DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/commonjs/src/types'
import { useState } from 'react'
import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts, Gaps } from '../../../../shared/tokens'

interface MenuItemProps {
    drawer: DrawerContentComponentProps
    icon: React.ReactNode
    text: string
    path: string
}

export function MenuItem({
    drawer,
    icon,
    text,
    path,
    ...props
}: MenuItemProps & PressableProps) {
    const [clicked, setClicked] = useState(false)
    const isActive = drawer.state.routes[drawer.state.index].name === path
    return (
        <Pressable
            {...props}
            onPress={() => drawer.navigation.navigate(path)}
            onPressIn={() => setClicked(true)}
            onPressOut={() => setClicked(false)}
        >
            <View
                style={{
                    ...styles.menu,
                    borderColor: isActive ? Colors.primary : Colors.black,
                    backgroundColor:
                        clicked || isActive ? Colors.violetDark : Colors.black,
                }}
            >
                {icon}
                <Text style={styles.text}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        gap: Gaps.g20,
        paddingHorizontal: 24,
        paddingVertical: 16,
        alignItems: 'center',
        borderRightWidth: 5,
    },
    text: {
        color: Colors.white,
        fontSize: Fonts.f16,
        fontFamily: Fonts.regular,
    },
})
