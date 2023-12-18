import { DimensionValue } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { ButtonInterface } from "../../../interfaces";

export type ButtonProps = ButtonInterface & {
  backgroundColor?: ColorTypeProps;
  width?: DimensionValue;
  variant?: "filled" | "outline";
  paddingVertical?: number;
  paddingHorizontal?: number;
  borderRadius?: number;
  size?: "lg" | "md" | "sm";
  minHeight?: DimensionValue;
  color?: ColorTypeProps;
  fontFamily?: string;
};

export type ButtonComponentThemeProps = {
  default: ButtonProps;
  classes?: object;
};

export const ButtonComponentThemeData: ButtonComponentThemeProps = {
  default: {
    backgroundColor: "primary",
    variant: "filled",
    size: "md",
    minHeight: 50,
    color: "global",
  },
};
