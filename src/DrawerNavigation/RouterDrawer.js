import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Member from "../nestedNavigation/members/Member";
import Profile from "../nestedNavigation/profile/Profile";
import ProfileEdit from "../nestedNavigation/profile/ProfileEdit";
import MemberUpdate from "../nestedNavigation/members/MemberUpdate";
import MemberDetail from "../nestedNavigation/members/MemberDetail";

export default function RouterDrawer() {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const DrawerNavigation = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Member" component={Member} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="MemberDetail" component={MemberDetail} />
        <Stack.Screen name="MemberUpdate" component={MemberUpdate} />
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
