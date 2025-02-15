import { StatusBar } from "expo-status-bar";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { Input } from "./shared/input";

export default function App() {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require("./assets/logo.png")}
          resizeMode="contain"
        />
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input placeholder="Пароль" />
          <Button title="Войти"></Button>
        </View>
        <Text>Восстановить пароль</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 55,
    flex: 1,
    backgroundColor: "#16171D",
  },
  content: {
    alignItems: "center",
    gap: 50,
  },
  form: {
    alignSelf: "stretch",
    gap: 16,
  },
  input: {
    backgroundColor: "#2E2D3D",
  },
  logo: {
    width: 220,
  },
});
