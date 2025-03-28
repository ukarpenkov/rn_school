import { Stack, SplashScreen, Redirect } from 'expo-router'
import { useAtomValue } from 'jotai'
import { authAtom } from '../../entities/auth/model/auth.state'

export default function AppLayout() {
    const { access_token } = useAtomValue(authAtom)
    if (!access_token) {
        return <Redirect href="/login" />
    }
    return (
        <Stack>
            <Stack.Screen name="index" />
        </Stack>
    )
}
