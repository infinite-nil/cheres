import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Inter } from "@ui/theme";

const useCustomFont = () => {
  const [isFontLoaded] = useFonts({
    Inter,
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
