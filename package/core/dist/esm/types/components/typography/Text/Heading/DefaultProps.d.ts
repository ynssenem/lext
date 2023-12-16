import { ColorTypeProps } from "../../helpers/GetColorValue";
import { HeadingSizesProps } from "../../styles/HeadingSizes";
export type HeadingProps = {
    color?: ColorTypeProps;
    fontSize?: keyof HeadingSizesProps | number;
    fontFamily?: string;
};
export type HeadingComponentThemeProps = {
    default: HeadingProps;
    classes?: object;
};
export declare const HeadingComponentThemeData: HeadingComponentThemeProps;