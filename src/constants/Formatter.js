import { GAME_COMPONEMT } from "./Messeage.js"

export const baseballResult = (strikeNumber, ballNumber, isNothing) => {
  if (isNothing) {
    return GAME_COMPONEMT.nothing;
  }

  const strikeResult = strikeNumber > 0 ? `${strikeNumber}${GAME_COMPONEMT.strike}` : '';
  const ballResult = ballNumber > 0 ? `${ballNumber}${GAME_COMPONEMT.ball}` : '';

  const result = `${ballResult} ${strikeResult}`;
  return result.trim();
};