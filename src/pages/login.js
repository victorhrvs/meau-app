import React, {useContext} from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.config.js";


const Login = ({ navigation }) => {

	const [email, onChangeEmail] = React.useState("");
	const [pass, onChangePass] = React.useState(null);
	const [user, setUser] = React.useState({});

	onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

	const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        pass
      );
      console.log(user);
			navigation.goBack();
    } catch (error) {
      console.log(error.message);
    }
  };

	return (
		<View style={styles.container}>
			

			<View style={styles.box}>

				<Text style={styles.text}>Nick:</Text>

				<TextInput
					type="email"
					style={styles.input}
					onChangeText={onChangeEmail}
					value={email}
					placeholder="Email"
					autoComplete="email"
					keyboardType="email-address"
					autoCapitalize="none"
					
					
				/>

				<Text style={styles.text}>Senha:</Text>
				<TextInput
						style={styles.input}
						onChangeText={onChangePass}
						value={pass}
						placeholder="Senha"
						secureTextEntry={true}
						
					/>

        <Button
          style={styles.btn} 
          title="Press me"
          onPress={login}
        />
				<Text style={styles.text}>{user?.email}</Text>
			</View>

		</View>
	)
}

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

export default Login;