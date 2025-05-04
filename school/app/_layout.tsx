import { Stack, SplashScreen } from 'expo-router'
import { Colors } from '../shared/tokens'
import { StatusBar } from 'expo-status-bar'
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { Notification } from '../shared/Notification/Notification'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const insets = useSafeAreaInsets()
    const [loaded, error] = useFonts({
        'FiraSans-Regular': require('../assets/fonts/FiraSans-Regular.ttf'),
        'FiraSans-SemiBold': require('../assets/fonts/FiraSans-SemiBold.ttf'),
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    })
    useEffect(() => {
        if (error) {
            throw error
        }
    })

    if (!loaded) {
        return null
    }
    return (
        <SafeAreaProvider>
            <Notification />
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
                <Stack.Screen name="login" />
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
