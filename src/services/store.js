import { createStore } from "redux";

const initialState = {
  app: {
    name: "",
    token: "",
    cpf: "",
    email: "",
    rank: 0,
    history: []
  },
  language: "en_US",
  colors: {
    background: "#ffffff",
    card: "#FCFCFC",
    text: "#313131",
    subtext: "#989898",
    accent: "#00A8FF",
    buttons: {
      normal: "#00B2FE",
      deactivated: "#DBD7D7",
      declined: "#FF4343"
    },
    tiers: {
      excelent: "#FEB700",
      great: "#00B2FE",
      good: "#00FE66",
      bad: "#FF4343"
    }
  }
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        app: {
          ...state.app,
          name: action.payload
        }
      };
    case "SET_EMAIL":
      return {
        ...state,
        app: {
          ...state.app,
          email: action.payload
        }
      };
    case "SET_RANK":
      return {
        ...state,
        app: {
          ...state.app,
          rank: action.payload
        }
      };
    case "SET_HISTORY":
      return {
        ...state,
        app: {
          ...state.app,
          history: action.payload
        }
      };
    case "PUSH_HISTORY":
      return {
        ...state,
        app: {
          ...state.app,
          history: [...state.app.history, action.payload]
        }
      };
    default:
      return state;
  }
};

export default createStore(reducer);
