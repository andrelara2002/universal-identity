import React from "react";

import HomeView from "./HomeView";
import Loading from "../../components/loading/Loading";
import { useSelector } from "react-redux";
import { getUserFromApi, getAtividadesFromApi } from "../../services/storage";
import { useDispatch } from "react-redux";

export default function HomeController() {
  const [loading, setLoading] = React.useState(true);
  const [loading2, setLoading2] = React.useState(false);
  const state = useSelector(state => state.app);
  const colors = useSelector(state => state.colors);
  const [userData, setUserData] = React.useState(null);
  const [atividadesData, setAtividadesData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const borderImage = "Excelent";

  const getData = async () => {
    setUserData(await getUserFromApi());
    setAtividadesData(await getAtividadesFromApi(1));
    setLoading(false);

  };

  React.useEffect(() => {
    if (userData === null) {
      getData();
    }
  }, []);

  // const loadAtividades = async () => {

  //   if (loading2)
  //     return;

  //   setLoading2(true);
  //   const newAtividadesData = await getAtividadesFromApi(page);

  //   setAtividadesData([...atividadesData, ...newAtividadesData]);
  //   setPage(page + 1);

  //   setLoading2(false);
  // }

  if (loading) {
    return <Loading />;
  }

  return (
    <HomeView
      loading={loading}
      userData={userData}
      atividadesData={atividadesData}
      // loadAtividades={loadAtividades}
      state={state}
      colors={colors}
      borderImage={borderImage}
    />
  );
}
