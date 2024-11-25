import { View, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
//make sure you use expo status bar and not react
import { StatusBar } from "expo-status-bar";
import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import * as SplashScreen from "expo-splash-screen";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const App = () => {
  const router = useRouter();
  useEffect(() => {
    const prepare = async () => {
      // Simulate an async task like fetching data or resources
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds delay

      // Hide the splash screen once the app is ready
      await SplashScreen.hideAsync();
    };

    prepare();
  }, []);
  return (
    <View className="flex-1">
      {/* Status bar can be anywhere in the component */}
      <StatusBar style="light" />
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>
          <SafeAreaView className=" flex-1 px-1 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-regular text-2xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <View>
              <CustomButton
                // because we have (tabs) we don't have inculde /tabs in the url
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"
              />
            </View>
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
