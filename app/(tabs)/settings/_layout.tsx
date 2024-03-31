import { Stack } from "expo-router";

import { Colors, WORDS_SCREENS } from "@/constants";

const { tabs } = WORDS_SCREENS;
const Page = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: tabs.settings,
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerSearchBarOptions: {
            placeholder: tabs.placeHolder.search,
          },
        }}
      />
    </Stack>
  );
};

export default Page;
