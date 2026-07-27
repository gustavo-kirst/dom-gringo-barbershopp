import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

import { AuthProvider } from "../src/contexts/AuthContext";
import AuthGuard from "../src/components/AuthGuard";

export default function RootLayout() {
  return (
    <PaperProvider>
      <AuthProvider>
        <AuthGuard>
          <Stack screenOptions={{ headerShown: false }} />
        </AuthGuard>
      </AuthProvider>
    </PaperProvider>
  );
}