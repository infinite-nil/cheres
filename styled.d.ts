import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundPrimary: string;
      foregroundPrimary: string;
      foregroundVariant: string;
    };
    fontFamily: {
      heading: string;
      body: string;
    };
    fontSize: {
      feeling: number;
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
