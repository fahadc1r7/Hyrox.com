import { useEffect } from 'react'
import pageMeta from '../data/pageMeta'

const usePageMeta = (pageKey) => {
  const meta = pageMeta[pageKey]

  useEffect(() => {
    if (!meta) return
    document.title = meta.title

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', meta.description)
  }, [meta])
}

export default usePageMeta