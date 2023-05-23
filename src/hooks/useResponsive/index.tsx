import { useState, useEffect } from "react"

function getWindowDimensions() {
  if (typeof document !== 'undefined') {
    const height = document.documentElement.clientHeight
    const width = document.documentElement.clientWidth
    return {
      width,
      height,
    }
  }
  return {
    width: 0,
    height: 0,
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    if (typeof window !== 'undefined') {
      window.addEventListener(`resize`, handleResize)
      return () => window.removeEventListener(`resize`, handleResize)
    }
  }, [])

  return windowDimensions
}

export function useMediaQuery(minWidth: number) {
  console.log(`useMediaQuery: ${minWidth}`)
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    function handleResize() {
      console.log(`handleResize`)
      setWindowDimensions(getWindowDimensions())
    }

    if (typeof window !== 'undefined') {
      window.addEventListener(`resize`, handleResize)
      return () => window.removeEventListener(`resize`, handleResize)
    }
  }, [])

  return minWidth > windowDimensions.width
}

const devicesWidth = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}

export const useResposive = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowDimensions().width)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowDimensions().width)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener(`resize`, handleResize)
      return () => window.removeEventListener(`resize`, handleResize)
    }
  }, [])

  return {
    isMobile: windowWidth <= devicesWidth.md,
    isTablet: windowWidth < devicesWidth.lg && windowWidth >= devicesWidth.md,
    isTabletOrMobile: windowWidth < devicesWidth.lg,
  }
}
