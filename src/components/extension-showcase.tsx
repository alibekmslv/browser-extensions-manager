import type { Extension } from "./extension-card";
import { ExtensionCard } from "./extension-card";

interface ExtensionShowcaseProps {
  extensions: Extension[];
}

export function ExtensionShowcase({ extensions }: ExtensionShowcaseProps) {
  return (
    <div className="extension-showcase">
      {extensions.map((item) => (
        <ExtensionCard key={item.name} extension={item} />
      ))}
    </div>
  );
}
