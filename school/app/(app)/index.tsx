import { Text, View } from 'react-native'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { profileAtom } from '../../entities/user/model/user.state'
import {
    authAtom,
    loginAtom,
    logoutAtom,
} from '../../entities/auth/model/auth.state'
import { useEffect } from 'react'
import { router, useRootNavigationState } from 'expo-router'
import { Button } from '../../shared/Button/Button'
import {
    courseAtom,
    loadCourseAtom,
} from '../../entities/course/model/course.state'

export default function MyCourses() {
    const { isLoading, courses } = useAtomValue(courseAtom)
    // console.log('555', courses.my[0])

    const loadCourse = useSetAtom(loadCourseAtom)

    useEffect(() => {
        loadCourse()
    }, [])
    return (
        <View>
            {courses.length > 0 &&
                courses.map((course) => <Text>{course.alias} </Text>)}
        </View>
    )
}
