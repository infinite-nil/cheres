import { Background, Gradient, RoundGradient } from "./light-effect.styles";

const LightEffect = () => {
  return (
    <>
      <RoundGradient
        colors={[
          "rgba(24, 24, 24, 1)",
          "rgba(255, 255, 255, .7)",
          "rgb(24, 24, 24)",
        ]}
        locations={[0.1, 0.5, 0.9]}
      />
      <Background />
      <Gradient colors={["rgba(24, 24, 24, 1)", "rgba(24, 24, 24, 0)"]} />
    </>
  );
};

export { LightEffect };
