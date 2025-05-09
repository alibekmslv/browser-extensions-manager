import { promises as fs } from "fs";
import { ThemeSwitcher } from "../components/theme-switcher";
import { Logo } from "../components/logo";
import { ExtensionShowcase } from "../components/extension-showcase";

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
        <div className="list-control">
          <h1 className="text-1">Extensions List</h1>
          <div>
            <button>All</button>
            <button>Active</button>
            <button>Inactive</button>
          </div>
        </div>
        <ExtensionShowcase extensions={data} />
      </main>
    </>
  );
}
