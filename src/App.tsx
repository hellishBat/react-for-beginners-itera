// App
import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TranslationContext from './context/TranslationContext'

// import styles from './App.module.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import About from './pages/About'

const App: FC = () => {
  return (
    <>
      <TranslationContext>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </TranslationContext>
    </>
  )
}

export default App
