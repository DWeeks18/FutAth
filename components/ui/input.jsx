import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[48px] rounded-xl border border-white focus:border-accent font-light bg-[#82A3A1] px-4 py-5 text-base placeholder:text-white outline-none",
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
