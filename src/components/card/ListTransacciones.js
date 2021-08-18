import React from "react";
import {
  Text,
  FlatList,
  ActivityIndicator,
  View,
  StyleSheet,
} from "react-native";
import { Card } from "react-native-paper";
import { Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

export default function ListTransacciones({
  itemTransacciones,
  backgroundColor,
  loading,
  loadingColor,
  error,
}) {
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={loadingColor} size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text style={{ textAlign: "center" }}>Movimientos: Error</Text>
      </View>
    );
  }

  return (
    <Card
      style={{
        marginHorizontal: 10,
        borderRadius: 10,
        flex: 1,
        marginVertical: 20,
        height: 100,
        backgroundColor: backgroundColor,
      }}
    >
      <Card.Content style={styles.imageContainer}>
        <FlatList
          data={itemTransacciones}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => <RenderItem data={item} />}
        />
      </Card.Content>
    </Card>
  );
}

function RenderItem({ data }) {
  const { amount, service } = data;

  return (
    <Card.Title
      title={service}
      titleStyle={{ color: "#333333" }}
      subtitle={`$ ${amount}`}
      subtitleStyle={{ color: "#333333" }}
      left={() => (
        <Avatar source={require("../../image/avatar-default.jpg")} rounded />
      )}
      right={() => (
        <View
          style={{
            backgroundColor: amount < 0 ? "#fce1e0" : "#d5f1de",
            height: 60,
            width: 60,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign
            name={amount < 0 ? "caretdown" : "caretup"}
            size={24}
            color={amount < 0 ? "#ef6361" : "#53c177"}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 5,
  },
});
