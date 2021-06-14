const getMonthName = (date) => {
  return date.toLocaleString("en", { month: "long" });
};

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

export const getMonthsOffsetList = (weeks) => {
  let weekAttitude = 1 / weeks.length;
  let months = [];
  let currMonth = null;
  for (let i = 0; i < weeks.length; ++i) {
    if (currMonth !== weeks[i].range[1].getMonth()) {
      currMonth = weeks[i].range[1].getMonth();
      months.push({
        id: months.length,
        name: getMonthName(weeks[i].range[1]),
        year: weeks[i].range[1].getFullYear(),
        offset: i * weekAttitude,
      });
    }
  }
  return months;
};

export const formatWeekYMD = (week) => {
  return [
    `${week[0].getFullYear()}-${week[0].getMonth() + 1}-${week[0].getDate()}`,
    `${week[1].getFullYear()}-${week[1].getMonth() + 1}-${week[1].getDate()}`,
  ];
};

export const formatWeekDM = (week) => {
  const day1 = `${week[0].getDate()} ${getMonthName(week[0])}`;
  const day2 = `${week[1].getDate()} ${getMonthName(week[1])}`;
  return `${day1} - ${day2}`;
};
