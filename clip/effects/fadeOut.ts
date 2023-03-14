//Here we export the incident, you can use it only one time

import { CSSEffect } from "@donkeyclip/motorcortex";
export const fadeOut = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
    },
  },
  {
    selector: ".container",
    duration: 2000,
  }
);
