import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";

export default function TabLayout(){
    return(
        <Tabs
         screenOptions={{tabBarActiveTintColor: "#03ebfcff",
         }}
        >
            <Tabs.Screen
            name="piano"
            options={{title: "Piano", headerShown: false, tabBarIcon: ({color}) => 
            <MaterialCommunityIcons name="piano" size={24} color={color} />}}></Tabs.Screen>

                 <Tabs.Screen
            name="drums"
            options={{title: "Drums", headerShown: false, tabBarIcon: ({color}) => <FontAwesome6 name="drum" size={24} color={color} />}}>
                
            </Tabs.Screen>

            
        </Tabs>
    )
}