import { Dimensions, PixelRatio } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const scale = SCREEN_WIDTH / 375;
const scaleHeight = SCREEN_HEIGHT / 812;

const normalize = (size: number, forHeight?: boolean) => {
  const newSize = size * (forHeight ? scaleHeight : scale);

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export { normalize };
