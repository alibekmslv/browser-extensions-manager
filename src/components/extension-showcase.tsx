"use client";

import { useExtensions } from "../hooks/hooks";
import { ExtensionCard } from "./extension-card";

export function ExtensionShowcase() {
  const { state, extensions } = useExtensions();

  function AllExtensions() {
    return (
      <>
        {extensions.map((item) => {
          return <ExtensionCard key={item.name} extension={item} />;
        })}
      </>
    );
  }

  function ActiveExtensions() {
    return (
      <>
        {extensions.map((item) => {
          if (item.isActive)
            return <ExtensionCard key={item.name} extension={item} />;
        })}
      </>
    );
  }

  function InactiveExtensions() {
    return (
      <>
        {extensions.map((item) => {
          if (!item.isActive)
            return <ExtensionCard key={item.name} extension={item} />;
        })}
      </>
    );
  }

  return (
    <div className="extension-showcase">
      {state.filter === "all" && <AllExtensions />}
      {state.filter === "active" && <ActiveExtensions />}
      {state.filter === "inactive" && <InactiveExtensions />}
    </div>
  );
}
