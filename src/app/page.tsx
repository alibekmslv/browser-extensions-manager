import { promises as fs } from "fs";
import { ThemeSwitcher } from "../components/theme-switcher";
import { Logo } from "../components/logo";
import { BrowserExtensions } from "../components/browser-extensions";

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
        <BrowserExtensions data={data} />
      </main>
    </>
  );
}
