import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { Focus } from "./components/Focus";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LocaleProvider, useLocale } from "./locale-context";

function Site() {
  const { copy } = useLocale();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text)]">
      <Header />
      <main className="mx-auto w-full max-w-[1180px] flex-1 px-5 pb-16 pt-6">
        <Hero />
        <About />
        <Focus />
        <Contacts />
      </main>
      <footer className="border-t border-[var(--border)] bg-[var(--accent)] px-5 py-5 text-center text-sm text-white">
        <p>{copy.footer}</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LocaleProvider>
      <Site />
    </LocaleProvider>
  );
}

export default App;
