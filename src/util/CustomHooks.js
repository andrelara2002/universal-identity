import { useSelector, useDispatch } from "react-redux";

export function getColors() {
  const colors = useSelector(state => state.colors);
  return colors;
}

export function getLanguage() {
  const language = useSelector(state => state.language);
  return language;
}

export function setTier(rate, hours) {
  if (rate > 4) {
    return { name: "excelent", text: "Excelent Rate Profissional" };
  } else if (rate > 3) {
    return { name: "great", text: "Great level Profissional" };
  } else if (rate >= 2) {
    return { name: "good", text: "Good level Profissional" };
  } else if (rate <= 1 && hours < 40) {
    return { name: "good", text: "Novice Profissional" };
  } else {
    return { name: "bad", text: "Low level Profissional" };
  }
}

export function getWeekText(week) {
  switch (week) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}

export function getMonthText(month) {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "";
  }
}
