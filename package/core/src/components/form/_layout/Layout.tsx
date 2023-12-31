import { css } from "@emotion/native";
import React, { FC, ReactNode } from "react";
import LayoutProps from "../_types/LayoutProps";
import Group from "../../mics/Group/Group";
import Stack from "../../mics/Stack/Stack";
import Text from "../../typography/Text/Text";
import { useColor, useTheme } from "../../../hooks";
import { DimensionValue, FlexStyle } from "react-native";

type CustomLayoutProps = {
  children: ReactNode;
  height?: DimensionValue;
  alignItems?: FlexStyle["alignItems"];
  transparent?: boolean;
};

const Layout: FC<LayoutProps & CustomLayoutProps> = ({
  layout,
  children,
  height,
  alignItems = "center",
  transparent = false,
}) => {
  const { theme } = useTheme();
  const getColor = useColor();
  let getHeight = () => {
    let h: DimensionValue;

    if (height) {
      return height;
    }

    switch (layout?.variant) {
      case "sm":
        h =
          typeof theme.defaultOptions.minHeight === "number"
            ? theme.defaultOptions.minHeight - 10
            : theme.defaultOptions.minHeight;
        break;
      default:
        h = theme.defaultOptions.minHeight;
        break;
    }

    return h;
  };

  const labelProps = { ...theme.components.FormLayout.classes.label };
  const descriptionProps = {
    ...theme.components.FormLayout.classes.description,
  };
  const errorProps = { ...theme.components.FormLayout.classes.error };

  const viewCss = css({
    backgroundColor: getColor("muted"),
    borderRadius: theme.defaultOptions.borderRadius,
    height: getHeight(),
    paddingHorizontal: theme.defaultOptions.paddingHorizontal / 2,
    paddingVertical:
      alignItems !== "center"
        ? theme.defaultOptions.paddingVertical / 2
        : undefined,
    alignItems: alignItems,
    gap: theme.defaultOptions.gap,
    borderColor: getColor(layout?.error ? "danger" : "muted"),
    borderWidth: 1,
  });

  return (
    <Stack>
      {layout?.label && <Text {...labelProps}>{layout.label}</Text>}
      <Group style={!transparent && viewCss}>
        {layout?.left && layout.left}
        {children}
        {layout?.right && layout.right}
      </Group>
      {!layout?.error && layout?.description && (
        <Text {...descriptionProps}>{layout.description}</Text>
      )}
      {layout?.error && <Text {...errorProps}>{layout.error}</Text>}
    </Stack>
  );
};

export default Layout;
