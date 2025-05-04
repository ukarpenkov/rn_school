import * as Notifications from 'expo-notifications'
import { useEffect } from 'react'

export function Notification() {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: true,
        }),
    })

    useEffect(() => {
        const subscription = Notifications.addNotificationReceivedListener(
            (notification) => {
                console.log(notification)
            }
        )
        return () => subscription.remove()
    }, [])
    return <></>
}
