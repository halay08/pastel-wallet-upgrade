import React, { CSSProperties } from 'react'

import * as Styles from './Button.styles'

export interface IButtonProps {
  variant?: 'default' | 'transparent' | 'navigation'
  type?: 'submit' | 'button'
  style?: CSSProperties
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<IButtonProps> = ({
  children,
  variant = 'default',
  type = 'button',
  onClick,
  disabled,
  ...restProps
}) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (onClick) {
      event.preventDefault()
      onClick()
    }
  }

  return variant === 'navigation' ? (
    <Styles.NavigationButton onClick={handleClick}>
      {children}
    </Styles.NavigationButton>
  ) : (
    <Styles.Button
      type={type}
      $variant={variant}
      {...restProps}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </Styles.Button>
  )
}

export default Button
