import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Title } from "react-native-paper";
import useFetch from "../../Hooks/useFetch";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = Dimensions.get("window").width * 0.82;

export default function ListCard({
  setIdCard,
  setBackgroundColor,
  setLoadingColor,
}) {
  const { loading, error, result } = useFetch(
    "https://apistruchas.vercel.app/api/bank/cards"
  );

  useEffect(() => {
    if (result?.length > 0) {
      setIdCard(result[0].id);
      setBackgroundColor(result[0].backgroundColor);
      setLoadingColor(result[0].color);
    }
  }, [result]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="green" size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
        <TouchableOpacity activeOpacity={0.8} style={styles.error}>
          <View style={styles.imageContainer}>
            <Text style={styles.textError}>Error</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 30 }}>
      <Carousel
        layout={"default"}
        data={result ?? []}
        renderItem={({ item }) => <RenderItems data={item} />}
        sliderWidth={width}
        itemWidth={ITEM_WIDTH}
        inactiveSlideOpacity={0.4}
        initialScrollIndex={0}
        //inactiveSlideScale={1}
        onBeforeSnapToItem={(index) => {
          setIdCard(result[index].id);
          setBackgroundColor(result[index].backgroundColor);
          setLoadingColor(result[index].color);
        }}
      />
    </View>
  );
}

function RenderItems({ data }) {
  const { date, logo, number, color, bank } = data;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        height: 200,
        marginVertical: 30,
        borderRadius: 18,
      }}
    >
      <View style={styles.imageContainer}>
        <View
          style={{ backgroundColor: color, borderRadius: 18, height: "100%" }}
        >
          <View style={styles.card}>
            <Title style={styles.bank}>{bank}</Title>
            <Image
              source={{ uri: logo }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.number}>{number}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    elevation: 10,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },

  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
  },

  bank: {
    alignSelf: "center",
    fontSize: 22,
    color: "#fff",
  },

  image: {
    width: 60,
    height: 60,
  },

  number: {
    color: "#fff",
    letterSpacing: 4,
    position: "absolute",
    bottom: 70,
    marginHorizontal: 10,
    fontSize: 22,
  },

  date: {
    marginHorizontal: 10,
    bottom: 30,
    color: "#fff",
    position: "absolute",
  },

  error: {
    height: 200,
    marginVertical: 30,
    borderRadius: 18,
  },

  textError: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 22,
    color: "red",
  },
});
