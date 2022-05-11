// Contacts
import { FC } from 'react'
import { Props } from '@/types'
import styles from './styles.module.css'

const Contacts: FC<Props> = (props) => {
  return (
    <ul className={styles.contacts}>
      {props.data.map((item, idx) => (
        <li key={idx}>
          <a className={styles.link} href={item.href}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Contacts
