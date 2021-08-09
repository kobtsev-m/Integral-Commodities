export const getCurrentDate = () => {
  return new Date();
};

export const getFutureDate = (date, daysAfter) => {
  const futureDate = new Date(date);
  futureDate.setDate(futureDate.getDate() + daysAfter);
  return futureDate;
};

export const getWeeksRangeList = (weeksAfter) => {
  let weeks = [];
  let date = new Date();
  for (let i = 0; i < weeksAfter; ++i) {
    date.setDate(date.getDate() + 1);
    const date1 = new Date(date);
    date.setDate(date.getDate() + 6);
    const date2 = new Date(date);
    weeks.push({ id: i, range: [date1, date2], selected: false });
  }
  return weeks;
};

export const formatWeekYMD = (week) => {
  return [
    `${week[0].getFullYear()}-${week[0].getMonth() + 1}-${week[0].getDate()}`,
    `${week[1].getFullYear()}-${week[1].getMonth() + 1}-${week[1].getDate()}`
  ];
};
