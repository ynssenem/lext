import React, { useEffect, useState } from "react";
import Text from "../../typography/Text/Text";
import Layout from "../_layout/Layout";
import FormProps from "../_types/FormProps";
import {
  Image,
  ScrollView,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { Box, Group, Modal, Stack } from "../..";
import { CustomModalProps } from "../../mics/Modal/Modal";
import { css } from "@emotion/native";
import { useColor, useTheme } from "../../../hooks";
import { InputProps } from "../_types/InputProps";

type DataProps = {
  image?: string;
  value: TextInputProps["value"];
  description?: string;
  label: string;
};

type CustomSelectBoxProps = TextInputProps &
  InputProps & {
    modal: CustomModalProps;
    onPress?: () => any;
    data: DataProps[];
    defaultSelectMessage?: string;
    onChange?: ((e: any) => void) | undefined;
  };

const CustomSelectBox: FormProps<CustomSelectBoxProps> = (props) => {
  const {
    layout,
    modal,
    data,
    defaultSelectMessage = "Select",
    onPress,
    value,
    onChange,
    color,
    fontSize,
  } = props;
  const getColor = useColor();
  const [getValue, setValue] = useState<DataProps>();
  const { theme } = useTheme();
  const defaultProps = theme?.components.Input.default;

  const findValue = (value: string) =>
    data.find((item) => item.value === value);

  const onPressItem = (item: DataProps) => {
    setValue(item);
    if (onChange) {
      onChange(item);
    }
  };

  useEffect(() => {
    if (!getValue && value) {
      const field = findValue(value);
      if (field) {
        setValue(field);
      }
    }
  }, []);

  const itemCss = css({
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: getColor("muted"),
    flexDirection: "row",
    gap: 10,
  });

  return (
    <>
      <Modal {...modal}>
        <ScrollView>
          {data.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => onPressItem(item)}>
              <Box
                backgroundColor={
                  getValue && item.value == getValue.value ? "muted" : undefined
                }
                style={itemCss}
              >
                <Group>
                  {item.image && (
                    <Image
                      source={{ uri: item.image }}
                      width={32}
                      height={32}
                    />
                  )}
                  <Stack gap={0}>
                    <Text>{item.label}</Text>
                    {item.description && (
                      <Text fontSize={"caption"} color="emphasis">
                        {item.description}
                      </Text>
                    )}
                  </Stack>
                </Group>
              </Box>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Modal>
      <Layout layout={layout}>
        <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
          {getValue ? (
            <Group gap={10} alignItems="center">
              {getValue.image && (
                <Image
                  source={{ uri: getValue.image }}
                  width={24}
                  height={24}
                />
              )}
              <Stack gap={0}>
                <Text
                  color={color ?? defaultProps.color}
                  fontSize={fontSize ?? defaultProps.fontSize}
                  fontFamily={theme.fontFamily.monospace}
                >
                  {getValue.label}
                </Text>
              </Stack>
            </Group>
          ) : (
            <Text
              color={color ?? defaultProps.color}
              fontSize={fontSize ?? defaultProps.fontSize}
              fontFamily={theme.fontFamily.monospace}
            >
              {defaultSelectMessage}
            </Text>
          )}
        </TouchableOpacity>
      </Layout>
    </>
  );
};

export default CustomSelectBox;
