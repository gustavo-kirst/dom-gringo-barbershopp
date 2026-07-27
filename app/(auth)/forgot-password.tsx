import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { Button, Text } from "react-native-paper";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../../src/components/FormInput";

import { resetPassword } from "../../src/services/auth.service";
import { getFirebaseErrorMessage } from "../../src/utils/firebase-error";

import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from "../../src/validations/reset-password.validation";

export default function ForgotPasswordScreen() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function handleReset(data: ResetPasswordFormData) {
    try {
      await resetPassword(data.email.trim());

      alert(
        "Se existir uma conta com esse e-mail, você receberá um link para redefinir sua senha."
      );

      router.back();
    } catch (error: any) {
      alert(getFirebaseErrorMessage(error.code));
    }
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">
        Recuperar senha
      </Text>

      <Text variant="bodyMedium">
        Informe seu e-mail para receber o link de recuperação.
      </Text>

      <FormInput
        control={control}
        name="email"
        label="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Button
        mode="contained"
        loading={isSubmitting}
        disabled={isSubmitting}
        onPress={handleSubmit(handleReset)}
      >
        Enviar e-mail
      </Button>

      <Button
        mode="text"
        onPress={() => router.back()}
      >
        Voltar
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
});