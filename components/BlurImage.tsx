import React from 'react'

// import { getPlaiceholder } from 'plaiceholder'
import Image from 'next/image'

export function BlurImage({
  src,
  alt,
  width,
  height,
  className,
  objectFit = 'contain',
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  objectFit?: any
}) {
  const base64 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nGNgYGBg+H9rgd//J6ujQWww+H9pefv/UzO2IQS+vUv7cud4JogDAMgDEhA+9jbyAAAAAElFTkSuQmCC'

  return (
    <Image
      src={src}
      width={width}
      height={height}
      blurDataURL={base64}
      placeholder='blur'
      alt={alt}
      className={className}
      // quality={75}
      style={{ objectFit: objectFit }}
      // unoptimized
    />
  )
}

export default BlurImage
