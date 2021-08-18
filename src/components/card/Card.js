import React, { useState } from "react";
import { View } from "react-native";
import ListCard from "./ListCard";
import ListTransacciones from "./ListTransacciones";
import useFetch from "../../Hooks/useFetch";

export default function Card() {
  const [idCard, setIdCard] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [loadingColor, setLoadingColor] = useState(null);

  const { result, loading, error } = useFetch(
    `https://apistruchas.vercel.app/api/bank/cards/${idCard}/movements`
  );

  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      <ListCard
        setIdCard={setIdCard}
        setBackgroundColor={setBackgroundColor}
        setLoadingColor={setLoadingColor}
      />
      <ListTransacciones
        itemTransacciones={result}
        backgroundColor={backgroundColor}
        loading={loading}
        loadingColor={loadingColor}
        error={error}
      />
    </View>
  );
}
