import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Divider, Text } from "react-native-paper";

import { logout } from "../../src/services/auth.service";
import { useAuth } from "../../src/contexts/AuthContext";

export default function ProfileScreen() {
  const { user } = useAuth();

  async function handleLogout() {
    await logout();
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content style={styles.content}>
          <Avatar.Text
            size={90}
            label={user?.name?.charAt(0).toUpperCase() ?? "?"}
          />

          <Text variant="headlineSmall">
            {user?.name}
          </Text>

          <Text variant="bodyLarge">
            {user?.email}
          </Text>

          <Text variant="bodyMedium">
            {user?.role === "admin"
              ? "Administrador"
              : "Cliente"}
          </Text>
        </Card.Content>

        <Divider />

        <Card.Actions>
          <Button
            mode="contained-tonal"
            onPress={handleLogout}
          >
            Sair
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },

  content: {
    alignItems: "center",
    gap: 16,
    paddingVertical: 20,
  },
});