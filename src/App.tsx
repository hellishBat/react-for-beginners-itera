import { FC } from 'react'
import styles from './App.module.css'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import Contacts from './components/Contacts'
import Social from './components/Social'
import Footer from './components/Footer'
import data from './db/index.json'
import img from './assets/owner-photo.jpg'

const App: FC = () => {
  return (
    <>
      <main>
        <section className={styles.wrapper}>
          <div className="container">
            <div className={styles.grid}>
              <div className={`${styles.card} ${styles.liliac}`}>
                <div className={styles.cardInner}>
                  <img className={styles.image} src={img} alt="" />
                  <div className={styles.cardHeader}>
                    <h1 className={styles.heading}>{data.name}</h1>
                    <h2 className={styles.subheading}>{data.position}</h2>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} ${styles.green}`}>
                <Heading>About Me</Heading>
                <Paragraph>{data.about}</Paragraph>
              </div>

              <div className={`${styles.card} ${styles.peach}`}>
                <Heading>Skills</Heading>
                <Paragraph>{data.skills}</Paragraph>
              </div>

              <div className={`${styles.card} ${styles.cyan}`}>
                <Heading>Contacts</Heading>
                <Paragraph>
                  <Contacts data={data.contacts} />
                  <Social data={data.social} />
                </Paragraph>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
