import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from "react-native";
import React from "react";
import { Colors, moderateScale, WORDS_SCREENS } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
const welcome_image = require("@/assets/images/welcome.png");
const BUTTON_MARGIN_BOTTOM = Platform.OS === "ios" ? 40 : 70;
const WELCOME_MARGIN_BOTTOM = Platform.OS === "ios" ? 40 : 10;

const Page = () => {
  const { welcome, description, accept } = WORDS_SCREENS.Welcome;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={welcome_image} style={styles.welcome} />
      <Text style={styles.headline}> {welcome} </Text>
      <Text style={styles.description}>
        {description.read}{" "}
        <Text style={styles.link}>{description.privacy}</Text>
        <Text style={styles.description}>
          {" "}
          {description.terms}{" "}
          <Text style={styles.link}>{description.termsEnd}</Text>
        </Text>
      </Text>
      <Pressable style={[styles.btn, {}]}>
        <Text>{accept}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  welcome: {
    height: moderateScale(330),
    aspectRatio: 1,
    marginBottom: moderateScale(WELCOME_MARGIN_BOTTOM),
  },
  headline: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
    marginBottom: moderateScale(15),
    textAlign: "left",
  },
  description: {
    fontSize: moderateScale(14),
    color: Colors.gray,
    marginBottom: moderateScale(35),
    
  },
  link: {
    color: Colors.primary,
  },
  btn: {
    backgroundColor: Colors.lightGray,
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(BUTTON_MARGIN_BOTTOM),
  },
});

export default Page;
