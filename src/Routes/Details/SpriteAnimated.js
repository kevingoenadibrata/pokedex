import { Sprite } from "./index.styles";
import {
  PokeballShaking,
  PokeballSuccess,
  PokeballDisappear,
  SpriteGrowing,
  SpriteHidden,
  SpriteShrinking,
} from "./Sprite.animation";

import { toaster } from "evergreen-ui";

const SpriteAnimated = ({
  animationState,
  sprite,
  calculateCatchResults,
  promptNickname,
  resetState,
}) => {
  switch (animationState) {
    case "entry":
      return <Sprite sprite={sprite} size="90vw" />;
    case "catch":
      return (
        <>
          <SpriteShrinking sprite={sprite} size="90vw" />
          <PokeballShaking onAnimationEnd={calculateCatchResults} />
        </>
      );
    case "success":
      return (
        <>
          <SpriteHidden sprite={sprite} size="90vw" />
          <PokeballSuccess onAnimationEnd={promptNickname} />
        </>
      );
    case "fail":
      return (
        <>
          <SpriteGrowing
            sprite={sprite}
            size="90vw"
            onAnimationEnd={() => {
              toaster.danger("Oh no! The Pokemon broke free");
              resetState();
            }}
          />
          <PokeballDisappear />
        </>
      );
    default:
      return <Sprite sprite={sprite} size="90vw" />;
  }
};

export default SpriteAnimated;
