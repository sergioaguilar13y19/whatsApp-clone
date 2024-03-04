import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
const welcome_image = require('@/assets/images/welcome.png')

const Page = () => {
  return (
    <View style={styles.container}>
      <Image source={welcome_image} style={styles.welcome} />
      <Text>Bienvenido </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    height: 400,
    aspectRatio: 1,
    marginBottom: 80,
  },
  headline:{

  },
  description:{},
  link:{
    color: Colors.gray,
  },
})

export default Page;
