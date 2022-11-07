import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "OpenSans-ExtraBold": require("../../assets/fonts/OpenSans/OpenSans-ExtraBold.ttf"),
          "Space-Mono": require("../../assets/fonts/SpaceMono-Regular.ttf"),
          "Overpass-Bold": require("../../assets/fonts/Overpass-Bold.ttf"),
          "Overpass-Regular": require("../../assets/fonts/Overpass-Regular.ttf"),
          "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
          "Roboto-BlackItalic": require("../../assets/fonts/Roboto-BlackItalic.ttf"),
          "Overpass-Extrabold": require("../../assets/fonts/Overpass-Extrabold-Italic.otf"),
          "SFPro-Display-Heavy-Italic": require("../../assets/fonts/SFPro-Display-Heavy-Italic.otf"),
          "SFPro-Display-Bold": require("../../assets/fonts/SFPro-Display-Bold.otf"),
          // "Pages-icon": require("../../assets/fonts/Pages/pages2-icon.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}

export default useCachedResources;
