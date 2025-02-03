import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello</Text>
        <TextInput value="Ghbdtbn" />
      </View>
      <Text style={styles.textStyle}>Мое приложение</Text>
      <Button title="butt" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "yellow",
    fontSize: 26,
    borderWidth: 1,
    borderColor: "red",
  },
});
