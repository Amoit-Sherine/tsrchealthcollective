import type { HTMLAttributes } from "react";

type DividerProps = HTMLAttributes<HTMLHRElement> & {
  tone?: "muted" | "olive" | "sage";
};

const toneClasses = {
  muted: "border-muted/20",
  olive: "border-olive/20",
  sage: "border-sage/30",
};

export default function Divider({
  tone = "muted",
  className = "",
  ...props
}: DividerProps) {
  return (
    <hr
      {...props}
      className={`my-6 border-t ${toneClasses[tone]} ${className}`}
    />
  );
}
