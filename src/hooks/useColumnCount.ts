import { useEffect, useState } from 'react'

const getColumnCount = (mdBreakpoint: number, lgBreakpoint: number) => {
  if (typeof window === 'undefined') return 1
  if (window.innerWidth >= lgBreakpoint) return 3
  if (window.innerWidth >= mdBreakpoint) return 2
  return 1
}

export function useColumnCount(mdBreakpoint = 768, lgBreakpoint = 1024) {
  const [columnCount, setColumnCount] = useState(() => getColumnCount(mdBreakpoint, lgBreakpoint))

  useEffect(() => {
    const handleResize = () => setColumnCount(getColumnCount(mdBreakpoint, lgBreakpoint))
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mdBreakpoint, lgBreakpoint])

  return columnCount
}
