// Heading
import { FC, ReactNode } from 'react'
import styles from './styles.module.css'

type Props = {
  children: ReactNode | string
}

const Heading: FC<Props> = (props) => {
  return <h3 className={styles.heading}>{props.children}</h3>
}

export default Heading
