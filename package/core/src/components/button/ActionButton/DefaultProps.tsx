import { DimensionValue } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { ButtonInterface } from "../../../interfaces";

export type ActionButtonProps = ButtonInterface & {
  backgroundColor?: ColorTypeProps;
  width?: DimensionValue;
  variant?: "filled" | "outline" | "transparent";
  borderRadius?: number;
  size?: "lg" | "md" | "sm";
};

export type ActionButtonComponentThemeProps = {
  default: ActionButtonProps;
  classes?: object;
};

export const ActionButtonComponentThemeData: ActionButtonComponentThemeProps = {
  default: {
    backgroundColor: "primary",
    variant: "filled",
    size: "md",
  },
};
