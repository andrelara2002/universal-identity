import React from "react";

import { useSelector } from "react-redux";

export function getColors() {
  const colors = useSelector(state => state.colors);
  return colors;
}

export function getLanguage() {
  const language = useSelector(state => state.language);
  return language;
}
