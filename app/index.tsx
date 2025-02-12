import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [funds, setFunds] = useState(0);

  return (
    <View className="flex-1 bg-green-100 justify-center items-center p-5">
      <StatusBar style="auto" />
      
      {/* Money Display */}
      <Text className="text-3xl font-bold text-green-800 mb-10">
        ${funds.toLocaleString()}
      </Text>
      
      {/* Tap Button */}
      <TouchableOpacity 
        onPress={() => setFunds(funds + 100)}
        className="bg-green-500 p-5 rounded-full shadow-lg"
      >
        <Text className="text-white text-xl font-semibold">💰 Tap to Collect</Text>
      </TouchableOpacity>
      
      {/* Bottom Menu */}
      <View className="absolute bottom-5 flex-row justify-between w-full px-10">
      <View className="w-16 h-16 bg-white rounded-lg shadow-md" />
      </View>
    </View>
  );
}
