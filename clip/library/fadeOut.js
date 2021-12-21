import { CSSEffect } from "@donkeyclip/motorcortex";
export const fadeOut = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 0,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
