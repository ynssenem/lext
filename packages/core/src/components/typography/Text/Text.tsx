import { TextStyle } from "@/interfaces"
import ThemeProps from "@/types/ThemeProps/ThemeProps"
import styled from "@emotion/native"

type CustomTextProps = TextStyle & {
  variant?: string
}

const Text = styled.Text<CustomTextProps>(
  ({ variant, theme, style: _style, children: _children, ...attrProps }) => {
    const { getComponent, getTextColor } = theme as ThemeProps

    const variantName = variant ?? getComponent?.Text?.defaultVariant
    const defaultProps = getComponent?.Text?.variants[variantName] ?? {}

    const color = getTextColor(
      attrProps.color ?? defaultProps.color ?? "global",
    )

    return {
      ...defaultProps,
      ...attrProps,
      color,
    }
  },
)

export default Text
