import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/commonjs/src/types'
import { useState } from 'react'
import { Pressable, PressableProps, Text, View } from 'react-native'

interface MenuItemProps {
    navigation: DrawerNavigationHelpers
    icon: React.ReactNode
    text: string
    path: string
}

export function MenuItem({
    navigation,
    icon,
    text,
    path,
    ...props
}: MenuItemProps & PressableProps) {
    const [clicked, setClicked] = useState(false)
    return (
        <Pressable
            {...props}
            onPress={() => navigation.navigate(path)}
            onPressIn={() => setClicked(true)}
            onPressOut={() => setClicked(false)}
        >
            <View>
                {icon}
                <Text>{text}</Text>
            </View>
        </Pressable>
    )
}
