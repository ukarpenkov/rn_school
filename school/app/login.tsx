import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Input } from '../shared/input/input'
import { Colors, Gaps } from '../shared/tokens'
import { Button } from '../shared/Button/Button'
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification'
import { useEffect, useState } from 'react'
import { Link, router } from 'expo-router'
import { CustomLink } from '../shared/CustomLink/CustomLink'
import { useAtom } from 'jotai'
import { loginAtom } from '../entities/auth/model/auth.state'

export default function Login() {
    const [localError, setLocalError] = useState<string | undefined>()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [{ access_token, isLoading, error }, login] = useAtom(loginAtom)

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
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                    resizeMode="contain"
                />
                <View style={styles.form}>
                    <Input placeholder="Email" onChangeText={setEmail} />
                    <Input placeholder="Пароль" onChangeText={setPassword} />
                    <Button text="Войти" onPress={submit}></Button>
                </View>
                <CustomLink
                    href={'/course/ts'}
                    text="Восстановить пароль"
                ></CustomLink>
            </View>
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
        width: 220,
    },
})
