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
