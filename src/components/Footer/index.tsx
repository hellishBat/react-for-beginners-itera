// Footer
import { FC } from 'react'
import styles from './styles.module.css'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          Coded with ❤ by Valentine Samoylov.
        </div>
      </div>
    </footer>
  )
}

export default Footer
