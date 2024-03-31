import { Ionicons } from "@expo/vector-icons";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { Colors, moderateScale } from "@/constants";
import { BoxedIcon } from "../../boxed-Icon";

type Item = {
  name: string;
  icon: string;
  backgroundColor: string;
};
type props = {
  data: Item[];
};
const FlatListSettings = ({ data }: props) => {
  return (
    <View style={styles.block}>
      <FlatList
        data={data}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <BoxedIcon
              name={item.icon}
              backgroundColor={item.backgroundColor}
            />
            <Text style={styles.textItem}>{item.name}</Text>
            <Ionicons name="chevron-forward" size={moderateScale(20)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: Colors.white,
    marginHorizontal: moderateScale(12),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(10),
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(10),
    gap: moderateScale(10),
  },
  textItem: {
    flex: 1,
    fontSize: moderateScale(14),
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.lightGray,
  },
});

export { FlatListSettings };
