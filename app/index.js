import {useState } from 'react'; //useState is a hook that allows us to use state in functional components
import {View, ScrollView, SafeAreaView} from 'react-native';
import { Stack, useRouter } from 'expo-router';
// import { Text , View    } from 'react-native';

import { COLORS, icons, images, SIZES} from '../constants'; //importing constants from the constants file
import { 
    Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'//importing components from the components file


const Home = () => {
    const router = useRouter()  ; //useRouter is a hook that allows us to navigate between screens
    return ( 
        <SafeAreaView style = {{flex : 1, backgroundColor :  COLORS.lightWhite }}>
            <Stack.Screen
                options = {{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrL = {icons.chevronLeft} dimension = "60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrL = {icons.heart} dimension = "100%" />
                        
                    ),
                    headerTitle: ''
                }} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View  
                    style = {{
                        flex : 1,
                        padding : SIZES.medium }}
                    >
                        <Welcome />
                        <Popularjobs />
                        <Nearbyjobs />
                        </View>
                </ScrollView>


        </SafeAreaView>)
}
    

export default Home; //exporting the component so it can be used in other files
// SafeAreaView allows us to show content safely without notches or home button appearing over it 