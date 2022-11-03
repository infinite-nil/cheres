import { useCallback, useEffect } from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { theme } from "./src/ui/theme";

export default function App() {
  const [isFontLoaded] = useFonts({
    Inter: require("./src/assets/fonts/Inter.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isFontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isFontLoaded]);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View onLayout={onLayoutRootView}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </ThemeProvider>
  );
}
