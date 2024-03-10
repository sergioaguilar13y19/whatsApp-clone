import { Entypo } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";

import { Colors, WORDS_SCREENS, moderateScale } from "@/constants";
import { Button } from "@/src/components";

const { advisement, verify, next } = WORDS_SCREENS.register;
const Page = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("12");
  const router = useRouter();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 90 : 0;
  const handleNext = () => {
    router.push("/otp");
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={keyboardVerticalOffset}>
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
          <Text style={styles.textItem}>52</Text>
        </View>
      </View>
      <Text style={styles.textFooter}>{advisement}</Text>
      <Button
        title={next}
        style={phoneNumber.length <= 2 && { backgroundColor: Colors.lightGray }}
        onPress={handleNext}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    padding: moderateScale(15),
    alignItems: "center",
    justifyContent: "space-between",
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
    fontSize: moderateScale(14),
    marginBottom: moderateScale(9),
    fontWeight: "500",
  },
});
export default Page;
