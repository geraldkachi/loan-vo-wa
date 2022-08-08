import { useEffect, useState } from 'react'
import "./styles.css"
const ScrollToTop = () => {
  const [scrollShowTopButton, setScrollShowTopButton] = useState(false)

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScrollShowTopButton(true)
      } else {
        setScrollShowTopButton(false)
      }
    })
  }, [])


  return <>
    {scrollShowTopButton && <div className='top-btn-position top-btn-style' onClick={scrollTop}>ScrollToTop</div>}
  </>
}

export default ScrollToTop
