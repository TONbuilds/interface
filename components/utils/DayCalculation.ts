export const calculateDaysDifference = (endDate: string): number => {
  const start = new Date();
  const end = new Date(endDate);

  const differenceInMs = end.getTime() - start.getTime();

  const msInOneDay = 1000 * 60 * 60 * 24;
  const daysDifference = differenceInMs / msInOneDay;

  return Math.floor(daysDifference);
};

export default calculateDaysDifference;
