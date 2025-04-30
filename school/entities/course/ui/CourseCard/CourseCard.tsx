import { Linking, View } from 'react-native'
import { StudentCourseDescription } from '../../model/course.model'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { Text } from 'react-native'
import { Chip } from '../../../../shared/Chip/Chip'
import { Button } from '../../../../shared/Button/Button'
import { Colors, Fonts, Gaps, Radius } from '../../../../shared/tokens'

export function CourseCard({
    image,
    shortTitle,
    courseOnDirection,
    alias,
}: StudentCourseDescription) {
    return (
        <View style={styles.card}>
            <Image
                source={{
                    uri: image,
                }}
                height={200}
                style={styles.image}
            />
            <View style={styles.header}>
                <Text style={styles.title}>{shortTitle}</Text>
                <View style={styles.chips}>
                    {courseOnDirection.length > 0 &&
                        courseOnDirection.map((course) => (
                            <Chip text={course.direction.name} />
                        ))}
                </View>
            </View>
            <View style={styles.footer}>
                <Button
                    text="Купить"
                    onPress={() =>
                        Linking.openURL(
                            `https://app.purpleschool.ru/course/${alias}`
                        )
                    }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        borderRadius: Radius.r10,
        backgroundColor: Colors.blackLight,
    },
    image: {
        borderRadius: Radius.r10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    title: {
        fontSize: Fonts.f20,
        color: Colors.white,
        fontFamily: Fonts.semibold,
        marginBottom: 12,
    },
    chips: {
        flexDirection: 'row',
        gap: Gaps.g10,
    },
    header: {
        paddingHorizontal: 24,
        paddingVertical: 18,
    },
    footer: {
        backgroundColor: Colors.violetDark,
        paddingHorizontal: 24,
        paddingVertical: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
})
