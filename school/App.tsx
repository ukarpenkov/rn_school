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
import { Input } from "./shared/input/input";
import { Colors, Gaps } from "./shared/tokens";
import EyeClosedIcon from "./assets/icons/eye-closed";
import EyeOpenIcon from "./assets/icons/eye-open";

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
        <EyeClosedIcon/>
        <EyeOpenIcon/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 55,
    flex: 1,
    backgroundColor: Colors.black,
  },
  content: {
    alignItems: "center",
    gap: Gaps.g50,
  },
  form: {
    alignSelf: "stretch",
    gap: Gaps.g16,
  },
  logo: {
    width: 220,
  },
});
