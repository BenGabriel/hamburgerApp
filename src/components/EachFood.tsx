import { Image, Pressable, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import { FoodProps } from "../types/Types";
import Typography from "./Typography";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const EachFood: FC<FoodProps> = ({
  code,
  id,
  image,
  name,
  like,
  price,
  color
}) => {
  const { navigate } = useNavigation<any>();

  return (
    <Pressable
      style={[styles.container, { backgroundColor: color }]}
      key={id}
      onPress={() =>
        navigate("Details", {
          details: {
            code,
            id,
            image,
            name,
            like,
            price,
            color,
            index: id - 1
          }
        })
      }
    >
      <View>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} resizeMode="contain" />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Typography text={`#${code} `} color="#fff" />
            <Typography text="CODE" color="#fff" size={11} />
          </View>
          <Typography text={name} bold size={24} color="#fff" />
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          height: "100%",
          alignItems: "flex-end"
        }}
      >
        <View style={styles.like}>
          <Ionicons
            name={like ? "heart" : "heart-outline"}
            size={20}
            color={like ? "#f04a51" : "#fff"}
          />
        </View>
        <View style={styles.price}>
          <Typography text={`$${price.toFixed(2)}`} size={16} color={color} />
        </View>
      </View>
    </Pressable>
  );
};

export default EachFood;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 20,
    marginVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 160
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: 140,
    height: 120,
    marginTop: -50,
    marginLeft: -10
  },
  price: {
    backgroundColor: "#fff",
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end"
  },
  like: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: 35,
    height: 35,
    borderRadius: 10,
    marginTop: -10,
    alignItems: "center",
    justifyContent: "center"
  }
});
