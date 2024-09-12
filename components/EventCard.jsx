import { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Text, Animated, Pressable } from "react-native";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPresseable = styled(Pressable);

export function EventCard({ card }) {
    return (
        <Link href={`/${card.slug}`} asChild>
            <StyledPresseable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
                <View className="flex-row gap-4" key={card.slug}>
                    <Image 
                        source={{ uri: card.image }}
                        style={styles.image}
                    />
                    <View className="flex-shrink">
                        <Text className="mb-1" style={styles.title}>{card.title}</Text>
                        <Text style={styles.description}>{card.description.slice(0,100)}</Text>
                    </View>
                </View>
            </StyledPresseable>
        </Link>
    )
}

export function AnimatedEventCard({ card, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 200,
            delay: index * 250,
            useNativeDriver: true
        }).start();
    }, [opacity, index]);
    
    return (
        <Animated.View style={{ opacity }}>
             <EventCard card={card} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
	card: {
		marginBottom: 42
	},
	image: {
		width: 107,
		height: 147,
		borderRadius: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#fff',
		marginTop:10
	},
	description: {
		fontSize: 16,
		color: '#fff'
	},
	score: {
		fontSize: 16,
		fontWeight: "bold",
		color: 'green',
		marginBottom: 10
	}
});