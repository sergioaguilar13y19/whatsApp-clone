import { View, Text, StyleSheet } from "react-native";

import { WORDS_SCREENS, moderateScale } from "@/constants";

const { advisement, verify } = WORDS_SCREENS.register;
const Page = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{verify}</Text>
      <Text style={styles.textFooter}>{advisement}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
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
});
export default Page;
