import { ThemeSwitcher } from "../components/theme-switcher";
import { Logo } from "../components/logo";

export default function Page() {
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
      </main>
    </>
  );
}
