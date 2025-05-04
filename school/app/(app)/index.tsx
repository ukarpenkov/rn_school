import {
    View,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    RefreshControl,
} from 'react-native'
import { useAtomValue, useSetAtom } from 'jotai'
import {
    courseAtom,
    loadCourseAtom,
} from '../../entities/course/model/course.state'
import { useEffect } from 'react'
import { CourseCard } from '../../entities/course/ui/CourseCard/CourseCard'
import { Colors, Gaps } from '../../shared/tokens'
import { StudentCourseDescription } from '../../entities/course/model/course.model'
import { Button } from '../../shared/Button/Button'
import * as Notifications from 'expo-notifications'

export default function MyCourses() {
    const { isLoading, courses } = useAtomValue(courseAtom)
    const loadCourse = useSetAtom(loadCourseAtom)

    useEffect(() => {
        loadCourse()
    }, [])

    const renderCourse = ({ item }: { item: StudentCourseDescription }) => {
        return (
            <View style={styles.item}>
                <CourseCard {...item} />
            </View>
        )
    }

    const allowNotifications = async () => {
        const settings = await Notifications.getPermissionsAsync()
        return (
            settings.granted ||
            settings.ios?.status ==
                Notifications.IosAuthorizationStatus.PROVISIONAL
        )
    }

    const requestPermitions = async () => {
        return await Notifications.requestPermissionsAsync({
            ios: {
                allowAlert: true,
                allowBadge: true,
                allowSound: true,
            },
        })
    }
    const scheduleNotification = async () => {
        const granted = await allowNotifications()
        if (!granted) {
            await requestPermitions()
        }
        Notifications.scheduleNotificationAsync({
            content: {
                title: 'Друг!',
                body: 'Не забудьте пройти курс',
                data: { success: true },
            },
            trigger: {
                type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
                seconds: 2,
            },
        })
    }

    return (
        <>
            {isLoading && (
                <ActivityIndicator
                    size="large"
                    color={Colors.primary}
                    style={styles.activity}
                />
            )}
            <Button text="Напомнить" onPress={scheduleNotification} />
            {courses.my?.length > 0 && (
                <FlatList
                    refreshControl={
                        <RefreshControl
                            tintColor={Colors.primary}
                            titleColor={Colors.primary}
                            refreshing={isLoading}
                            onRefresh={loadCourse}
                        />
                    }
                    data={courses.my}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderCourse}
                />
            )}
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        gap: Gaps.g20,
        padding: 20,
    },
    item: {
        padding: 20,
    },
    activity: {
        marginTop: 30,
    },
})
