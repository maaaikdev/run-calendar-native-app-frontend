import { useEffect, useState, useContext } from "react";
import { useLocalSearchParams, Stack } from "expo-router";
import { Text, View, ActivityIndicator, ScrollView, Image } from "react-native";
import { Screen } from "../components/Screen";
import { getEventDetails } from "../lib/calendar-events";

const baseUrl = 'http://localhost:5001';

export default function DetailEvent(){
    
    const { eventid } = useLocalSearchParams();
    const [ eventInfo, setEventInfo ] = useState(null); 

    useEffect(() => {
        if(eventid) {
            getEventDetails(eventid).then(setEventInfo);
        }
     }, [eventid]);

    return (
        <Screen>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: "#ffee00" },
                    headerTintColor: "black",
                    headerLeft: () => {},
                    headerTitle: "The Legend of Zelda: Breath of the wild",
                    headerRight: () => {}
                }}
            />
            <View>
                {eventInfo === null ? (
                    <ActivityIndicator color={"#fff"} size={"large"} />
                ) : (
                    <ScrollView>
                        <View className="justify-center items-center text-center">
                            <Image 
                                className="mb-4 rounded"
                                source={{ uri: `${baseUrl}/${eventInfo.image}` }}
                                style={{ width: 214, height: 294 }}
                            />
                            <Text className="text-white text-center font-bold mb-8 text-2xl">
                                Detalle del juego { eventInfo.name }
                            </Text>
                            <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                                { eventInfo.name }
                            </Text>
                        </View>
                    </ScrollView>
                )}
            </View>
        </Screen>
    )
}