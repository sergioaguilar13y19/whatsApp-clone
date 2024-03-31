import { Stack, router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors, WORDS_SCREENS, moderateScale } from "@/constants";
import { Button, ConfirmationCodeField } from "@/src/components";

type props = { phone: string; signIn: string };
const { information, again } = WORDS_SCREENS.verify;

const Page = () => {
  const { phone } = useLocalSearchParams<props>();
  const [code, setCode] = useState("");
  const updateCode = (code: string) => setCode(code);
  const { bottom } = useSafeAreaInsets();
  useEffect(() => {
    code.length === 4 && verifyCode();
  }, [code]);
  const verifyCode = async () => {
    console.log("verifyCode");
    router.replace("/(tabs)/settings")
  };
  const verifySignIn = async () => {};
  const resendCode = async () => {};
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: phone }} />
      <View style={styles.separator}>
        <Text style={styles.textHeader}>{`${information} ${phone}`}</Text>
        <ConfirmationCodeField value={code} setValue={updateCode} />
        <Text style={styles.textCode} onPress={resendCode}>
          {again}
        </Text>
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
    justifyContent: "space-evenly",
  },
  textHeader: {
    fontSize: moderateScale(14),
    opacity: 0.8,
    marginBottom: moderateScale(15),
  },
  textCode: {
    fontSize: moderateScale(17),
    color: Colors.primary,
    padding: moderateScale(10),
  },
});

export default Page;
