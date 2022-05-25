// Home
import { useContext } from 'react'
import { TranslationContext } from '../../context/TranslationContext'
import useTranslation from '../../hooks/useTranslation'
import styles from './styles.module.css'
import enData from '../../translations/en.json'
import uaData from '../../translations/ua.json'

const Home = () => {
  const { isTranslated } = useContext(TranslationContext)
  useTranslation()
  const data = isTranslated ? uaData : enData

  return (
    <main>
      <section className="wrapper">
        <div className="container">
          <div className={styles.box}>
            <h1 className={styles.heading}>{data.userName}</h1>
            <h2 className={styles.subheading}>{data.position}</h2>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
