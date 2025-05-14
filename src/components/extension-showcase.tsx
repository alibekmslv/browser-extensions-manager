"use client";

import { useExtensions } from "../hooks/hooks";
import { ExtensionCard } from "./extension-card";

export function ExtensionShowcase() {
  const { extensions, filter } = useExtensions();

  function renderContent() {
    switch (filter) {
      case "active":
        return (
          <>
            {extensions.map((item) => {
              if (item.isActive)
                return <ExtensionCard key={item.name} extension={item} />;
            })}
          </>
        );
      case "inactive":
        return (
          <>
            {extensions.map((item) => {
              if (!item.isActive)
                return <ExtensionCard key={item.name} extension={item} />;
            })}
          </>
        );

      default:
        return (
          <>
            {extensions.map((item) => {
              return <ExtensionCard key={item.name} extension={item} />;
            })}
          </>
        );
    }
  }

  return <div className="extension-showcase">{renderContent()}</div>;
}
