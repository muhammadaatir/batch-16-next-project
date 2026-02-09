import * as React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full rounded-md border px-3 py-2 text-sm placeholder:text-slate-400 bg-white ${className || ""}`}
      {...props}
    />
  )
})

Input.displayName = "Input"

export default Input
