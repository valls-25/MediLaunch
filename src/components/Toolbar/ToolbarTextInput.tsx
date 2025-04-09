import { useState } from "react";
import { ToolbarTextInputProps } from "./Toolbar.types";

export const ToolbarTextInput = ({
  onChange,
  value,
  // prefix,
  label,
  ...props
}: ToolbarTextInputProps) => {
  const [internalValue, setInternalValue] = useState(value);

  return (
    <div className="w-full relative">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        value={internalValue || ""}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onChange?.((e.target as any).value);
          }
        }}
        onChange={(e) => {
          setInternalValue(e.target.value);
        }}
        {...props}
      />
    </div>
  );
};
