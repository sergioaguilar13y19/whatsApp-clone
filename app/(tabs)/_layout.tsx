import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { WORDS_SCREENS } from "../../constants/translations";
import { Colors, moderateScale } from "@/constants";

const TITLE = WORDS_SCREENS.tabs;
const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.background,
            gap: moderateScale(5),
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.dark,
          tabBarInactiveBackgroundColor: Colors.background,
          tabBarActiveBackgroundColor: Colors.background,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
        }}>
        <Tabs.Screen
          name="settings"
          options={{
            title: TITLE.settings,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="updates"
          options={{
            title: TITLE.updates,
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="update" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calls"
          options={{
            title: TITLE.calls,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="call-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="communities"
          options={{
            title: TITLE.communities,
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="account-group-outline"
                size={size + moderateScale(7)}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="chats"
          options={{
            title: TITLE.chats,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="chatbubbles-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

export default Layout;
