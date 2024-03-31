import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale } from "@/constants";

type props = { name: typeof Ionicons.defaultProps; backgroundColor: string };

const BoxedIcon = ({ name, backgroundColor }: props) => {
  return (
    <View style={[{ backgroundColor }, styles.container]}>
      <Ionicons name={name} size={moderateScale(19)} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(3),
    borderRadius: moderateScale(6),
  },
});

export { BoxedIcon };
