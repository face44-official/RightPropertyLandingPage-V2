import { useState, useEffect, useCallback, useRef } from 'react'

interface WindowSize {
  width: number
  height: number
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timeoutRef = useRef<any>(null)

  const handleSize = useCallback(() => {
    // Debounce resize events to reduce performance impact
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    timeoutRef.current = setTimeout(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }, 100) // 100ms debounce
  }, [])

  useEffect(() => {
    // Set initial size asynchronously (non-blocking)
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Add resize listener
    window.addEventListener('resize', handleSize, { passive: true })

    return () => {
      window.removeEventListener('resize', handleSize)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [handleSize])

  return windowSize
}

export default useWindowSize
