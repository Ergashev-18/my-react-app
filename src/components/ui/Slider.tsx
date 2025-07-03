import { useEffect, useState } from 'react'

const Slider = () => {
  const images = ['/images/grup.png', '/images/foto-2.png', '/images/foto1.png']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="background__slider" id="autoSlider">
      <div
        className="slider-inner"
        style={{ backgroundImage: `url('${images[index]}')` }}
      ></div>
      <div className="slider-dots" id="sliderDots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? 'dot active' : 'dot'}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default Slider