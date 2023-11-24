export const validator = (userInputString) => {
  const k = userInputString.split('');

  if (
    k.length !== 3 ||
    k.length !== new Set(k).size ||
    userInputString.includes(0) ||
    Number.isNaN(Number(userInputString))
  ) {
    throw new Error(`[ERROR]`);
  }
};