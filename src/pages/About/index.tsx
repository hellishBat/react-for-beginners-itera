// About
import { useContext } from 'react'
import { TranslationContext } from '../../context/TranslationContext'
import useTranslation from '../../hooks/useTranslation'
import styles from './styles.module.css'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import Contacts from '../../components/Contacts'
import Social from '../../components/Social'
import img from '../../assets/owner-photo.jpg'
import enData from '../../translations/en.json'
import uaData from '../../translations/ua.json'

const About = () => {
  const { isTranslated } = useContext(TranslationContext)
  useTranslation()
  const data = isTranslated ? uaData : enData

  return (
    <main>
      <section className="wrapper">
        <div className="container">
          <div className={styles.grid}>
            <div className={`${styles.card} ${styles.lilac}`}>
              <div className={styles.cardInner}>
                <img className={styles.image} src={img} alt="" />
                <div className={styles.cardHeader}>
                  <h1 className={styles.heading}>{data.userName}</h1>
                  <h2 className={styles.subheading}>{data.position}</h2>
                </div>
              </div>
            </div>

            <div className={`${styles.card} ${styles.green}`}>
              <Heading>{data.aboutHeading}</Heading>
              <Paragraph>{data.aboutText}</Paragraph>
            </div>

            <div className={`${styles.card} ${styles.peach}`}>
              <Heading>{data.skillsHeading}</Heading>
              <Paragraph>{data.skillsText}</Paragraph>
            </div>

            <div className={`${styles.card} ${styles.cyan}`}>
              <Heading>{data.contactsHeading}</Heading>
              <Paragraph>
                <Contacts data={data.contactsLinks} />
                <Social data={data.socialLinks} />
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
