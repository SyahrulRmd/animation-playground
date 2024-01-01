'use client'

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import gsap from "gsap"

const buttonVariants = cva(
  "inline-flex items-center relative overflow-hidden justify-center whitespace-nowrap rounded-full gap-2 font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:text-black",
        // destructive:
        //   "bg-destructive text-destructive-foreground",
        // outline:
        //   "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:text-white",
        // ghost: "hover:bg-accent hover:text-accent-foreground",
        // link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[42px] px-4 py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const buttonRef = React.useRef<HTMLButtonElement>(null)

    React.useLayoutEffect(() => {
      const button = buttonRef.current

      let ctx = gsap.context(() => {
        if (button) {
          const radius = Math.max(button.clientWidth, button.clientHeight) / 2

          button?.addEventListener('mouseenter', (event) => {              
            gsap.fromTo(button.children[0], {
              top: event.offsetY,
              left: event.offsetX,
              scale: 0,
              ease: 'linear',
            }, {
              width: radius * 2,
              height: radius * 2,              
              x: '-50%',
              y: '-50%',
              scale: 4
            })
          })

          button?.addEventListener('mouseleave', (event) => {
            gsap.to(button.children[0], {
              width: 0,
              height: 0,
              top: event.offsetY,
              left: event.offsetX,
              scale: 0,
            })
          })
        }

      }, buttonRef)

      return () => ctx.revert()
    }, [props.id])

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={buttonRef}
        {...props}
      >
        <span className={
          cn(
            "absolute will-change-transform origin-center transition-transform duration-0 rounded-[50%]",
            variant === 'default' ? 'bg-white' : 'bg-[#1b1b1b]'
          )} />
        <span className="inline-flex gap-2 items-center relative transition-all">{props.children}</span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
