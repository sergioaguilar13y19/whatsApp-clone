import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const [shortDimension] = width < height ? [width, height] : [height, width];
const guidelineBaseWidth = 350;

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
