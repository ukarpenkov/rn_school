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
        const subRecieved = Notifications.addNotificationReceivedListener(
            (notification) => {
                console.log(notification)
            }
        )
        const subResponseReceived =
            Notifications.addNotificationResponseReceivedListener(
                (notification) => {
                    console.log('notification clicked')
                    console.log(notification)
                }
            )
        return () => {
            subRecieved.remove()
            subResponseReceived.remove()
        }
    }, [])
    return <></>
}
