import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Input } from '../shared/input/input'
import { Colors, Gaps } from '../shared/tokens'
import { Button } from '../shared/Button/Button'
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification'
import { useState } from 'react'
import { Link } from 'expo-router'
import { CustomLink } from '../shared/CustomLink/CustomLink'

export default function Login() {
    const [error, setError] = useState<string | undefined>()
    const width = Dimensions.get('window').width
    const alert = () => {
        setError('Неверный логин и пароль')
        setTimeout(() => {
            setError(undefined)
        }, 4000)
    }
    return (
        <View style={styles.container}>
            <ErrorNotification error={error}></ErrorNotification>
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                    resizeMode="contain"
                />
                <View style={styles.form}>
                    <Input placeholder="Email" />
                    <Input placeholder="Пароль" isPassword />
                    <Button text="Войти" onPress={alert}></Button>
                </View>
                <CustomLink
                    href={'/restore'}
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
