import { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, FlatList, Text } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedEventCard } from "./EventCard"
import { Screen } from "./Screen";

export function Main(){

    const [ eventsCards, setEventsCards ] = useState([]);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        getLatestGames().then((cards) => {
            setEventsCards(cards)
        })
    }, []);

    return (
        <Screen>
            {eventsCards.length === 0 ? (
                <ActivityIndicator color={"#fff"} size={"large"} />
            ) : (
                <FlatList 
                    data={eventsCards}
                    keyExtractor={(cards) => cards.slug}
                    renderItem={({ item, index }) => (
                        <AnimatedEventCard card={item} index={index} />
                    )}
                />
            )}
        </Screen>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 42,
    }
})