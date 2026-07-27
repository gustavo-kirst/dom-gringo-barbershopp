import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";

import {
  ActivityIndicator,
  Card,
  Text,
} from "react-native-paper";

import { getServices } from "../../src/services/service.service";
import { ServiceModel } from "../../src/types/service";

export default function HomeScreen() {
  const [services, setServices] = useState<ServiceModel[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadServices() {
    try {
      const data = await getServices();
      setServices(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadServices();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={services}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">
              {item.name}
            </Text>

            <Text variant="bodyMedium">
              {item.description}
            </Text>

            <Text variant="bodyLarge">
              R$ {item.price.toFixed(2)}
            </Text>

            <Text variant="bodySmall">
              {item.duration} minutos
            </Text>
          </Card.Content>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  list: {
    padding: 16,
    gap: 16,
  },

  card: {
    marginBottom: 8,
  },
});