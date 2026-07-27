export function getFirebaseErrorMessage(code: string): string {
  switch (code) {
    case "auth/invalid-email":
      return "Informe um e-mail válido.";

    case "auth/invalid-credential":
      return "E-mail ou senha incorretos.";

    case "auth/user-not-found":
      return "Usuário não encontrado.";

    case "auth/wrong-password":
      return "Senha incorreta.";

    case "auth/email-already-in-use":
      return "Este e-mail já está cadastrado.";

    case "auth/weak-password":
      return "A senha deve ter pelo menos 6 caracteres.";

    case "auth/too-many-requests":
      return "Muitas tentativas. Tente novamente mais tarde.";

    case "auth/network-request-failed":
      return "Falha na conexão com a internet.";

    default:
      return "Ocorreu um erro inesperado.";
  }
}