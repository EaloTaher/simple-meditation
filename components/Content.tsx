import { View, Text } from "react-native";
//do not import safe area view from react native !!!!!
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const Content = ({ children }: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20, // Approximate conversion of TailwindCSS px-5
        paddingVertical: 12, // Approximate conversion of TailwindCSS py-3
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default Content;
