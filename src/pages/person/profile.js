import React from "react";
import {Picker} from '@react-native-picker/picker';
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.config.js";
import styles from "./styleNew.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../../firebase.config.js";
import UserDataService from "../../services/user.services.js";


const Profile = ({ navigation }) => {
  const [nickname, setNickname] = React.useState("");
  const [first_name, setFirstName] = React.useState("");
  const [last_name, setLastName] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [user, setUser] = React.useState({});

	const auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User

			try {
				await UserDataService.getBook(user.uid);
				const docSnap =
				setNickname(docSnap.nickname);
				setFirstName(docSnap.first_name);
				setLastName(docSnap.last_name);
				setState(docSnap.state);
				setCity(docSnap.city);
				setAddress(docSnap.address);
			} catch (error) {
				console.log(error);
			}

		} else {
			navigation.goBack();
			alert("Usuário não logado");
		}
	});



  const save = async () => {
    try {
			const uid = user.uid;
			await UserDataService.updateUser(uid, {
            address: address,
						city: city,
						first_name: first_name,
						last_name: last_name,
						photo: "",
						state: state,
						user_name: nickname,
            }
         );
			alert("Usuário atualizado");
    } catch (error) {
      console.log(error);
			alert("Erro ao atualizar usuário");
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.container2}>
				<Text style={styles.h1}>Perfil</Text>
        <Text style={styles.text}>Nome de Usuário:</Text>

        <TextInput
          type="text"
          style={styles.box}
          onChangeText={setNickname}
          value={nickname}
          placeholder="Nickname"
          autoCapitalize="none"
        />
				<Text style={styles.text}>Primeiro Nome:</Text>
        <TextInput
          type="text"
          style={styles.box}
          onChangeText={setFirstName}
          value={first_name}
          placeholder="Primeiro Nome"
        />

				<Text style={styles.text}>Sobrenome:</Text>
				<TextInput
					type="text"
					style={styles.box}
					onChangeText={setLastName}
					value={last_name}
					placeholder="Sobrenome"
				/>

				<Text style={styles.text}>Cidade:</Text>
				<TextInput
					type="text"
					style={styles.box}
					onChangeText={setCity}
					value={city}
					placeholder="Cidade"
					keyboardType="email-address"
					autoCapitalize="none"
				/>
				



        <Button style={styles.btn} title="Salvar" onPress={save} />
      </View>
    </View>
  );
};

export default Profile;
