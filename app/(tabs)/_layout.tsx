import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { WORDS_SCREENS } from "../../constants/translations";

const TITLE = WORDS_SCREENS.tabs;
const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="updates"
        options={{
          title: TITLE.updates,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="update" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          title: TITLE.calls,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="call" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: TITLE.communities,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="group" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: TITLE.chats,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: TITLE.settings,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
