import { StyleSheet, Text, View,Button } from "react-native";
import React from "react";

export default function MemberDetail({ navigation }) {
  return (
    <View>
      <Text>MemberDetail</Text>
      <Button
        title="Member Update"
        onPress={() => navigation.navigate("MemberUpdate")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
