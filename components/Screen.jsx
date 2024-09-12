import { View } from 'react-native';

export function Screen({ children }) {
    return <View className="flex-1 bg-red-800 pt-8 px-4">{children}</View>
}