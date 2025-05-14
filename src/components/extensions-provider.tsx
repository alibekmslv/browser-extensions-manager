"use client";
import { createContext, useReducer } from "react";
import type { Extension } from "./extension-card";

export const ExtensionsContext = createContext<State>(null);
export const ExtensionsDispatchContext =
  createContext<React.Dispatch<ExtensionsAction>>(null);

type ExtensionProviderProps = {
  extensions: Extension[];
  children?: React.ReactNode;
};

export function ExtensionProvider({
  children,
  extensions,
}: ExtensionProviderProps) {
  const [state, dispatch] = useReducer(extensionsReducer, {
    extensions,
    filter: "all",
  } as State);

  return (
    <ExtensionsContext.Provider value={state}>
      <ExtensionsDispatchContext.Provider value={dispatch}>
        {children}
      </ExtensionsDispatchContext.Provider>
    </ExtensionsContext.Provider>
  );
}

interface State {
  extensions: Extension[];
  filter: "all" | "active" | "inactive";
}

type ExtensionsAction =
  | { type: "filterAll" }
  | { type: "filterActive" }
  | { type: "filterInactive" }
  | { type: "remove"; name: Extension["name"] }
  | { type: "switch"; name: Extension["name"] };

function extensionsReducer(state: State, action: ExtensionsAction): State {
  switch (action.type) {
    case "filterAll": {
      return {
        ...state,
        filter: "all",
      };
    }
    case "filterActive": {
      return {
        ...state,
        filter: "active",
      };
    }
    case "filterInactive": {
      return {
        ...state,
        filter: "inactive",
      };
    }
    case "remove": {
      return {
        ...state,
        extensions: state.extensions.filter(
          (item) => item.name !== action.name
        ),
      };
    }
    case "switch": {
      return {
        ...state,
        extensions: state.extensions.map((item) => {
          if (item.name === action.name) {
            return {
              ...item,
              isActive: !item.isActive,
            };
          }
          return item;
        }),
      };
    }
    default: {
      throw Error("Unknown action: ");
    }
  }
}
