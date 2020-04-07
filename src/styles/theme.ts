import baseStyled, { css, CSSProp, ThemedStyledInterface } from "styled-components";

const sizes: { [key: string]: number } = {
  mobile: 320,
  tablet: 780,
  desktop: 1180,
  large: 1500,
};

type BackQuoteArgs = string[];

interface Media {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
  large: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
  mobile: (...args: BackQuoteArgs) => undefined,
  tablet: (...args: BackQuoteArgs) => undefined,
  desktop: (...args: BackQuoteArgs) => undefined,
  large: (...args: BackQuoteArgs) => undefined,
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case "large":
      acc.large = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (min-width: ${sizes.large}px) {
            ${args}
          }
        `;
      break;
    case "desktop":
      acc.desktop = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (min-width: ${sizes.desktop}px) {
            ${args}
          }
        `;
      break;
    case "tablet":
      acc.tablet = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.tablet}px) {
            ${args}
          }
        `;
      break;
    case "mobile":
      acc.mobile = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${sizes.tablet}px) {
            ${args}
          }
        `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const colors = {
  primary_color: "#c9daf0",
  pc_header_color: "#2b2a2f",
  pc_nav_border_color: "#1b1a1f",
  pc_footer_primary: "#888",
};

const secondaryColors = {};
const fontSizes: string[] = [];

const theme = {
  colors,
  fontSizes,
  secondaryColors,
  media,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
