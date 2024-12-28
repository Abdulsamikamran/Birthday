// src/theme/index.js

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  },
  colors: {
    primary: "#61C0BF",
  },
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: "primary", // Set the fill color to your primary color
        },
      },
    },
  },
});

export default theme;
