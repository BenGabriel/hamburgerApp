import { Text } from "react-native";
import React, { FC } from "react";

interface Props {
  text: string;
  size?: number;
  bold?: boolean;
  style?: any;
  color?: string;
}
const Typography: FC<Props> = ({ text, size, bold, style, color }) => {
  return (
    <Text
      style={{
        fontSize: size ? size : 14,
        fontWeight: bold ? "bold" : "400",
        color: color ? color : "#333",
        ...style
      }}
    >
      {text}
    </Text>
  );
};

export default Typography;
