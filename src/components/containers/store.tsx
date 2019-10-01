import React from "react";
import { Variations, preConfiguredThemes } from "./../themes/variations";
import { StoreInfo } from "./../themes/info";

export type VariationOptions = 1 | 2 | 3 | null;

export type VariationKeys =
  | "header"
  | "background"
  | "backgroundColor"
  | "productContainer"
  | "decoration";

type ContextProps = {
  isSaveModalOpen: boolean;
  // TODO replace number with variation type
  selectedVariations: Variations;
  storeInfo: StoreInfo;
  email: string;
  hasUnsavedChanges: boolean;
};

interface Action<T, P> {
  type: T,
  payload: P,
}

type Actions =
| Action<"UPDATE_VARIATION", {
  key: VariationKeys,
  variation: VariationOptions,
}>
| Action<"UPDATE_SAVED_CHANGES_FLAG", null>
| Action<"TOGGLE_SAVE_MODAL", boolean>
| Action<"UPDATE_EMAIL", string>
| Action<"SET_PRESET_THEME", number>
| Action<"UPDATE_STORE_INFO", any>


// Context
const State = React.createContext<Partial<ContextProps>>(null);
const Dispatch = React.createContext<React.Dispatch<Actions>>(null);

// Reducer
const reducer = (state, action: Actions) => {
  switch (action.type) {
    case "UPDATE_SAVED_CHANGES_FLAG":
      return {
        ...state,
        hasUnsavedChanges: false,
      }
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
    email: '',
    hasUnsavedChanges: false
  });

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};

// Export
export const Store = {
  State,
  Dispatch,
  Provider
};
