import { Stack } from "expo-router";
import React from "react";

import { WORDS_SCREENS } from "@/constants";
const { title } = WORDS_SCREENS.register;

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="otp" options={{ headerTitle: title }} />
    </Stack>
  );
};

export default _layout;
