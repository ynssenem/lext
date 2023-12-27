import { SvgProps as RNSSvgProps } from "react-native-svg";
import { ColorTypeProps } from "./helpers/GetColorValue";

declare module "react-native-svg" {
  interface SvgProps extends RNSSvgProps {
    size?: number;
  }
}
