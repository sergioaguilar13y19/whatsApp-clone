import { Link } from "expo-router";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Colors,
  moderateScale,
  WORDS_SCREENS,
  localeLanguage,
} from "@/constants";

const WELCOME_IMAGE = require("@/assets/images/welcome.png");

const Page = () => {
  const { welcome, description, accept } = WORDS_SCREENS.Welcome;

  /**
   * Opens the WhatsApp privacy page with the specified language.
   * @param {string} localeLenguaje - The language code for the desired language.
   */
  const openPrivacy = () =>
    Linking.openURL(`https://www.whatsapp.com/privacy?lang=${localeLanguage}`);

  const openTerms = () =>
    Linking.openURL(
      `https://www.whatsapp.com/legal/terms-of-service?lang=${localeLanguage}`
    );

  return (
    <SafeAreaView style={styles.container}>
      <Image source={WELCOME_IMAGE} style={styles.welcome} />
      <View>
        <Text style={styles.headline}> {welcome} </Text>
        <Text style={styles.description}>
          {description.read}{" "}
          <Text onPress={openPrivacy} style={styles.link}>
            {description.privacy}
          </Text>
          <Text style={styles.description}>
            {" "}
            {description.terms}{" "}
            <Text onPress={openTerms} style={styles.link}>
              {description.termsEnd}
            </Text>
          </Text>
        </Text>
      </View>
      <Link href="/otp" replace asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtButton}>{accept}</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(15),
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },
  welcome: {
    height: moderateScale(390),
    aspectRatio: 1,
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
  },
  link: {
    color: Colors.primary,
  },
  btn: {
    width: "100%",
    height: moderateScale(45),
    //backgroundColor: Colors.primary,
    padding: moderateScale(6),
    borderRadius: moderateScale(20),
    alignItems: "center",
    justifyContent: "center",
  },
  txtButton: {
    color: Colors.primary,
    fontSize: moderateScale(18),
    fontWeight: "600",
  },
});

export default Page;
