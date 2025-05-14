"use client";

import { useExtensions } from "../hooks/hooks";

export function FilterExtension() {
  const { filter, dispatch } = useExtensions();

  return (
    <div className="filter">
      <button
        className={`filter-tab${filter === "all" ? " filter-tab--active" : ""}`}
        onClick={() => dispatch({ type: "filterAll" })}
      >
        All
      </button>
      <button
        className={`filter-tab${
          filter === "active" ? " filter-tab--active" : ""
        }`}
        onClick={() => dispatch({ type: "filterActive" })}
      >
        Active
      </button>
      <button
        className={`filter-tab${
          filter === "inactive" ? " filter-tab--active" : ""
        }`}
        onClick={() => dispatch({ type: "filterInactive" })}
      >
        Inactive
      </button>
    </div>
  );
}
