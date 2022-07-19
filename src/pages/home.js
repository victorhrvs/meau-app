import React from "react";
import { View, Text, Button, StyleSheet  } from "react-native";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.config.js";

import Input from '../components/input';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	box: {
		height: 200,
		width: 300,
		padding: 20,
		borderWidth: 1,
		borderColor: '#AAAAAA',
		borderRadius: 5
	},
	input: {
		borderColor: '#AAAAAA',
		marginTop: 5,
		paddingLeft: 8,
		flex:0.5,
		borderWidth: 1,
		borderRadius: 5 
	},
	label: {
		flex: 0.3
	}
})

const Login = ({ navigation }) => {
	const [user, setUser] = React.useState({});	

	onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

	const logout = async () => {
    await signOut(auth);
  };

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<Text>Home</Text>
				<Text style={styles.text}>{user?.email}</Text>
				<Button
						style={styles.btn} 
						title="Sair"
						onPress={logout}
					/>
        </View>
			

		</View>
	)
}

export default Login;