import React from "react";

import HomeView from "./HomeView";
import Loading from "../../components/loading/Loading";

import { useSelector } from "react-redux";

export default function HomeController() {
  const [loading, setLoading] = React.useState(true);
  const state = useSelector(state => state.app);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  if (loading) {
    return <Loading visible={loading} />;
  }

  return <HomeView loading={loading} state= {state} />;
}
