"use client";

import { useContext } from "react";
import {
  ExtensionsContext,
  ExtensionsDispatchContext,
} from "../components/extensions-provider";

export function useExtensions() {
  const state = useContext(ExtensionsContext);
  const dispatch = useContext(ExtensionsDispatchContext);

  return {
    ...state,
    dispatch,
  };
}
