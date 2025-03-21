import { Link, LinkProps } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import { Colors, Fonts } from '../tokens'

export function CustomLink({ text, ...props }: LinkProps & { text: string }) {
    return (
        <Link style={styles.link} {...props}>
            <Text>{text}</Text>
        </Link>
    )
}

const styles = StyleSheet.create({
    link: {
        fontSize: Fonts.f18,
        color: Colors.link,
    },
})
