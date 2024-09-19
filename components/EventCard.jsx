import { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Text, Animated, Pressable, Dimensions } from "react-native";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPresseable = styled(Pressable);

const baseUrl = 'http://localhost:5001';
const screenWidth = Dimensions.get('window').width;
const itemSpacing = 42;
const numColumns = 2;
const totalHorizontalPadding = itemSpacing * (numColumns - 1);
console.log("totalHorizontalPadding", totalHorizontalPadding)
console.log("screenWidth", (screenWidth - totalHorizontalPadding) / numColumns)

export function EventCard({ card }) {
    
    function setFormattedDate(dateString) {
        const date = new Date(dateString);
        const formattedDate = new Intl.DateTimeFormat('es', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
        }).format(date);    

        return formattedDate
    }

    return (
        <Link href={`/${card.id}`} asChild>
            <StyledPresseable className="active:opacity-70 active:border-white/50 mb-10 rounded-md overflow-hidden ">
                <View key={card.id} className="flex flex-row justify-between items-center relative">
                    <View className="flex-initial w-20 rounded-full justify-center items-center">
                        <Image 
                            className="w-14 h-14 rounded-full"
                            source={{ uri: `${baseUrl}/${card.image}` }}
                        />
                    </View>
                    <View className="border-l-gray-200 border-l-2 ml-3 mr-3 flex-initial w-80">
                        <View className="pl-4">
                            <Text className="text-base font-semibold text-sky-600 mb-2">{card.name}</Text>
                            <Text className="text-gray-500 mb-1">{setFormattedDate(card.date)}</Text>
                            <Text>{card.place}</Text>
                            
                        </View>
                        <View className="absolute right-0 bottom-0 mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 sm:mx-0 sm:h-10 sm:w-10">
                            <Text className="font-mono font-semibold text-xs text-white">{card.distance}</Text>                        
                        </View>
                    </View>
                </View>
            </StyledPresseable>
        </Link>
        // old crad design 2
        // <Link href={`/${card.id}`} asChild>
        //     <StyledPresseable className="active:opacity-70 border-blue-300 active:border-white/50 mb-2 bg-blue-500/10 rounded-md overflow-hidden border-l-sky-500 border-l-8">
        //         <View key={card.id} className="flex flex-row justify-between relative">
        //             <View className="flex-initial w-80 p-2">
        //                 <Text className="text-base font-semibold text-sky-600 mb-2">{card.name}</Text>
        //                 <Text className="text-gray-500 mb-1">{setFormattedDate(card.date)}</Text>
        //                 <Text>{card.place}</Text>
                        
        //             </View>
        //             <Image 
        //                 className="flex-initia w-20"
        //                 source={{ uri: `${baseUrl}/${card.image}` }}
        //             />                                           
        //             <View className="absolute right-2 bottom-2 mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 sm:mx-0 sm:h-10 sm:w-10">
        //                 <Text className="font-mono font-semibold text-xs text-white">{card.distance}</Text>                        
        //             </View>
        //         </View>
        //     </StyledPresseable>
        // </Link>

        // old card design
        // <Link href={`/${card.id}`} asChild>
        //     <StyledPresseable style={styles.item} className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-md overflow-hidden">
        //         <View key={card.id}>
        //             <Image 
        //                 source={{ uri: `${baseUrl}/${card.image}` }}
        //                 style={styles.image}
        //             />
        //             <View className="py-4 px-4">
        //                 <Text>{card.name}</Text>
        //                 <Text>{card.distance}</Text>
        //                 <Text>{card.date}</Text> 
        //                 <Text>{card.place}</Text>
        //             </View>
        //         </View>
        //     </StyledPresseable>
        // </Link>
    )
}

export function AnimatedEventCard({ card, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animation = Animated.timing(opacity, {
            toValue: 1,
            duration: 200,
            //delay: index * 250,
            useNativeDriver: true,
        });

        animation.start();

        return () => animation.stop();
    }, [opacity, index]);
    
    return (
        <Animated.View style={{opacity}} >
            <EventCard card={card}/>
        </Animated.View>
    )
}

const styles = StyleSheet.create({    
	card: {
		marginBottom: 42
	},
	image: {
		width: 100,
		height: 80,
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
	},
    container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start' 
	},
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        width: (screenWidth - totalHorizontalPadding) / numColumns, 
        margin: 8,
    },
    texts: {
        width: '100%',
        textAlign: 'center'
    }
});