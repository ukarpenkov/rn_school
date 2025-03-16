import { Navigator, Slot, Stack, Tabs } from 'expo-router'
import { Text } from 'react-native'
import { Colors } from '../shared/tokens'
import { StatusBar } from 'expo-status-bar'
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'

export default function RootLayout() {
    const insets = useSafeAreaInsets()
    const [loaded] = useFonts({
        FiraSans: require('../assets/fonts/FiraSans-Regular.ttf'),
        FiraSansSemiBold: require('../assets/fonts/FiraSans-SemiBold.ttf'),
    })
    if (!loaded) {
        return null
    }
    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <Stack
                screenOptions={{
                    statusBarBackgroundColor: Colors.black,
                    contentStyle: {
                        backgroundColor: Colors.black,
                        paddingTop: insets.top,
                    },
                    headerShown: false,
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen
                    name="restore"
                    options={{
                        presentation: 'modal',
                    }}
                />
            </Stack>
        </SafeAreaProvider>
    )
}
