import { Stack } from "expo-router";
import React from "react";

import { WORDS_SCREENS } from "@/constants";

const { register, verify } = WORDS_SCREENS;

const _layout = () => { 
  return (
    <Stack initialRouteName="(tabs)">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="otp"
        options={{ headerTitle: register.title, headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="verify/[phone]"
        options={{
          headerTitle: verify.title,
          headerTitleAlign: "center",
          headerBackTitle: verify.backTitle,
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
