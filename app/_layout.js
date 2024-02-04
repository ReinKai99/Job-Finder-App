import {Stack} from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';



const Layout = () => {
    const [fontloaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    })
    
    if(!fontloaded) return null;
    return ( 
    <Stack initialRouteName='home'>
        <Stack.Screen name='home' />
    </Stack>
    )
}

export default Layout;