import React, { useEffect, useState, useCallback } from 'react'

export function useOffsetTop(ref?: React.RefObject<HTMLElement>) {
  const [viewportOffsetTop, setViewportOffsetTop] = useState<number | undefined>(undefined)
  const [pageOffsetTop, setPageOffsetTop] = useState<number | undefined>(undefined)

  const handler = useCallback(() => {
    if (!ref?.current) return
    const clientRect = ref.current.getBoundingClientRect()
    setViewportOffsetTop(clientRect.top)
    const newPageOffsetTop = clientRect.top + window.pageYOffset
    if (newPageOffsetTop !== pageOffsetTop) setPageOffsetTop(newPageOffsetTop)
  }, [ref])

  useEffect(() => {
    window.addEventListener('scroll', handler)

    return () => window.removeEventListener('scroll', handler)
  }, [ref, handler])

  return { viewportOffsetTop, pageOffsetTop }
}
