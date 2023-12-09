import { ActionButtonComponentThemeData } from "../components/button/ActionButton/DefaultProps";
import { ButtonComponentThemeData } from "../components/button/Button/DefaultProps";
import { BoxComponentThemeData } from "../components/mics/Box/DefaultProps";
import { GridComponentThemeData } from "../components/mics/Grid/DefaultProps";
import { GroupComponentThemeData } from "../components/mics/Group/DefaultProps";
import { StackComponentThemeData } from "../components/mics/Stack/DefaultProps";
import { HeadingComponentThemeData } from "../components/typography/Heading/DefaultProps";
import { TextComponentThemeData } from "../components/typography/Text/DefaultProps";
import { ThemeInterface } from "../interfaces";
import Colors, { Black, White } from "./Colors";
import HeadingSizes from "./HeadingSizes";
import Spacing from "./Spacing";
import TextSizes from "./TextSizes";

export type ThemeProps = {
  theme?: ThemeInterface;
};

const Theme: ThemeInterface = {
  colors: Colors,
  white: White,
  black: Black,
  spacing: Spacing,
  fontSizes: {
    heading: HeadingSizes,
    text: TextSizes,
  },
  components: {
    Text: TextComponentThemeData,
    Heading: HeadingComponentThemeData,
    Stack: StackComponentThemeData,
    Group: GroupComponentThemeData,
    Grid: GridComponentThemeData,
    Box: BoxComponentThemeData,
    Button: ButtonComponentThemeData,
    ActionButton: ActionButtonComponentThemeData,
  },
  defaultOptions: {
    gap: 5,
    padding: 25,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 5,
    minHeight: 45,
  },
};

export default Theme;