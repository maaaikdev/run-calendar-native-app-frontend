import { Stack, Link } from "expo-router";
import { Pressable, View } from "react-native";
import Logo from "../components/Logo";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout(){
    return (
        <View className="flex-1 bg-black">
            <Stack 
                screenOptions={{
                    headerStyle: { backgroundColor: "pink" },
                    headerTintColor: "yellow",
                    headerTitle: "",
                    headerLeft: () => <Logo />,
                    headerRight: () => (
                        <Link asChild href="/about">
                            <Pressable>
                                <FontAwesome name="info-circle" size={24} color="white"/>
                            </Pressable>
                        </Link>
                    )
                }}
            />
        </View>
    )
}