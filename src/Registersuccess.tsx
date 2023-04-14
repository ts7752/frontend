import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Uniauth from "./Uniauth";

const Stack = createStackNavigator();

const Registersuccess = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Image
        style={styles.scImage}
        source={require("../assets/RegisterDone.png")}
      ></Image>

      <View style={styles.text1}>
        <Text style={styles.text2}>회원가입 완료</Text>
        <Text style={styles.text3}>대학교 인증이 남았어요!</Text>
      </View>
      <View style={styles.nextbutton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Uniauth")}
          style={styles.nextbuttonchild}
        >
          <Text style={styles.buttontext}>다음</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sexy}>고객센터</Text>
    </View>
  );
};

export default Registersuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  scImage: {
    top: 302,
    left: 163,
    width: 103,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    top: 443,
    left: 94,
    height: 62,
    width: 240,
    position: "absolute",
  },
  text2: {
    fontSize: 26,
    color: "#000000",
    width: 240,
    left: 0,
    top: 0,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  text3: {
    top: 39,
    left: 3,
    lineHeight: 23,
    fontWeight: "500",
    color: "gray",
    width: 234,
    textAlign: "center",
    position: "absolute",
  },
  sexy: {
    top: 750,
    left: 183,
    color: "green",
    width: 65,
    height: 26,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
  },
  nextbutton: {
    top: 546,
    left: 43,
    height: 56,
    width: 342,
    position: "absolute",
  },
  nextbuttonchild: {
    backgroundColor: "#000000",
    left: 0,
    top: 0,
    height: 56,
    width: 342,
    position: "absolute",
  },
  buttontext: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "700",
    marginTop: 20,
  },
});
