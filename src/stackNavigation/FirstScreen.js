import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const FirstScreen = (props) => {
  const handlePress = () => {
    props.navigation.navigate("Second");
  };

  return (
    <View>
      <Text>First Screen Hello</Text>
      <Button title="Second Git" onPress={handlePress} />
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({});
