import { promises as fs } from "fs";
import { ThemeSwitcher } from "../components/theme-switcher";
import { Logo } from "../components/logo";
import { ExtensionShowcase } from "../components/extension-showcase";
import FilterExtension from "../components/filter-extension";
import { ExtensionProvider } from "../components/extensions-provider";

export default async function Page() {
  const file = await fs.readFile(process.cwd() + "/src/data/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <>
      <header className="header">
        <Logo />
        <ThemeSwitcher />
      </header>
      <main>
        <ExtensionProvider extensions={data}>
          <div className="list-control">
            <h1 className="text-1">Extensions List</h1>
            <FilterExtension />
          </div>
          <ExtensionShowcase />
        </ExtensionProvider>
      </main>
    </>
  );
}
