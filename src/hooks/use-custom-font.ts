import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { InterRegular, InterBold } from "@ui/theme";

const useCustomFont = () => {
  const [isFontLoaded] = useFonts({
    "Inter-Regular": InterRegular,
    "Inter-Bold": InterBold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onFontLayout = useCallback(async () => {
    if (isFontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isFontLoaded]);

  return {
    isFontLoaded,
    onFontLayout,
  };
};

export { useCustomFont };
