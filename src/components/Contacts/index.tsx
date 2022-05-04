// Contacts
import { FC } from 'react'

type Props = {
  data: {
    label: string
    href: string
  }[]
}

const Contacts: FC<Props> = (props) => {
  return (
    <ul className="mb-8">
      {props.data.map((item, idx) => (
        <li key={idx}>
          <a
            className="font-medium transition-color hover:text-white"
            href={item.href}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Contacts
