export function cn(...inputs: Array<any>) {
  const classes: string[] = []

  inputs.forEach((input) => {
    if (!input) return

    if (typeof input === 'string') {
      classes.push(input)
      return
    }

    if (Array.isArray(input)) {
      classes.push(cn(...input))
      return
    }

    if (typeof input === 'object') {
      Object.keys(input).forEach((key) => {
        if ((input as any)[key]) classes.push(key)
      })
      return
    }
  })

  return classes.join(' ').replace(/\s+/g, ' ').trim()
}
