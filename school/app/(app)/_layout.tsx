import { Stack, SplashScreen, Redirect } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { useAtomValue } from 'jotai'
import { authAtom } from '../../entities/auth/model/auth.state'
import { Colors, Fonts } from '../../shared/tokens'
import { Text } from 'react-native'
import MenuIcon from '../../assets/icons/menu'

export default function AppLayout() {
    const { access_token } = useAtomValue(authAtom)
    if (!access_token) {
        return <Redirect href="/login" />
    }
    return (
        <Drawer
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: Colors.blackLight,
                    shadowColor: Colors.blackLight,
                    shadowOpacity: 0,
                },
                headerLeft: () => {
                    return <MenuIcon />
                },
                headerTitleStyle: {
                    color: Colors.white,
                    fontFamily: 'FiraSans',
                    fontSize: Fonts.f20,
                },
                headerTitleAlign: 'center',
                sceneStyle: {
                    backgroundColor: Colors.black,
                },
            })}
        >
            <Drawer.Screen name="index" options={{ title: 'Мои курсы' }} />
        </Drawer>
    )
}
