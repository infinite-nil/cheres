import { LevelProps } from "../../insight-card.styles";
import { getGradientStop } from "@utils/styles";
import { Background, Gradient, RoundGradient } from "./light-effect.styles";

const LightEffect = ({ level }: LevelProps) => {
  const endStop = getGradientStop(level);

  return (
    <>
      <RoundGradient
        colors={[
          "rgba(24, 24, 24, 1)",
          "rgba(255, 255, 255, .7)",
          "rgb(24, 24, 24)",
        ]}
        locations={[0.1, 0.5, endStop]}
      />
      <Background />
      <Gradient colors={["rgba(24, 24, 24, 1)", "rgba(24, 24, 24, 0)"]} />
    </>
  );
};

export { LightEffect };
