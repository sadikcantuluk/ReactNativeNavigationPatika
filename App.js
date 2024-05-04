import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackApp from './src/stackNavigation/StackApp';
import StackRouting from './src/fitnessApp/StackRouting';
import Router from './src/nestedNavigation/Router';

export default function App() {
  return (
  // <StackRouting/>
  <Router/>
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
