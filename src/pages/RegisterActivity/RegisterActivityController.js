import React from "react";

import Loading from "../../components/loading/Loading";

import RegisterActivityView from "./RegisterActivityView";
import { setActivityToApi } from "../../services/storage";

export default function RegisterActivityController(props) {
  const [loading, setLoading] = React.useState(false);

  const [activityName, setActivityName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [hours, setHours] = React.useState(0);
  const [observations, setObservations] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const { navigation } = props;

  const onSubmit = async () => {
    const data = {
      titulo: activityName,
      local: place,
      descricao: description,
      observacao: observations,
      horasTrabalhadas: hours,
      avaliacao: rating,
      pessoaId: props.params.pessoaId
    };
    const response = await setActivityToApi(data);
    if (response) {
      navigation.navigate("Home2");
    } else {
      alert("Erro ao cadastrar atividade");
    }
  };

  if (loading) {
    return <Loading />;
  }

  React.useEffect(() => {
    setLoading(false);
  });

  return (
    <RegisterActivityView
      activityName={activityName}
      setActivityName={setActivityName}
      description={description}
      setDescription={setDescription}
      place={place}
      setPlace={setPlace}
      observations={observations}
      setObservations={setObservations}
      rating={rating}
      setRating={setRating}
      hours={hours}
      setHours={setHours}
      onSubmit={onSubmit}
    />
  );
}
