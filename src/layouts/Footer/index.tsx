// Footer
import { FC } from 'react'
import styles from './styles.module.css'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <a
            className={styles.link}
            href="https://valentine-samoylov.vercel.app/"
            rel="noreferrer noopener"
          >
            Coded with ❤ by Valentine Samoylov.
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
