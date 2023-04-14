import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Emailauthsuccess = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/RegisterDone.png")}
        style={styles.icon}
      ></Image>
      <View style={styles.textview}>
        <Text style={styles.toptext}>인증 완료</Text>
        <Text style={styles.bottomtext}>환영합니다!</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.buttonchild}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttontext}>로그인 하러 가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    overflow: "hidden",
    height: 932,
  },
  backicon: {
    right: 0,
    height: 47,
    left: 0,
    top: 0,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    width: 103,
    height: 100,
    left: 163,
    top: 302,
    position: "absolute",
    overflow: "hidden",
  },
  textview: {
    top: 443,
    left: 101,
    height: 62,
    width: 240,
    position: "absolute",
  },
  toptext: {
    fontSize: 25,
    fontWeight: "700",
    color: "#000000",
    textAlign: "center",
    left: 0,
    top: 0,
    width: 240,
    position: "absolute",
  },
  bottomtext: {
    textAlign: "center",
    position: "absolute",
    fontSize: 15,
    top: 39,
    left: 3,
    lineHeight: 23,
    fontWeight: "500",
    color: "gray",
    width: 234,
  },
  button: {
    top: 549,
    left: 49,
    height: 41,
    width: 41,
    position: "absolute",
  },
  buttonchild: {
    height: 60,
    width: 330,
    position: "absolute",
    borderRadius: 5,
    backgroundColor: "#000000",
  },
  buttontext: {
    top: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginLeft: 15,
  },
});

export default Emailauthsuccess;
