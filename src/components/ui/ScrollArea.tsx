import * as React from "react";

export function ScrollArea({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`relative overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent ${className || ""}`}
      style={{ maxHeight: "400px" }}
      {...props}
    >
      <div className="h-full w-full rounded-[inherit]">
        {children}
      </div>
    </div>
  );
}
