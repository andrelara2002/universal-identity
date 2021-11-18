import React from "react";

import HomeView from "./HomeView";
import Loading from "../../components/loading/Loading";

import { useSelector } from "react-redux";

export default function HomeController() {
  const [loading, setLoading] = React.useState(true);
  const state = useSelector(state => state.app);
  const colors = useSelector(state => state.colors);
  const borderImage = "Excelent";

 
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  });

  if (loading) {
    return <Loading visible={loading} />;
  }

  return (
    <HomeView
      loading={loading}
      state={state}
      colors={colors}
      borderImage={borderImage}
    />
  );
}
