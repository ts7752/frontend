import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Uniauth = () => {
  const [hakbun, setHakbun] = useState<any>("");
  const [hakgyo, setHakgyo] = useState<any>("");
  const [hakgua, setHakgua] = useState<any>("");

  const navigation = useNavigation<any>();
  return (
    <View style={styles.view}>
      <View style={styles.toptext}>
        <Text style={styles.toptextconfirm}>대학교 인증</Text>
      </View>
      <View style={styles.confirminput}>
        <TextInput
          style={styles.input}
          placeholder="학번"
          onChangeText={(hakbun) => setHakbun(hakbun)}
        ></TextInput>
      </View>
      <View style={styles.confirminput2}>
        <TextInput
          style={styles.input}
          placeholder="학교"
          onChangeText={(hakgyo) => setHakgyo(hakgyo)}
        ></TextInput>
      </View>
      <View style={styles.confirminput3}>
        <TextInput
          style={styles.input}
          placeholder="학과"
          onChangeText={(hakgua) => setHakgua(hakgua)}
        ></TextInput>
      </View>
      <View style={styles.registerbutton}>
        <TouchableOpacity
          style={styles.registerbuttonchild}
          onPress={() => navigation.navigate("Emailauth")}
        >
          <Text style={styles.buttontext}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#ffffff",
  },
  toptext: {
    top: 152,
    right: 51,
    height: 39,
    left: 49,
    position: "absolute",
  },
  toptextconfirm: {
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    color: "#000000",
    width: 300,
    left: 0,
    top: 0,
    textAlign: "left",
    position: "absolute",
    fontSize: 30,
  },
  confirminput: {
    top: 246,
    left: 49,
    position: "absolute",
    height: 56,
    width: 342,
  },
  confirminput2: {
    top: 314,
    left: 49,
    position: "absolute",
    height: 56,
    width: 342,
  },
  confirminput3: {
    top: 382,
    left: 49,
    position: "absolute",
    height: 56,
    width: 342,
  },
  input: {
    backgroundColor: "whitesmoke",
    height: 56,
    width: 342,
    borderWidth: 1,
    borderColor: "#e8ecf4",
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: 10,
  },
  registerbutton: {
    height: "6.01%",
    width: "79.53%",
    top: "56.5%",
    right: "9.07%",
    bottom: "43.99%",
    left: "11.4%",
    position: "absolute",
  },
  registerbuttonchild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#000000",
    width: "100%",
    borderRadius: 5,
    position: "absolute",
  },
  buttontext: {
    top: 19,
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
    width: "64",
    fontSize: 15,
  },
});

export default Uniauth;
