import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
//make sure you use expo status bar and not react
import { StatusBar } from "expo-status-bar";
import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
const App = () => {
  return (
    <View className="flex-1">
      {/* Status bar can be anywhere in the component */}
      <StatusBar style="light" />
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          // using native wind makes some problems in LinearGradinet Component
          style={{ flex: 1 }}
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
        >
          <SafeAreaView className=" flex-1 mx-5 my-8 justify-between">
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
                onPress={() => console.log("Test")}
                title="Get Started"
              />
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
