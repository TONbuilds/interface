export const calculatePrizeDistribution = (totalPrize: number) => {
  const fiftyPercent = totalPrize * 0.5;
  const thirtyPercent = totalPrize * 0.3;
  const twentyPercent = totalPrize * 0.2;

  return {
    fiftyPercent,
    thirtyPercent,
    twentyPercent,
  };
};
