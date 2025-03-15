import { Navigator, Slot, Stack, Tabs } from 'expo-router'
import { Text } from 'react-native'
import { Colors } from '../shared/tokens'

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                statusBarBackgroundColor: Colors.black,
                contentStyle: {
                    backgroundColor: Colors.black,
                },
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen
                name="restore"
                options={{
                    presentation: 'modal',
                    headerShown: false,
                }}
            />
        </Stack>
    )
}
