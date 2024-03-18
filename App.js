import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackApp from './src/stackNavigation/StackApp';
import Routing from './src/screens/Routing';

export default function App() {
  return (
  //  <StackApp/>
  <Routing/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
