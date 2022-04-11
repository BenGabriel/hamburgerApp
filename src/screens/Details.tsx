import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity
} from "react-native";
import React, { useRef, useState } from "react";
import Container from "../components/Container";
import Feather from "@expo/vector-icons/Feather";
import { AllFood, OrderType } from "../types/data";
import Typography from "../components/Typography";
import FoodItem from "../components/FoodItem";

const { width, height } = Dimensions.get("screen");
const Details = (props: any) => {
  const {
    route: {
      params: {
        details: { index, color }
      }
    }
  } = props;

  const [foodId, setFoodId] = useState<number>(OrderType[0].id);
  //   const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Container style={{ paddingHorizontal: 0 }}>
      <View style={styles.nav}>
        <Feather name="arrow-left" size={25} />
        <View
          style={{
            width: 25,
            height: 20
          }}
        >
          <Image
            source={require("../../assets/shopbag.png")}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.burgerText}>
        <Typography text="Order Details" bold size={28} />
        <View
          style={{
            width: 30,
            height: 30,
            marginTop: 10
          }}
        >
          <Image
            source={require("../../assets/burger.png")}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
      </View>
      <View style={[styles.foodContainer]}>
        {OrderType.map((i) => (
          <Pressable
            key={i.id}
            style={[
              styles.foodItem,
              { backgroundColor: foodId === i.id ? "#ffebd6" : "transparent" }
            ]}
            onPress={() => setFoodId(i.id)}
          >
            <Typography text={i.name} bold size={14} />
            {foodId === i.id ? <View style={styles.vertical} /> : null}
          </Pressable>
        ))}
      </View>
      <View style={{ flex: 1 }}>
        <Animated.FlatList
          data={AllFood}
          horizontal
          initialScrollIndex={index}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { x: scrollX } }
              }
            ],
            {
              useNativeDriver: false
            }
          )}
          pagingEnabled
          renderItem={({ item, index }) => (
            <FoodItem item={item} index={index} scrollX={scrollX} />
          )}
        />
      </View>
    </Container>
  );
};

export default Details;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 15
  },
  image: {
    width: "100%",
    height: "100%"
  },
  burgerText: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15
  },
  foodContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 15
  },
  foodItem: {
    justifyContent: "center",
    alignItems: "center",
    width: "44%",
    paddingVertical: 9,
    borderRadius: 8
  },
  vertical: {
    width: "15%",
    position: "absolute",
    backgroundColor: "#e9ae6c",
    height: 4,
    left: 5,
    bottom: -1,
    borderRadius: 10
  }
});
