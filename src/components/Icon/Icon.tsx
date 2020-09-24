import * as React from 'react'
import { IIconProps } from './typings'

function Icon(props: IIconProps) {
  const {
    width = '24',
    height = '24',
    viewBox = '0 0 24 24',
    children,
    ...remainingProps
  } = props

  console.log({ remainingProps })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      {...remainingProps}
    >
      {children}
    </svg>
  )
}

export { Icon }
export default Icon
