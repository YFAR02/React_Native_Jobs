import { Stack  } from 'expo-router' ;
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();






const Layout = () => { 
    const [fontsLoaded] = useFonts({
        DMBold : require ('../assets/icons/fonts/static/DMSans_18pt-Bold.ttf'),
        DMRegular : require ('../assets/icons/fonts/static/DMSans_18pt-Regular.ttf'),
        DMMedium : require ('../assets/icons/fonts/static/DMSans_18pt-Medium.ttf'),
    })
    const onLayoutRootView = useCallback (async () => {
        if(fontsLoaded) { 
            await SplashScreen.hideAsync();
        }
    }, [ fontsLoaded ]);
    if(!fontsLoaded)  return null;
        
    return <Stack onLayout ={onLayoutRootView} />;
};
export default Layout;
 