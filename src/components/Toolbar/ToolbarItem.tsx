import React from "react";
import { useNode } from "@craftjs/core";
import { ToolbarTextInput } from "./ToolbarTextInput";

export const ToolbarItem = ({
  full = false,
  propKey,
  type,
  onChange,
  index,
  containerClass = "",
  ...props
}: any) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props[propKey],
  }));
  const value = Array.isArray(propValue) ? propValue[index] : propValue;

  const OnTextInputChange = (newValue: any) => {
    setProp((props: any) => {
      if (Array.isArray(propValue)) {
        props[propKey][index] = onChange ? onChange(newValue) : newValue;
      } else {
        props[propKey] = onChange ? onChange(newValue) : newValue;
      }
    }, 500);
  };

  return (
    <div
      className={`${containerClass} flex flex-col`}
      style={{ width: full ? "100%" : "50%" }}
    >
      <div className="mb-2">
        {["text"].includes(type) && (
          <ToolbarTextInput
            {...props}
            type={type}
            value={value}
            onChange={OnTextInputChange}
          />
        )}
      </div>
    </div>
  );
};
