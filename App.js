import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackApp from "./src/stackNavigation/StackApp";
import StackRouting from "./src/fitnessApp/StackRouting";
import Router from "./src/nestedNavigation/Router";
import RouterDrawer from "./src/DrawerNavigation/RouterDrawer";

export default function App() {
  return (
    // <StackRouting/>
    // <Router/>
    <RouterDrawer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
