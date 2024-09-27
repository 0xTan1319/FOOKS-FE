import React from 'react'

interface ButtonProps {
  label: string
  onClick: any
  disabled: any
  className: string
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  className
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 font-semibold shadow-[0px_0px_8px_-2px_#001] hover:shadow-3xl ${className}`}
    >
      {label}
    </button>
  )
}

export default Button
