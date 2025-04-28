import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    View,
} from 'react-native'
import { Input } from '../shared/input/input'
import { Colors, Gaps } from '../shared/tokens'
import { Button } from '../shared/Button/Button'
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification'
import { useEffect, useState } from 'react'
import { router } from 'expo-router'
import { CustomLink } from '../shared/CustomLink/CustomLink'
import { useAtom } from 'jotai'
import { loginAtom } from '../entities/auth/model/auth.state'
import { useScreenOrientation } from '../shared/hooks'
import { Orientation } from 'expo-screen-orientation'

export default function Login() {
    const [localError, setLocalError] = useState<string | undefined>()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [{ access_token, isLoading, error }, login] = useAtom(loginAtom)
    const orientation = useScreenOrientation()

    console.log(orientation)

    const submit = () => {
        if (!email) {
            setLocalError('Введите email')
            return
        }
        if (!password) {
            setLocalError('Введите пароль')
            return
        }
        login({ email, password })
    }

    useEffect(() => {
        if (error) {
            setLocalError(error)
        }
    }, [error])

    useEffect(() => {
        if (access_token) {
            router.replace('/(app)')
        }
    }, [access_token])

    return (
        <View style={styles.container}>
            <ErrorNotification error={localError}></ErrorNotification>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.content}
            >
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                    resizeMode="contain"
                />
                <View style={styles.form}>
                    <View
                        style={{
                            ...styles.inputs,
                            flexDirection:
                                orientation === Orientation.PORTRAIT_UP
                                    ? 'column'
                                    : 'row',
                        }}
                    >
                        <Input
                            style={{
                                width:
                                    orientation === Orientation.PORTRAIT_UP
                                        ? 'auto'
                                        : Dimensions.get('window').width / 2 -
                                          16 -
                                          48,
                            }}
                            placeholder="Email"
                            onChangeText={setEmail}
                        />
                        <Input
                            style={{
                                width:
                                    orientation === Orientation.PORTRAIT_UP
                                        ? 'auto'
                                        : Dimensions.get('window').width / 2 -
                                          16 -
                                          48,
                            }}
                            placeholder="Пароль"
                            onChangeText={setPassword}
                        />
                    </View>
                    <Button
                        text="Войти"
                        onPress={submit}
                        isLoading={isLoading}
                    ></Button>
                </View>
                <CustomLink
                    href={'/restore'}
                    text="Восстановить пароль"
                ></CustomLink>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 55,
        flex: 1,
        backgroundColor: Colors.black,
    },
    content: {
        alignItems: 'center',
        gap: Gaps.g50,
    },
    form: {
        alignSelf: 'stretch',
        gap: Gaps.g16,
    },
    logo: {
        width: Platform.select({
            ios: 220,
            android: 220,
        }),
    },
    inputs: {
        gap: Gaps.g16,
    },
    input: {
        width: 'auto',
    },
})
