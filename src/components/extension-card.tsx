import React, { useState } from "react";
import Image from "next/image";
import Switch from "./ui/switch";
import { useExtensions } from "../hooks/hooks";

export interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

type ExtensionCardProps = {
  extension: Extension;
};

export function ExtensionCard({
  extension: { description, isActive, logo, name },
}: ExtensionCardProps) {
  const { dispatch } = useExtensions();
  // Intentionally mirror state for UX implementation
  const [localIsActive, setLocalIsActive] = useState(isActive);

  return (
    <div className="extension-card">
      <div className="extension-card__info">
        <Image src={logo} width={60} height={60} alt="" />
        <div className="extension-card__details">
          <h2 className="text-2">{name}</h2>
          <p className="text-5 extension-card__description">{description}</p>
        </div>
      </div>
      <div className="extension-card__actions">
        <button
          className="button"
          onClick={() => {
            dispatch({ type: "remove", name: name });
          }}
        >
          Remove
        </button>
        <Switch
          checked={localIsActive}
          onCheckedChange={() => {
            // Manually sync with outer state
            setLocalIsActive(!localIsActive);
            dispatch({
              type: "switch",
              name: name,
            });
          }}
        />
      </div>
    </div>
  );
}
