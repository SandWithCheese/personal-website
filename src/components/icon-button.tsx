import cn from "classnames";
import React from "react";

type Intent = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  intent?: Intent; // can add more
  size?: Size;
}

const colorMap: Record<Intent, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-primary text-primary-foreground",
};

const sizeMap: Record<Size, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export default function IconButton({
  intent = "primary",
  size = "md",
  className,
  ...props
}: IconButtonProps) {
  const colorClass = colorMap[intent];
  const sizeClass = sizeMap[size];
  const classes = cn(
    "rounded-full flex items-center justify-center ring-offset-slate-900 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-60",
    colorClass,
    sizeClass,
    className,
  );
  return <button className={classes} {...props} />;
}
