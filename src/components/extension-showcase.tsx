"use client";

import { useEffect, useState } from "react";
import { useExtensions } from "../hooks/hooks";
import { ExtensionCard } from "./extension-card";

export function ExtensionShowcase() {
  const { extensions, filter } = useExtensions();

  const [cachedActiveExtensions, setCachedActiveExtensions] = useState(() =>
    extensions.filter((item) => item.isActive)
  );

  const [cachedInactiveExtensions, setCachedInactiveExtensions] = useState(() =>
    extensions.filter((item) => !item.isActive)
  );

  useEffect(() => {
    // We add timeout to prevent UI flicker on isActive change
    const timeout = setTimeout(() => {
      if (filter === "active") {
        setCachedActiveExtensions(extensions.filter((item) => item.isActive));
      }

      if (filter === "inactive") {
        setCachedInactiveExtensions(
          extensions.filter((item) => !item.isActive)
        );
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [filter, extensions]);

  function renderContent() {
    switch (filter) {
      case "active":
        return (
          <>
            {cachedActiveExtensions.map((item) => (
              <ExtensionCard key={item.name} extension={item} />
            ))}
          </>
        );
      case "inactive":
        return (
          <>
            {cachedInactiveExtensions.map((item) => (
              <ExtensionCard key={item.name} extension={item} />
            ))}
          </>
        );

      default:
        return (
          <>
            {extensions.map((item) => (
              <ExtensionCard key={item.name} extension={item} />
            ))}
          </>
        );
    }
  }

  return <div className="extension-showcase">{renderContent()}</div>;
}
