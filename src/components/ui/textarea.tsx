import * as React from "react"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={`w-full rounded-md border px-3 py-2 text-sm placeholder:text-slate-400 bg-white ${className || ""}`}
      {...props}
    />
  )
})

Textarea.displayName = "Textarea"

export default Textarea
