import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useAtomValue, useSetAtom } from 'jotai'
import {
    courseAtom,
    loadCourseAtom,
} from '../../entities/course/model/course.state'
import { useEffect } from 'react'
import { CourseCard } from '../../entities/course/ui/CourseCard/CourseCard'
import { Gaps } from '../../shared/tokens'

export default function MyCourses() {
    const { isLoading, error, courses } = useAtomValue(courseAtom)
    const loadCourse = useSetAtom(loadCourseAtom)

    useEffect(() => {
        loadCourse()
    }, [])

    return (
        <ScrollView style={styles.wrapper}>
            {courses.my?.length > 0 &&
                courses.my.map((c) => <CourseCard {...c} key={c.id} />)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        gap: Gaps.g20,
        padding: 20,
    },
})
