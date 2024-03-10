import { Link, router } from "expo-router";
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
import { Button } from "@/src/components";

const WELCOME_IMAGE = require("@/assets/images/welcome.png");

const Page = () => {
  const { welcome, description, accept } = WORDS_SCREENS.Welcome;

  /**
   * Opens the WhatsApp privacy page with the specified language.
   * @param {string} localeLanguage - The language code for the desired language.
   */
  const openPrivacy = () =>
    Linking.openURL(`https://www.whatsapp.com/privacy?lang=${localeLanguage}`);

  const openTerms = () =>
    Linking.openURL(
      `https://www.whatsapp.com/legal/terms-of-service?lang=${localeLanguage}`
    );
  const handlePress = () => {
    router.replace("/otp");
  };
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
      <Button title={accept} onPress={handlePress} />
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
});

export default Page;
