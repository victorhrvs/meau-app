import React from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.config.js";
import styles from "./styleNew.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../../firebase.config.js";
import { getUser, updateUser } from "../../services/user.services.js";

const Profile = ({ navigation }) => {
  const [user_name, setUser_Name] = React.useState("");
  const [first_name, setFirstName] = React.useState("");
  const [last_name, setLastName] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  //const [address, setAddress] = React.useState("");
  //const [user, setUser] = React.useState({});

  const [data, setData] = React.useState({});
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      //setUser(auth);
      try {
        //const docSnap =  UserDataService.getBook(user.uid);
        /*
				setNickname(docSnap.nickname);
				setFirstName(docSnap.first_name);
				setLastName(docSnap.last_name);
				setState(docSnap.state);
				setCity(docSnap.city);
				setAddress(docSnap.address);
				*/
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
      const uid = auth.currentUser.uid;
      if (uid !== undefined && uid !== "") {
        await updateUser(uid, {
          city,
          first_name,
          last_name,
          photo: "",
          state,
          user_name,
        });
      }
      alert("Usuário atualizado");
    } catch (error) {
      console.log(error);
      alert("Erro ao atualizar usuário");
    }
  };

  const loadData = async () => {
    try {
      const request = await getUser(auth.currentUser.uid);
      const info = await request.data();
      setUser_Name(info.user_name);
      setFirstName(info.first_name);
      setLastName(info.last_name);
      setState(info.state);
      setCity(info.city);
      console.log(JSON.stringify(info));
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.background}>
      <View style={styles.container2}>
        <Text style={styles.h1}>Perfil</Text>
        <Text style={styles.text}>Nome de Usuário:</Text>

        <TextInput
          type="text"
          style={styles.box}
          onChangeText={setUser_Name}
          value={user_name}
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

        <Text style={styles.text}>Estado:</Text>
        <Picker
          style={styles.box}
          selectedValue={state}
          onValueChange={(itemValue, itemIndex) => setState(itemValue)}
        >
          <Picker.Item label="AC" value="AC" />
          <Picker.Item label="GO" value="GO" />
          <Picker.Item label="DF" value="DF" />
        </Picker>

        <Button style={styles.btn} title="Salvar" onPress={save} />
      </View>
    </View>
  );
};

export default Profile;
