import Image from "next/image";

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
        <button className="button">Remove</button>
        <span>{String(isActive)}</span>
      </div>
    </div>
  );
}
