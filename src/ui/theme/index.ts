const InterRegular = require("../../assets/fonts/Inter-Regular.ttf");
const InterBold = require("../../assets/fonts/Inter-Bold.ttf");

const theme = {
  colors: {
    backgroundPrimary: "#0A0A0A",
    foregroundPrimary: "#F7F7F7",
    foregroundVariant: "#C8C8C8",
  },
  fontFamily: {
    heading: "Inter-Bold",
    body: "Inter-Regular",
  },
  fontSize: {
    heading: 16,
    body: 15,
  },
  fontWeight: {
    heading: "600",
    body: "400",
  },
  spacing: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 32,
  },
};

export { theme, InterRegular, InterBold };
