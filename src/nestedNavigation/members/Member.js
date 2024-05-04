import { StyleSheet, Text, View,Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Member({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Member Anasayfasına Hoşgeldin.</Text>
      <Button
        title="Member Detail"
        onPress={() => navigation.navigate("MemberDetail")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
