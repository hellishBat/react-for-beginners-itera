// Heading
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode | string
}

const Heading: FC<Props> = (props) => {
  return <h3 className="mb-4 text-3xl font-medium">{props.children}</h3>
}

export default Heading
