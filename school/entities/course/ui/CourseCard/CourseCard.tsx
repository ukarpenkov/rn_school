import { View } from 'react-native'
import { StudentCourseDescription } from '../../model/course.model'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { Text } from 'react-native'
import { Chip } from '../../../../shared/Chip/Chip'
import { Button } from '../../../../shared/Button/Button'

export function CourseCard({
    image,
    title,
    courseOnDirection,
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
                <Text style={styles.title}>{title}</Text>
                <View style={styles.chips}>
                    {courseOnDirection.length > 0 &&
                        courseOnDirection.map((course) => (
                            <Chip text={course.direction.name} />
                        ))}
                </View>
            </View>
            <View style={styles.footer}>
                <Button text='Купить' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {},
    image: {},
    title: {},
    chips: {},
    header: {},
    footer: {},
})
