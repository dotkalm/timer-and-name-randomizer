import React, { useEffect, useRef } from 'react'

export default function UseInterval(callback: () => {}, delay: number) {
  const savedCallback: any = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback, savedCallback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay, savedCallback])
}
