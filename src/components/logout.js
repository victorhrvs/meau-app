import { auth } from "../../firebase.config.js";
import { onAuthStateChanged , signOut } from "firebase/auth";
import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from "../pages/style.js";

const Logout = () => {
  const [user, setUser] = useState({});

	onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

	const logout = async () => {
    await signOut(auth);
  };
  
  return (
    <View style={styles.line}>
      <Text>Conta: </Text>
      <Text>{user?.email} </Text>
      <Button 						
            style={styles.btn} 
						title="Sair"
						onPress={logout} />
    </View>
  )
};

export default Logout;