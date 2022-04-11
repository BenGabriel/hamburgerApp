import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import Typography from "./Typography";
import { SharedElement } from "react-navigation-shared-element";

const { width, height } = Dimensions.get("screen");

const FoodItem = (props: any) => {
  const { item, index, scrollX } = props;
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.4, 1, 0.4],
    extrapolate: "clamp"
  });

  const postion = scrollX.interpolate({
    inputRange,
    outputRange: [-230, 1, 0],
    extrapolate: "clamp"
  });
  return (
    <View
      style={{
        width,
        marginTop: 40,
        alignItems: "center"
      }}
    >
      {/* <Animated.View style={[styles.imageContainer]}> */}

      <SharedElement id={`item.${item.id}.photo`}>
        <Animated.Image
          source={item.image}
          style={[
            styles.imageContainer,
            {
              transform: [
                {
                  scale
                }
              ],
              marginLeft: postion
            }
          ]}
          resizeMode="contain"
        />
      </SharedElement>
      {/* </Animated.View> */}
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          borderRadius: 20,
          padding: 15
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Typography text={`#${item.code} `} />
          <Typography text="CODE" size={11} />
        </View>
        <Typography text={item.name} bold size={22} color={item.color} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5
          }}
        >
          <Typography text={`$${item.price.toFixed(2)} `} size={16} />
          <Typography text="15 min Delivery" size={11} />
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <View style={styles.add}>
            <Typography color="#ccc" text="-" size={18} />
          </View>
          <Typography text={index.toString()} bold size={20} />
          <View style={styles.add}>
            <Typography color="#ccc" text="+" size={18} />
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: item.color }]}
        >
          <Typography color="#fff" text="Add to Cart" bold />
        </TouchableOpacity>
      </View>

      <View style={[styles.bottom, { backgroundColor: item.color }]} />
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  bottom: {
    width,
    position: "absolute",
    bottom: 0,
    height: "70%",
    elevation: -10
  },
  imageContainer: {
    width: 250,
    height: 250
  },
  button: {
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 30,
    height: 40,
    justifyContent: "center"
  },
  add: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: "#ccc",
    alignItems: "center",
    marginHorizontal: 15
  }
});
