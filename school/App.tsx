import { StatusBar } from "expo-status-bar";
import {
  Button,
  Dimensions,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textStyle}>Мое приложение</Text>
        <Button title="butt" />
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          alignItems: "flex-end",
          height: 500,
          flexDirection: "row",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <View
          style={{
            backgroundColor: "tomato",
            width: width / 2 - 5,

            height: 100,
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: "purple",
            width: width / 2 - 5,
            height: 100,
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: "green",
            width: width / 2 - 5,
            height: 100,
          }}
        >
          <Text>3</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  top: {
    flexDirection: "row",
  },
  textStyle: {
    color: "blue",
    fontSize: 26,
    borderWidth: 1,
    borderColor: "red",
  },
});
