import { StyleSheet, View } from "react-native";
import React from "react";

const Container = (props: any) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor:'#fff'
  }
});
