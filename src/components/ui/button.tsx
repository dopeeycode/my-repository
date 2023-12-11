import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="linear rounded-lg border border-[#201F30] items-center
     flex py-2 px-3 font-medium gap-2 transition-opacity hover:opacity-80"
    >
      {children}
    </button>
  )
}
