'use client'

import { useEffect, useState } from 'react'

// Fix the naming - export both ScrollSpy and Scrollspy for compatibility
interface ScrollSpyProps {
  children: React.ReactNode
  className?: string
}

function ScrollSpyComponent({ children, className }: ScrollSpyProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={className}>{children}</div>
  }

  return <div className={className}>{children}</div>
}

// Export with both names for compatibility
export default ScrollSpyComponent
export const ScrollSpy = ScrollSpyComponent
export const Scrollspy = ScrollSpyComponent  // This fixes the import error

export function useScrollSpy(targets: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const scrollListener = () => {
      const scrollY = window.pageYOffset
      
      for (const target of targets) {
        const element = document.getElementById(target)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollY >= offsetTop - offset && scrollY < offsetTop + offsetHeight - offset) {
            setActiveId(target)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', scrollListener)
    scrollListener()
    return () => window.removeEventListener('scroll', scrollListener)
  }, [targets, offset])

  return activeId
}
