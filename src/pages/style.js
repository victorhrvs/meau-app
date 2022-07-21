import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
	line: {
    flex: 0.1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomColor: "#33333333",
    borderBottomWidth: 1,
  },
  box: {
    width: 280,
    height: 140,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
  },
  input: {
    borderColor: "#AAAAAA",
    marginTop: 5,
    paddingLeft: 8,
    flex: 0.5,
    borderWidth: 1,
    borderRadius: 5,
  },
  label: {
    flex: 0.3,
  },
  btn: {
    margin: 80,
  },
});

export default styles;