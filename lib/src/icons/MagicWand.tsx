import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMagicWand = (props: SvgProps) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill={props.color || `#FFFFFF`}
        d="M18 9.064a3.05 3.05 0 0 0-.9-2.164 3.14 3.14 0 0 0-4.334 0L.9 18.769A3.064 3.064 0 0 0 5.23 23.1L17.1 11.231a3.046 3.046 0 0 0 .9-2.167ZM3.816 21.688a1.087 1.087 0 0 1-1.5 0 1.062 1.062 0 0 1 0-1.5l7.769-7.77 1.505 1.505-7.774 7.765ZM15.688 9.816 13 12.505 11.5 11l2.689-2.688a1.063 1.063 0 1 1 1.5 1.5l-.001.004ZM4.863 2.855l1.55-.442.442-1.55a1.191 1.191 0 0 1 2.29 0l.442 1.55 1.55.442a1.19 1.19 0 0 1 0 2.29l-1.55.442-.442 1.55a1.191 1.191 0 0 1-2.29 0l-.442-1.55-1.55-.442a1.19 1.19 0 0 1 0-2.29Zm18.274 14.29-1.55.442-.442 1.55a1.191 1.191 0 0 1-2.29 0l-.442-1.55-1.55-.442a1.191 1.191 0 0 1 0-2.29l1.55-.442.442-1.55a1.19 1.19 0 0 1 2.29 0l.442 1.55 1.55.442a1.19 1.19 0 0 1 0 2.29ZM17.755 2.5l1.356-.387L19.5.755a1.042 1.042 0 0 1 2 0l.387 1.356 1.356.387a1.042 1.042 0 0 1 0 2l-1.356.387-.387 1.359a1.042 1.042 0 0 1-2 0l-.387-1.355-1.358-.39a1.042 1.042 0 0 1 0-1.999Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgMagicWand;