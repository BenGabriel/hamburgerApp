import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Container from "../components/Container";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Typography from "../components/Typography";
import { AllFood, Food } from "../types/data";
import EachFood from "../components/EachFood";

const Home = () => {
  const [foodId, setFoodId] = useState<number>(Food[0].id);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const getMainOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: "clamp"
      //   useNativeDriver: true,
    });
  };

  const getFoodItemPosition = () => {
    return scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [0, -160],
      extrapolate: "clamp"
    });
  };

  const getScrollViewPosition = () => {
    return scrollY.interpolate({
      inputRange: [0, 210],
      outputRange: [20, -140],
      extrapolate: "clamp"
    });
  };


  return (
    <Container style={{
        flex: 0
    }}>
      <View style={styles.nav}>
        <Feather name="bar-chart-2" size={25} style={styles.navIcon} />
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
      <Animated.View style={{ opacity: getMainOpacity() }}>
        <Typography
          text="Houz Cheese"
          bold
          size={28}
          style={{
            marginTop: 20
          }}
        />
        <View style={styles.burgerText}>
          <Typography text="Burger" bold size={28} />
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
        <View style={styles.search}>
          <View style={styles.inputContainer}>
            <Ionicons name="search" color="#333" size={15} />
            <TextInput
              placeholder="Search here"
              style={{ width: "75%", paddingLeft: 10 }}
            />
          </View>
          <View style={styles.filter}>
            <Ionicons name="options" color="#7a8e85" size={20} />
          </View>
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.foodContainer,
          { transform: [{ translateY: getFoodItemPosition() }] }
        ]}
      >
        {Food.map((i) => (
          <Pressable
            key={i.id}
            style={[
              styles.foodItem,
              { backgroundColor: foodId === i.id ? "#ffebd6" : "transparent" }
            ]}
            onPress={() => setFoodId(i.id)}
          >
            <Typography text={i.name} bold size={13} />
            {foodId === i.id ? <View style={styles.vertical} /> : null}
          </Pressable>
        ))}
      </Animated.View>
      <Animated.ScrollView
        style={{
          transform: [
            {
              translateY: getScrollViewPosition()
            }
          ],
          marginBottom: 120
        }}
        scrollEventThrottle={16}
        overScrollMode="never"
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: scrollY } }
            }
          ],
          {
            listener: (e) => {},
            useNativeDriver: false
          }
        )}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {AllFood.map((i) => (
          <EachFood
            code={i.code}
            id={i.id}
            image={i.image}
            like={i.like}
            name={i.name}
            price={i.price}
            color={i.color}
            key={i.id}
          />
        ))}
      </Animated.ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },
  navIcon: {
    transform: [
      {
        rotate: "90deg"
      }
    ]
  },
  burgerText: {
    marginTop: -10,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  inputContainer: {
    width: "82%",
    height: 45,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc"
  },
  filter: {
    width: "15%",
    height: 45,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc"
  },
  search: {
    marginVertical: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  foodContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  foodItem: {
    justifyContent: "center",
    alignItems: "center",
    width: "24%",
    paddingVertical: 6,
    borderRadius: 8
  },
  vertical: {
    width: "20%",
    position: "absolute",
    backgroundColor: "#e9ae6c",
    height: 5,
    left: 3,
    bottom: -1,
    borderRadius: 10
  }
});
