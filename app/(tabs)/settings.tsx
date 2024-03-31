import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React from "react";
import { Colors, defaultStyles, moderateScale } from "@/constants";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BoxedIcon, FlatListSettings } from "@/src/components";

const settings = () => {
  const devices = [
    {
      name: "Broadcast Lists",
      icon: "megaphone",
      backgroundColor: Colors.green,
    },
    {
      name: "Starred Messages",
      icon: "star",
      backgroundColor: Colors.yellow,
    },
    {
      name: "Linked Devices",
      icon: "laptop-outline",
      backgroundColor: Colors.green,
    },
  ];

  const items = [
    {
      name: "Account",
      icon: "key",
      backgroundColor: Colors.primary,
    },
    {
      name: "Privacy",
      icon: "lock-closed",
      backgroundColor: "#33A5D1",
    },
    {
      name: "Chats",
      icon: "logo-whatsapp",
      backgroundColor: Colors.green,
    },
    {
      name: "Notifications",
      icon: "notifications",
      backgroundColor: Colors.red,
    },
    {
      name: "Storage and Data",
      icon: "repeat",
      backgroundColor: Colors.green,
    },
  ];

  const support = [
    {
      name: "Help",
      icon: "information",
      backgroundColor: Colors.primary,
    },
    {
      name: "Tell a Friend",
      icon: "heart",
      backgroundColor: Colors.red,
    },
  ];
  type Item = {
    name: string;
    icon: string;
    backgroundColor: string;
  };
  const renderItem = (item: Item) => (
    <View style={defaultStyles.item}>
      <Text>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatListSettings data={devices} />
        <FlatListSettings data={items} />
        <FlatListSettings data={support} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default settings;
