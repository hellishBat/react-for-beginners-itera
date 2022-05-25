// Contacts
import { FC } from 'react'
import { LinkTypes } from '@/types'
import styles from './styles.module.css'

const Contacts: FC<LinkTypes> = (props) => {
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
