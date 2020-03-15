export const calculateTemps = () => {
  const filterDays = days => {
    let fullDays = [];
    let individualDay = [];
    // Check for each day
    days.data.list.forEach(day => {
      // take the date
      const date = day.dt_txt.split(" ")[0];
      // compare versus the previous date
      if (
        individualDay.length === 0 ||
        individualDay[0].dt_txt.split(" ")[0] === date
      ) {
        individualDay.push(day);
      } else {
        // if its different submit the array to the full days + clear individual day
        fullDays.push(individualDay);
        individualDay = [];
      }
    });
    return fullDays;
  };

  const listHighs = days => {
    const fullDays = filterDays(days);
    // Select the highest temperature for that specific day
    let highest = [];

    fullDays.forEach(day => {
      let highTemp;
      day.forEach(time => {
        if (highTemp === undefined || highTemp < time.main.temp) {
          highTemp = Math.round(time.main.temp * 10) / 10;
        }
      });
      highest.push(highTemp);
    });

    return highest;
  };

  // Return the list of low temperature for the next 5 days
  const listLows = days => {
    const fullDays = filterDays(days);
    // Select the lowest temperature for that specific day
    let lowest = [];

    fullDays.forEach(day => {
      let lowTemp;
      day.forEach(time => {
        if (lowTemp === undefined || lowTemp > time.main.temp) {
          lowTemp = Math.round(time.main.temp * 10) / 10;
        }
      });
      lowest.push(lowTemp);
    });

    return lowest;
  };

  // To return all data
  const calculateHandler = days => {
    let dayList = filterDays(days);
    let highs = listHighs(days);
    let lows = listLows(days);

    return { dayList, highs, lows };
  };

  return { listHighs, listLows, calculateHandler };
};
