import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundPrimary: string;
      foregroundPrimary: string;
      foregroundVariant: string;
    };
    fontFamily: {
      default: string;
    };
    fontSize: {
      heading: number;
      body: number;
    };
    fontWeight: {
      heading: string;
      body: string;
    };
    spacing: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
}
