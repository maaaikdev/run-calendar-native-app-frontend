import { useContext, useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, FlatList, Text, View, Dimensions } from "react-native";
import { getCalendarEvents } from "../lib/calendar-events"
import { AnimatedEventCard } from "./EventCard"
import { Screen } from "./Screen";

const screenWidth = Dimensions.get('window').width;
const itemSpacing = 10;
const numColumns = 2;
const totalHorizontalPadding = itemSpacing * (numColumns - 1);

export function Main(){

    const [ eventsCards, setEventsCards ] = useState([]);
    //const insets = useSafeAreaInsets();

    useEffect(() => {
		getCalendarEvents().then((eventsCards) => {
			setEventsCards(eventsCards)
		})
	}, [])

    return (
        <Screen>
            {eventsCards.length === 0 ? (
                <ActivityIndicator color={"#fff"} size={"large"} />
            ) : (                
                <FlatList
                    numColumns={1}
                    data={eventsCards}
                    keyExtractor={(card) => card.id}
                    renderItem={({ item, index }) => (                        
                        <AnimatedEventCard card={item} index={index.toString()} style={{flex: 1}} />      
                    )}
                    //contentContainerStyle={styles.list}
                    className="py-2 px-4"
                />
            )}
        </Screen>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 42,
    },
    gridItem: {
        width: '40%', // Esto asegura que cada elemento ocupe el 48% del ancho (con márgenes)
        marginBottom: 10,
    },
    columnWrapper: {
        justifyContent: 'space-between',
		//flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
	},
    list: {
        paddingHorizontal: itemSpacing / 2
    }
})