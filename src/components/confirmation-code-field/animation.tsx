import { Animated, Image, SafeAreaView, Text, View } from "react-native";

import React from "react";
import styles from "./styles";
import { Cursor } from "react-native-confirmation-code-field";

const CELL_COUNT = 4;
const { Value, Text: AnimatedText } = Animated;
const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

type props = {
  index: number;
  symbol: any;
  isFocused: boolean;
  getCellOnLayoutHandler: any;
};

const renderCell = ({
  index,
  symbol,
  isFocused,
  getCellOnLayoutHandler,
}: props) => {
  const hasValue = Boolean(symbol);
  const animatedCellStyle = {
    backgroundColor: hasValue
      ? animationsScale[index].interpolate({
          inputRange: [0, 1],
          outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
        })
      : animationsColor[index].interpolate({
          inputRange: [0, 1],
          outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
        }),
    borderRadius: animationsScale[index].interpolate({
      inputRange: [0, 1],
      outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
    }),
    transform: [
      {
        scale: animationsScale[index].interpolate({
          inputRange: [0, 1],
          outputRange: [0.2, 1],
        }),
      },
    ],
  };

  // Run animation on next event loop tik
  // Because we need first return new style prop and then animate this value
  setTimeout(() => {
    animateCell({ hasValue, index, isFocused });
  }, 0);

  return (
    <AnimatedText
      key={index}
      style={[styles.cell, animatedCellStyle]}
      onLayout={getCellOnLayoutHandler(index)}>
      {symbol || (isFocused ? <Cursor /> : null)}
    </AnimatedText>
  );
};
export { renderCell };
