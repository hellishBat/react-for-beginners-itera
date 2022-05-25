import { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { TranslationContext } from '../../context/TranslationContext'

const useTranslation = () => {
  const { isTranslated, setIsTranslated } = useContext(TranslationContext)
  let [searchParams] = useSearchParams()

  const ln = searchParams.get('ln')

  useEffect(() => {
    if (ln === 'ua') {
      setIsTranslated(true)
    } else {
      setIsTranslated(false)
    }
  }, [ln, setIsTranslated, isTranslated])

  // return isTranslated
}

export default useTranslation
