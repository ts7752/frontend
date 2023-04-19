import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Select = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.loginpage}>
      <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}>
        {" "}
        MyPlaceUNI
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.loginbutton}
      >
        <Text
          style={{ textAlign: "center", color: "#ffffff", fontWeight: "bold" }}
        >
          {" "}
          로그인{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Registration")}
        style={styles.registerbutton}
      >
        <Text
          style={{ textAlign: "center", fontWeight: "bold", color: "#000000" }}
        >
          {" "}
          회원가입{" "}
        </Text>
      </TouchableOpacity>

      <Text style={styles.Text}>고객센터</Text>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  loginbutton: {
    backgroundColor: "#000000",
    height: "7.94%",
    top: "65.45%",
    bottom: "26.61%",
    left: "5.12%",
    right: "4.65%",
    width: "90.23%",
    position: "absolute",
    justifyContent: "center",
  },
  registerbutton: {
    borderStyle: "solid",
    borderColor: "1e232c",
    borderWidth: 1,
    height: "6.01%",
    top: "77.04%",
    bottom: "16.95%",
    left: "5.12%",
    right: "4.65%",
    width: "90.23%",
    position: "absolute",
    justifyContent: "center",
  },
  loginpage: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  logintext: {
    alignItems: "center",
    position: "absolute",
    top: 25,
    left: 170,
    color: "#ffffff",
    width: 49,
    height: 48,
    fontWeight: "bold",
  },
  registrationtext: {
    alignItems: "center",
    position: "absolute",
    top: 19,
    left: 162,
    color: "#000000",
    width: 66,
    fontWeight: "600",
  },
  myplace: {
    marginTop: -26,
    marginLeft: -72,
    top: "50%",
    left: "50%",
    fontSize: 25,
    color: "#000",
    width: 149,
    height: 53,
    fontWeight: "bold",
  },
  Text: {
    top: 862,
    left: 183,
    textDecorationLine: "underline",
    fontWeight: "700",
    color: "#18c07a",
    width: 65,
    height: 26,
    textAlign: "center",
    position: "absolute",
  },
});
