import { WORDS_SCREENS, moderateScale } from "@/constants";
import { Button, ConfirmationCodeField } from "@/src/components";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type props = { phone: string; signIn: string };
const { information, again } = WORDS_SCREENS.verify;
const CELL_COUNT = 6;
const Page = () => {
  const { phone } = useLocalSearchParams<props>();
  const [code, setCode] = useState("");
  const updateCode = (code: string) => setCode(code);
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: phone }} />
      <View style={styles.separator}>
        <Text style={styles.textHeader}>{`${information} ${phone}`}</Text>
        <ConfirmationCodeField value={code} setValue={updateCode} />
      </View>
      <View style={styles.separator} />
      <Button title={"Next"} onPress={() => ""} />
      <View style={{ height: bottom }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
  },
  separator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: moderateScale(14),
    opacity: 0.8,
    marginBottom: moderateScale(15),
  },
});

export default Page;
