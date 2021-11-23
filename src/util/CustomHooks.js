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
    return "Excelent level of qualification";
  } else if (rate > 3) {
    return "Great level of qualification";
  } else if (rate >= 2) {
    return "Good level of qualification";
  } else if (rate <= 1 && hours < 40) {
    return "Novice profissional";
  } else {
    return "Average";
  }
}
