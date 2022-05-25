import { createContext, ReactNode, useState } from 'react'

interface ITranslationContext {
  isTranslated: boolean
  setIsTranslated: (fn: boolean) => void
}

export const TranslationContext = createContext({} as ITranslationContext)

const TranslationProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => {
  const [isTranslated, setIsTranslated] = useState(false)

  const isTranslatedValue = {
    isTranslated,
    setIsTranslated,
  }

  return (
    <TranslationContext.Provider value={isTranslatedValue}>
      {children}
    </TranslationContext.Provider>
  )
}

export default TranslationProvider
