import AuthProvider from "@/providers/auth";
import TimeProvider from "@/providers/time";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";


export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <TimeProvider>
      <ThemeProvider value={colorScheme == "dark" ? DarkTheme : DefaultTheme}>
        <AuthProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </AuthProvider>
      </ThemeProvider>
    </TimeProvider>
  );
}