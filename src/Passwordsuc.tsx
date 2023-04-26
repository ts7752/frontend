import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Uniauth from "./Uniauth";

const Stack = createStackNavigator();

const Passwordsuc = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Image
        style={styles.scImage}
        source={require("../assets/RegisterDone.png")}
      ></Image>
      <View style={styles.flextextview}>
        <Text style={styles.text2}>비밀번호 입력 완료</Text>
        <Text style={styles.text3}>잘했어요!</Text>
      </View>
      <View style={styles.nextbutton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.nextbuttonchild}
        >
          <Text style={styles.buttontext}>로그인하러 가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Passwordsuc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  scImage: {
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },

  text2: {
    fontSize: 26,
    color: "#000000",
    width: 240,
    left: 0,
    top: 0,
    marginTop: 80,
    fontWeight: "700",
    textAlign: "center",
  },
  text3: {
    marginTop: 10,
    lineHeight: 23,
    fontWeight: "500",
    color: "gray",
    fontSize: 15,
    textAlign: "center",
  },
  nextbutton: {
    paddingTop: 350,
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
  },
  nextbuttonchild: {
    borderRadius: 10,
    backgroundColor: "#000000",
    justifyContent: "center",
    height: 56,
    width: 342,
  },
  buttontext: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "700",
  },
  flextextview: {
    marginTop: 180,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
