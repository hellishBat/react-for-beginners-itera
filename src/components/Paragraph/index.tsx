// Paragraph
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode | string
}

const Paragraph: FC<Props> = (props) => {
  return <p className="text-lg text-white/80">{props.children}</p>
}

export default Paragraph
