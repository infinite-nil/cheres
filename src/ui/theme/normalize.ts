import { Dimensions, PixelRatio } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCALE = SCREEN_WIDTH / 375;
const SCALE_HEIGHT = SCREEN_HEIGHT / 812;

const normalize = (size: number, forHeight?: boolean) => {
  const newSize = size * (forHeight ? SCALE_HEIGHT : SCALE);

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export { normalize };
