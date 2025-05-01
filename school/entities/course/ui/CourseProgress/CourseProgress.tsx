import { StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts } from '../../../../shared/tokens'

export function CourseProgress({
    totalLessons,
    passedLessons,
}: {
    totalLessons: number
    passedLessons: number
}) {
    const percentage = Math.round((passedLessons / totalLessons) * 100)
    return (
        <View style={styles.wrapper}>
            <View style={styles.head}>
                <Text style={styles.textPercent}>{percentage}%</Text>
                <Text style={styles.textCount}>
                    {passedLessons}/{totalLessons}
                </Text>
            </View>
            <View style={styles.bar}>
                <View
                    style={{
                        ...styles.progress,
                        width: `${percentage}%`,
                        backgroundColor: Colors.secondary,
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 18,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    bar: {
        height: 5,
        borderRadius: 20,
        backgroundColor: Colors.border,
    },
    progress: {
        height: 5,
        borderRadius: 20,
        backgroundColor: Colors.blackLight,
    },
    textCount: {
        fontSize: Fonts.f12,
        fontFamily: Fonts.semibold,
        color: Colors.secondary,
    },
    textPercent: {
        fontSize: Fonts.f16,
        fontFamily: Fonts.semibold,
        color: Colors.secondary,
    },
})
