import { CSSEffect } from "@donkeyclip/motorcortex";
export const scaleBig = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: {
          scale: 1.8,
        },
      },
      initialValues: {
        opacity: 0,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
