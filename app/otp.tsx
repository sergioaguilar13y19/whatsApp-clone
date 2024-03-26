import { Entypo } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import MaskInput from "react-native-mask-input";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors, WORDS_SCREENS, moderateScale, MASK_MEXICO } from "@/constants";
import { Button } from "@/src/components";

const { advisement, verify, next } = WORDS_SCREENS.register;

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 90 : 0;
  const { bottom } = useSafeAreaInsets();

  const verifyPhone = phoneNumber.length <= 16;
  const handleNext = () => {
    //router.push("/otp");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(`/verify/${phoneNumber}`);
    }, 2000);
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={styles.container}>
        <Text style={styles.textHeader}>{verify}</Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.textItem}>Mexico</Text>
            <Link href={""}>
              <Entypo
                name="chevron-thin-right"
                size={moderateScale(20)}
                color={Colors.primary}
              />
            </Link>
          </View>
          <View style={styles.separator} />
          <View style={styles.listItem}>
            <MaskInput
              value={phoneNumber}
              keyboardType="number-pad"
              placeholder="+52 123 456 7890"
              autoFocus
              onChangeText={(masked, unmasked) => {
                setPhoneNumber(masked);
              }}
              mask={MASK_MEXICO}
              style={styles.txtInput}
            />
          </View>
        </View>
        <Text style={styles.textFooter}>{advisement}</Text>
        <View style={{ flex: 1 }} />
        <Button
          title={next}
          style={verifyPhone && { backgroundColor: Colors.lightGray }}
          onPress={handleNext}
          isLoading={loading}
          disabled={verifyPhone}
        />
        <View style={{ height: bottom }} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(15),
    alignItems: "center",
    justifyContent: "space-around",
  },
  textHeader: {
    fontSize: moderateScale(14),
    opacity: 0.8,
    marginBottom: moderateScale(15),
  },
  textFooter: {
    fontSize: moderateScale(11),
    fontWeight: "500",
    textAlign: "center",
  },
  list: {
    width: "100%",
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    backgroundColor: Colors.item,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: moderateScale(10),
  },
  separator: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.gray,
  },
  textItem: {
    fontSize: moderateScale(15),
    color: Colors.primary,
    fontWeight: "500",
  },
  txtInput: {
    fontSize: moderateScale(15),
    fontWeight: "500",
  },
});
export default Page;
