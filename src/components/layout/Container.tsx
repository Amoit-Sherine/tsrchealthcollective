import type { ReactNode } from "react";

type ContainerSize = "default" | "wide" | "narrow";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  default: "max-w-6xl",
  wide: "max-w-7xl",
  narrow: "max-w-4xl",
};

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full ${sizeClasses[size]} px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
