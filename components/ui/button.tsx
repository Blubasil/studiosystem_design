import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-white/50",
  {
    variants: {
      variant: {
        default: 'bg-white text-black rounded-full hover:bg-white/95 hover:shadow-lg hover:shadow-white/10 active:scale-[0.98]',
        destructive: 'bg-red-600 text-white rounded-full hover:bg-red-700 active:scale-[0.98]',
        outline: 'border border-white/20 bg-transparent text-white rounded-full hover:border-white/40 hover:bg-white/5 active:scale-[0.98]',
        secondary: 'bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-white/10 hover:border-white/20 active:scale-[0.98]',
        ghost: 'text-white/60 hover:text-white hover:bg-white/5 rounded-full',
        link: 'text-white underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-7 py-3',
        sm: 'h-9 px-5 py-2',
        lg: 'h-13 px-9 py-3.5 text-base',
        icon: 'size-11',
        'icon-sm': 'size-9',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
