// Contacts
import { FC } from 'react'

type Props = {
  data: {
    contacts: {
      label: string
      href: string
    }[]
  }
}

const Contacts: FC<Props> = (props) => {
  return (
    <ul className="mb-8">
      {props.data.contacts.map((item: any, idx: any) => (
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
