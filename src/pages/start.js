import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { auth } from "../../firebase.config.js";
import Logout from '../components/logout.js';
import Input from "../components/input";
import styles from "./style.js";



const Start = ({ navigation }) => {

  return (
    <View style={styles.container}>
			<Logout/>

      <View style={styles.container}>
        <View style={styles.box}>
          <Button
            style={styles.btn}
            title="Entrar"
            onPress={() => navigation.navigate("Login")}
            accessibilityLabel="Entrar com o email e senha no aplicativo"
          />

          <Button
            style={styles.btn}
            title="Cadastrar"
            onPress={() => navigation.navigate("Cadastro Pessoa")}
          />

          <Button
            style={styles.btn}
            title="Perfil"
            onPress={() => navigation.navigate("Perfil")}
          />
        </View>
      </View>
    </View>
  );
};

export default Start;
