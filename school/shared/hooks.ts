import { useEffect, useState } from 'react'
import * as ScreenOrientation from 'expo-screen-orientation'

export function useScreenOrientation() {
    const [orientation, setOrientation] =
        useState<ScreenOrientation.Orientation>()
    useEffect(() => {
        ScreenOrientation.getOrientationAsync().then((orientation) => {
            setOrientation(orientation)
        })
        ScreenOrientation.addOrientationChangeListener((event) => {
            setOrientation(event.orientationInfo.orientation)
        })
        return () => {
            ScreenOrientation.removeOrientationChangeListeners()
        }
    }, [])

    return orientation
}
