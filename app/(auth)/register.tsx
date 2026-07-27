import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { Button, Text } from "react-native-paper";
import FormInput from "../../src/components/FormInput";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { register } from "../../src/services/auth.service";
import { getFirebaseErrorMessage } from "../../src/utils/firebase-error";

import {
  RegisterFormData,
  registerSchema,
} from "../../src/validations/register.validation";

export default function RegisterScreen() {
    const {
      control,
      handleSubmit,
      formState: { isSubmitting },
    } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function handleRegister(data: RegisterFormData) {
    try {
      await register(
        data.name.trim(),
        data.email.trim(),
        data.password
      );

      router.replace("/(tabs)");
    } catch (error: any) {
      alert(getFirebaseErrorMessage(error.code));
    }
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Criar conta</Text>

      <FormInput
        control={control}
        name="name"
        label="Nome"
      />

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

      <FormInput
        control={control}
        name="confirmPassword"
        label="Confirmar senha"
        secureTextEntry
      />

      <Button
        mode="contained"
        loading={isSubmitting}
        disabled={isSubmitting}
        onPress={handleSubmit(handleRegister)}
      >
        Criar conta
      </Button>

      <Button
        mode="text"
        onPress={() => router.back()}
      >
        Já tenho uma conta
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