"use client";
import React from "react";
import { useEditor, useNode } from "@craftjs/core";
import { Text } from "../Text";
import { BaseComponent } from "../../BaseComponents/BaseModal";
import { ButtonSettings } from "./ButtonSettings";

type ButtonVariant =
  | "default"
  | "gradient"
  | "shimmer"
  | "border-magic"
  | "spotify"
  | "outline";

type ButtonProps = {
  type?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  background?: Record<"r" | "g" | "b" | "a", number>;
  color?: Record<"r" | "g" | "b" | "a", number>;
  buttonStyle?: string;
  text?: string;
  textComponent?: any;
  margin?: any[];
  padding?: any[];
  display?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  position?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  spacing?: string;
  align?: string;
  verticalAlign?: string;
  transform?: string;
  decoration?: string;
  opacity?: number;
  cursor?: string;
};

export const Button = ({
  text,
  color,
  type,
  // variant = "default",
  onClick,
  ...props
}: ButtonProps) => {
  const {
    connectors: { connect },
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  // const baseClasses = "mt-2 px-4 py-2 rounded-lg transition-all duration-300";

  // const variantClasses = {
  //   default: "!bg-blue-500 text-white hover:bg-blue-600",
  //   gradient:
  //     "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90",
  //   shimmer:
  //     "bg-gradient-to-r from-blue-500 to-purple-500 text-white animate-shimmer bg-[length:200%_100%]",
  //   "border-magic":
  //     "relative overflow-hidden border-2 border-transparent before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 before:z-[-1] hover:before:opacity-90",
  //   spotify: "bg-green-500 text-white rounded-full px-6 hover:bg-green-600",
  //   outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
  //   none: "",
  // };

  const handleClick = () => {
    console.log("Button clicked");
    if (onClick) {
      onClick();
    }
  };

  return (
    <BaseComponent
      as="button"
      ref={(dom) => {
        if (dom) connect(dom);
      }}
      // className={cx(baseClasses, variantClasses[variant], className, {
      //   "shadow-lg": variant === "full",
      // })}
      $buttonStyle={props.buttonStyle}
      $background={props.background}
      $margin={props.margin}
      $padding={props.padding}
      $display={props.display}
      $width={props.width}
      $minWidth={props.minWidth}
      $maxWidth={props.maxWidth}
      $height={props.height}
      $minHeight={props.minHeight}
      $maxHeight={props.maxHeight}
      $position={props.position}
      $borderRadius={props.borderRadius}
      $borderWidth={props.borderWidth}
      $borderStyle={props.borderStyle}
      $borderColor={props.borderColor}
      $fontSize={props.fontSize}
      $fontWeight={props.fontWeight}
      $lineHeight={props.lineHeight}
      $spacing={props.spacing}
      $align={props.align}
      $verticalAlign={props.verticalAlign}
      $transform={props.transform}
      $decoration={props.decoration}
      $opacity={props.opacity}
      $cursor={props.cursor}
      onClick={handleClick}
      disabled={enabled}
    >
      <Text content={text ?? "Button"} />
    </BaseComponent>
  );
};

Button.craft = {
  displayName: "Button",
  props: {
    background: { r: 255, g: 255, b: 255, a: 0.5 },
    color: { r: 92, g: 90, b: 90, a: 1 },
    buttonStyle: "full",
    text: "Button",
    margin: ["5", "0", "5", "0"],
    padding: ["5", "0", "5", "0"],
    textComponent: {
      ...Text.craft.props,
    },
    display: "inline-block",
    width: "auto",
    minWidth: "0",
    maxWidth: "100%",
    height: "auto",
    minHeight: "0",
    maxHeight: "none",
    position: "relative",
    borderRadius: "4px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    fontSize: "16px",
    fontWeight: "normal",
    lineHeight: "1.5",
    spacing: "0",
    align: "center",
    verticalAlign: "middle",
    transform: "none",
    decoration: "none",
    opacity: 1,
    cursor: "pointer",
  },
  related: {
    toolbar: ButtonSettings,
  },
};
