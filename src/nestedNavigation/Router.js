import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Member from "./members/Member";
import Profile from "./profile/Profile";
import MemberDetail from "./members/MemberDetail";
import MemberUpdate from "./members/MemberUpdate";
import ProfileEdit from "./profile/ProfileEdit";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MemberStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Member" component={Member} />
      <Stack.Screen name="MemberDetail" component={MemberDetail} />
      <Stack.Screen name="MemberUpdate" component={MemberUpdate} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
    </Stack.Navigator>
  );
};

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false
      }}>
        <Tab.Screen name="MemberStack" component={MemberStack} />
        <Tab.Screen name="ProfileStack" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
