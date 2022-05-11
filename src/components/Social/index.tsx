// Social
import { FC } from 'react'
import { Props } from '@/types'
import styles from './styles.module.css'

const Social: FC<Props> = (props) => {
  return (
    <ul className={styles.social}>
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

export default Social
