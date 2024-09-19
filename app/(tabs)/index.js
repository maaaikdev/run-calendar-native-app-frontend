import { Main } from '../../components/Main';
import { StyleSheet } from "react-native";

export default function Index(){
    return (
        <Main />
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
    container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start' 
	},
})