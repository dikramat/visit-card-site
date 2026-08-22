import { About } from './components/About'
import { Contacts } from './components/Contacts'
import { Focus } from './components/Focus'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LocaleProvider, useLocale } from './locale-context'
import './App.css'

function Site() {
  const { copy } = useLocale()

  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <About />
        <Focus />
        <Contacts />
      </main>
      <footer className="site-footer">
        <p>{copy.footer}</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <LocaleProvider>
      <Site />
    </LocaleProvider>
  )
}

export default App
