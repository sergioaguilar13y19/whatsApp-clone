import {
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
} from "react-native";

import { Colors, moderateScale } from "@/constants";

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const Button = ({ title, onPress, style }: Props) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.text, style && { color: Colors.dark }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    padding: moderateScale(10),
    borderRadius: moderateScale(12),
  },
  text: {
    fontSize: moderateScale(18),
    fontWeight: "500",
    color: Colors.white,
  },
});

export { Button };
