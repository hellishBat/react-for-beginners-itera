// Social
import { FC } from 'react'

type Props = {
  data: {
    label: string
    href: string
  }[]
}

const Social: FC<Props> = (props) => {
  return (
    <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap mt-auto">
      {props.data.map((item, idx) => (
        <li className="flex" key={idx}>
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

export default Social
