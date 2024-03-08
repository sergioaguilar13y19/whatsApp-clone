import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Colors, WORDS_SCREENS, moderateScale } from "@/constants";

const { advisement, verify } = WORDS_SCREENS.register;
const Page = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 90 : 0;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <Text style={styles.textHeader}>{verify}</Text>
      <View style={styles.list}>
        <View style={styles.listItem}>
          <Text style={styles.textItem}>Mexico</Text>
          <Entypo
            name="chevron-thin-right"
            size={moderateScale(20)}
            color="black"
          />
        </View>
        <View>
          <Text style={styles.textItem}>52</Text>
        </View>
      </View>
      <Text style={styles.textFooter}>{advisement}</Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(15),
    alignItems: "center",
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
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    backgroundColor: "#f9f9f9",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: moderateScale(.5),

    width: "100%",
    marginBottom: moderateScale(5),
  },
  textItem: {
    fontSize: moderateScale(14),
    marginBottom: moderateScale(9),
    fontWeight: "500",
  },
});
export default Page;
