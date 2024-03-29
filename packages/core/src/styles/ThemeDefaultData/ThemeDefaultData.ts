import ThemeInterface from "@/interfaces/ThemeInterface/ThemeInterface"

const ThemeDefaultData: ThemeInterface = {
  colors: {
    darken: {
      main: {
        background: "#000",
        primary: "blue",
        secondary: "#666",
        muted: "#d1d1d1",
      },
      text: {
        global: "#FFF",
        emphasis: "blue",
        inverse: "purple",
      },
    },
    lighten: {
      main: {
        background: "#FFF",
        primary: "blue",
        secondary: "#666",
        muted: "#d1d1d1",
      },
      text: {
        global: "#000",
        emphasis: "blue",
        inverse: "red",
      },
    },
  },
  components: {
    Text: {
      defaultVariant: "global",
      variants: {
        meta: {
          color: "emphasis",
          fontStyle: "italic",
          fontSize: 10,
        },
        button: {
          color: "global",
          fontSize: 14,
        },
        global: {
          color: "global",
          fontSize: 16,
        },
      },
    },
    Box: {
      defaultVariant: "global",
      variants: {
        global: {
          padding: 10,
        },
        muted: {
          backgroundColor: "primary",
        },
      },
    },
    Button: {
      defaultVariant: "default",
      variants: {
        default: {
          box: {
            backgroundColor: "primary",
            paddingHorizontal: 20,
          },
          label: {
            fontSize: 14,
            color: "inverse",
          },
        },
      },
    },
    Input: {
      defaultVariant: "default",
      variants: {
        default: {
          label: {
            fontSize: 14,
            fontStyle: "italic",
          },
          input: {
            flex: 1,
            fontSize: 10,
          },
          layout: {
            backgroundColor: "muted",
            paddingHorizontal: 10,
            paddingVertical: 0,
            height: 50,
          },
          errorLayout: {
            backgroundColor: "background",
          },
          description: {},
          error: {
            color: "emphasis",
            fontSize: 12,
          },
        },
        test: {
          label: {
            fontSize: 17,
            fontStyle: "italic",
          },
          input: {
            flex: 1,
            fontSize: 10,
          },
          layout: {
            backgroundColor: "muted",
            paddingHorizontal: 10,
            paddingVertical: 0,
            height: 50,
          },
          errorLayout: {
            backgroundColor: "background",
          },
          description: {},
          error: {
            color: "emphasis",
            fontSize: 12,
          },
        },
      },
    },
    Switch: {
      defaultVariant: "default",
      variants: {
        default: {
          thumbColor: "muted",
          trackColor: {
            false: "muted",
            true: "secondary",
          },
          ios_backgroundColor: "primary",
        },
      },
    },
  },
}

export default ThemeDefaultData
