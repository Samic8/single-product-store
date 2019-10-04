import React from "react";
import { Variations, preConfiguredThemes } from "./../themes/variations";
import { StoreInfo } from "./../themes/info";

type ContextProps = {
  isSaveModalOpen: boolean;
  // TODO replace number with variation type
  selectedVariations: Variations;
  storeInfo: StoreInfo;
  email: string;
  hasUnsavedChanges: boolean;
  activeNavBarTab: "config" | "preview";
};

// TODO how to typescript a specific payload with a type? Maybe union types of objects?
type Action = {
  type:
    | "TOGGLE_SAVE_MODAL"
    | "UPDATE_EMAIL"
    | "UPDATE_VARIATION"
    | "SET_PRESET_THEME"
    | "UPDATE_STORE_INFO"
    | "UPDATE_SAVED_CHANGES_FLAG"
    | "UPDATE_NAV_BAR";
  payload: any;
};

// Context
const State = React.createContext<Partial<ContextProps>>(null);
const Dispatch = React.createContext<React.Dispatch<Action>>(null);

// Reducer
const reducer = (state, action: Action) => {
  switch (action.type) {
    case "UPDATE_SAVED_CHANGES_FLAG":
      return {
        ...state,
        hasUnsavedChanges: false
      };
    case "TOGGLE_SAVE_MODAL":
      return {
        ...state,
        isSaveModalOpen: action.payload
      };
    case "UPDATE_EMAIL":
      return {
        ...state,
        hasUnsavedChanges: false,
        email: action.payload
      };
    case "UPDATE_VARIATION":
      return {
        ...state,
        hasUnsavedChanges: true,
        selectedVariations: {
          ...state.selectedVariations,
          [action.payload.key]: action.payload.variation
        }
      };
    case "SET_PRESET_THEME":
      return {
        ...state,
        // TODO: better way to update all of the keys? Maybe store keys all in one place
        selectedVariations: preConfiguredThemes[action.payload]
      };
    case "UPDATE_STORE_INFO":
      // TODO: Better way to deal with nested merges?
      let newStoreInfo = action.payload;
      if (action.payload.image) {
        newStoreInfo = {
          image: {
            ...state.storeInfo.image,
            ...action.payload.image
          }
        };
      }

      return {
        ...state,
        hasUnsavedChanges: true,
        storeInfo: {
          ...state.storeInfo,
          ...newStoreInfo
        }
      };
    case "UPDATE_NAV_BAR":
      return {
        ...state,
        activeNavBarTab: action.payload
      };
    default:
      return state;
  }
};

// Provider
const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    isSaveModalOpen: false,
    selectedVariations: {},
    // TODO: use defaults in info.tsx as well
    storeInfo: {
      type: "physical"
    },
    email: "",
    hasUnsavedChanges: false,
    activeNavBarTab: "config"
  });

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};

export const useStore = (): [Partial<ContextProps>, React.Dispatch<Action>] => {
  const dispatch = React.useContext(Store.Dispatch);
  const state = React.useContext(Store.State);
  return [state, dispatch];
};

export const Store = {
  State,
  Dispatch,
  Provider
};
