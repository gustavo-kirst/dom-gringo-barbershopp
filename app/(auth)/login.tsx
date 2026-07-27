import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { Button, Text } from "react-native-paper";
import FormInput from "../../src/components/FormInput";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { login } from "../../src/services/auth.service";
import { getFirebaseErrorMessage } from "../../src/utils/firebase-error";

import {
  LoginFormData,
  loginSchema,
} from "../../src/validations/login.validation";

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleLogin(data: LoginFormData) {
    try {
      await login(data.email.trim(), data.password);
    } catch (error: any) {
      alert(getFirebaseErrorMessage(error.code));
    }
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Entrar</Text>

      <FormInput
        control={control}
        name="email"
        label="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        control={control}
        name="password"
        label="Senha"
        secureTextEntry
      />

      <Button
        mode="contained"
        loading={isSubmitting}
        disabled={isSubmitting}
        onPress={handleSubmit(handleLogin)}
      >
        Entrar
      </Button>

      <Button
        mode="text"
        onPress={() => router.push("/(auth)/forgot-password")}
      >
        Esqueci minha senha
      </Button>

      <Button
        mode="text"
        onPress={() => router.push("/(auth)/register")}
      >
        Criar uma conta
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    gap: 16,
  },

  error: {
    color: "#D32F2F",
    marginTop: -10,
  },
});