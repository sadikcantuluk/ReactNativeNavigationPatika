import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SecondScreen = (props) => {
    const handlePress = () => {
        props.navigation.goBack("First");
      };
  return (
    <View>
      <Text>Second Screen Hello</Text>
      <Button title='First Geri Dön' onPress={handlePress}/>
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({})