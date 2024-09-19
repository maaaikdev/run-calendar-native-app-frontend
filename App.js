import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Main } from "./components/Main";

export default function App() {
	return (
		<SafeAreaProvider>
			<View className='flex-[1] bg-white pt-8'>
				<StatusBar style="auto" />
				{/* <Main style={styles.container}/> */}
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start' 
	},
});
