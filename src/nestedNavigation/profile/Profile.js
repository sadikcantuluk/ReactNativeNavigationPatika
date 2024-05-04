import { StyleSheet, Text, SafeAreaView, Button } from "react-native";
import React from "react";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Profile Anasayfasına Hoşgeldin.</Text>
      <Button
        title="Profile Edit"
        onPress={() => navigation.navigate("ProfileEdit")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
