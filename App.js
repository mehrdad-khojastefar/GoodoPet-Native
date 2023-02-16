import { NativeBaseProvider, theme } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./components/LoginPage.jsx";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <View style={styles.container}>
        <LoginPage />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
